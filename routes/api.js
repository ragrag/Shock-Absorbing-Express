const express = require('express');
const CatController = require('../app/controllers/cat.controller');
const UserController = require('../app/controllers/user.controller');
const authorizeUser = require('../app/Utils/middlewares/authorization.middleware');
const assignUser = require('../app/Utils/middlewares/assignUser.middleware');
const validateId = require('../app/Utils/middlewares/validateObjectId.middleware');

const router = express.Router();

/* User routes */
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

/* Cat routes */
router.get('/cats', CatController.index);
router.post('/cats', CatController.store);
router.get('/cats/:id', [validateId], CatController.show);
router.put('/cats/:id', CatController.update);
router.delete('/cats/:id', CatController.destroy);

module.exports = router;
