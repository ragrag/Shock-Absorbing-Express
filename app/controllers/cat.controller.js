const Boom = require('boom');
const CatService = require('../services/cat.service');
const { validateCat } = require('../Utils/validators/cat.validator');

class CatController {
  static async index(req, res, next) {
    try {
      const cats = await CatService.getAll();
      return res.status(200).json(cats);
    } catch (err) {
      next(err);
    }
  }

  static async store(req, res, next) {
    try {
      const { name } = req.body;
      const { error } = validateCat(name);
      if (error) throw Boom.badRequest(error.details[0].message);
      const cat = await CatService.createCat(name);
      return res.status(201).json(cat);
    } catch (err) {
      next(err);
    }
  }

  static async show(req, res, next) {
    try {
      const cat = await CatService.getCat(req.params.id);
      if (!cat) throw Boom.notFound('Cat not Found');
      return res.status(200).json(cat);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res) {
    return res.json(200);
  }

  static async destroy(req, res) {
    return res.json(200);
  }
}

module.exports = CatController;
