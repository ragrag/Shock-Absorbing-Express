const express = require('express');
const CatController = require('../app/controllers/cat.controller');
const UserController = require('../app/controllers/user.controller');
const authMiddleware = require('../app/Utils/middlewares/auth');

const router = express.Router();

/* User routes */
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

/* Cat routes */
router.get('/cats', CatController.index);
router.post('/cats', authMiddleware, CatController.store);
router.get('/cats/:id', CatController.show);
router.put('/cats/:id', CatController.update);
router.delete('/cats/:id', CatController.destroy);

module.exports = router;
