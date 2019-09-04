const CatModel = require('../models/cat.model');

class CatService {
  static async createCat(name) {
    try {
      return CatModel.create({ name: name });
    } catch (err) {
      throw err;
    }
  }

  static async getAll() {
    try {
      const cats = await CatModel.find();
      return cats;
    } catch (err) {
      throw err;
    }
  }
  static async getCat(id) {
    try {
      const cat = await CatModel.findById(id);
      return cat;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CatService;
