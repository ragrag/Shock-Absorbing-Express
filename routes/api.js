const express = require('express');
const passport = require('passport');
const passportConf = require('../app/Utils/middlewares/passport');
const CatController = require('../app/controllers/cat.controller');
const UserController = require('../app/controllers/user.controller');
const validateId = require('../app/Utils/middlewares/validateObjectId.middleware');

const router = express.Router();

/* User routes */
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

/* Cat routes */
router.get('/cats', CatController.index);
router.post('/cats', [passport.authenticate('jwt', { session: false })], CatController.store);
router.get('/cats/:id', [validateId], CatController.show);
router.put('/cats/:id', CatController.update);
router.delete('/cats/:id', CatController.destroy);

module.exports = router;
