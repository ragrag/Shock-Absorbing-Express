const express = require('express');
const passport = require('passport');
const passportConf = require('../app/Utils/middlewares/passport');
const CatController = require('../app/controllers/cat.controller');
const UserController = require('../app/controllers/user.controller');
const validateId = require('../app/Utils/middlewares/validateObjectId.middleware');

const router = express.Router();

/* Authentication Routes */
router.post('/oauth/facebook', [passport.authenticate('facebook-token', { session: false })], UserController.authenticateSocial);
router.post('/oauth/twitter', [passport.authenticate('twitter-token', { session: false })], UserController.authenticateSocial);

/* User routes */
router.get('/user/:id', [validateId], UserController.getUser);
router.patch('/user', [passport.authenticate('jwt', { session: false })], UserController.updateUser);
router.delete('/user', [passport.authenticate('jwt', { session: false })], UserController.deleteUser);

/* Cat routes */
router.get('/cats', CatController.index);
router.post('/cats', CatController.store);
router.get('/cats/:id', [validateId], CatController.show);
router.put('/cats/:id', CatController.update);
router.delete('/cats/:id', CatController.destroy);

module.exports = router;
