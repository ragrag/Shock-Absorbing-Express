const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
  name: String
});

const CatModel = mongoose.model('cat', CatSchema);

CatModel.createCat = async (name) => {
  try {
    const cat = new CatModel({
      name: name
    });
    await cat.save();
    return cat;
  } catch (err) {
    throw err;
  }
};

module.exports = CatModel;
