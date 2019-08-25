const Boom = require('boom');
const CatService = require('../services/cat.service');
const { validateCat } = require('../Utils/validators/cat.validator');

class CatController {
  static async index(req, res) {
    return res.json(200);
  }

  static async store(req, res) {
    try {
      const { name } = req.body;
      const { error } = validateCat(name);
      if (error) throw Boom.badRequest(error.details[0].message);
      const cat = await CatService.createCat(name);
      return res.status(201).json(cat);
    } catch (err) {
      return res.status(Boom.isBoom(err) ? err.output.statusCode : 500).json(err.message);
    }
  }

  static async show(req, res) {
    return res.json(200);
  }

  static async update(req, res) {
    return res.json(200);
  }

  static async destroy(req, res) {
    return res.json(200);
  }
}

module.exports = CatController;
