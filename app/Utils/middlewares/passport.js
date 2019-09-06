const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const TwitterTokenStrategy = require('passport-twitter-token');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../../models/user.model');

require('dotenv').config();

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    },
    async (payload, done) => {
      try {
        const user = await User.findById(payload._id);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

passport.use(
  new FacebookTokenStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      fbGraphVersion: 'v3.0'
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ $or: [{ email: profile.emails[0].value }, { $and: [{ 'socialProvider.provider': 'facebook' }, { 'socialProvider.providerId': profile.id }] }] });
        if (user) {
          return done(null, user);
        }

        const socialProvider = {
          provider: 'facebook',
          providerId: profile.id
        };

        const newUser = await User.create({
          displayName: profile.displayName,
          email: profile.emails[0].value,
          socialProvider: socialProvider,
          photo: profile.photos[0].value,
          username: profile.name.givenName + profile.id.slice(-4)
        });
        done(null, newUser);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

passport.use(
  new TwitterTokenStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      includeEmail: true
    },
    async (token, tokenSecret, profile, done) => {
      try {
        const user = await User.findOne({ $or: [{ email: profile.emails[0].value }, { $and: [{ 'socialProvider.provider': 'twitter' }, { 'socialProvider.providerId': profile.id }] }] });
        if (user) {
          return done(null, user);
        }

        const socialProvider = {
          provider: 'facebook',
          providerId: profile.id
        };

        const newUser = await User.create({
          displayName: profile.displayName,
          email: profile.emails[0].value,
          socialProvider: socialProvider,
          photo: profile.photos[0].value,
          username: profile.username
        });
        done(null, newUser);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);
