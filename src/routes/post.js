const { Router } = require('express');
const { get } = require('../controllers/post');
const validaToken = require('../middlewares/validaToken');

const postRoutes = Router();

postRoutes.get('/post', validaToken, get);

module.exports = postRoutes;