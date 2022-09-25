const { Router } = require('express');
const { get, insert } = require('../controllers/category');
const validaToken = require('../middlewares/validaToken');

const categoriesRoutes = Router();

categoriesRoutes.get('/categories', validaToken, get);
categoriesRoutes.post('/categories', validaToken, insert);

module.exports = categoriesRoutes;