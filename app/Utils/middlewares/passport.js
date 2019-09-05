const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../../models/user.model');

require('dotenv').config();

const opts = { jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: process.env.JWT_SECRET };

passport.use(
  new JwtStrategy(opts, async (payload, done) => {
    try {
      const user = await User.findById(payload._id);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (err) {
      return done(err, false);
    }
  })
);
