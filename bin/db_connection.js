const mongoose = require('mongoose');

function connect() {
  if (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'staging') process.env.DB_HOST = process.env.DB_HOST_TESTING;
  if (process.env.NODE_ENV === 'production') process.env.DB_HOST = process.env.DB_HOST_PRODUCTION;
  mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

  const db = mongoose.connection;
  db.on('error', () => {
    console.log('Error connecting to Database');
  });
  db.once('open', () => {
    // we're connected!
    console.log(`Database connected`);
  });
}

module.exports.connect = connect;
