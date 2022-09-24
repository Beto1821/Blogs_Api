const { Router } = require('express');
const { insert, get } = require('../controllers/user');
const validaToken = require('../middlewares/validaToken')

const userRoutes = Router();

userRoutes.post('/user', insert);
userRoutes.get('/user', validaToken, get);

module.exports = userRoutes;