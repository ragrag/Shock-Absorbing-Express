const mongoose = require('mongoose');

function connect() {
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
