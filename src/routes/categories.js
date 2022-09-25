const { Router } = require('express');
const { get } = require('../controllers/category');
const validaToken = require('../middlewares/validaToken');

const categoriesRoutes = Router();

categoriesRoutes.get('/categories', validaToken, get);

module.exports = categoriesRoutes;