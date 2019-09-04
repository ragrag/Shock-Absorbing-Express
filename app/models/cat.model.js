const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
  name: String
});

const CatModel = mongoose.model('cat', CatSchema);

module.exports = CatModel;
