const CatModel = require('../models/cat.model');

class CatService {
  static async createCat(name) {
    try {
      return await CatModel.createCat(name);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CatService;
