const { Router } = require('express');
const { get } = require('../controllers/post');
const { getId } = require('../controllers/post');
const { insert } = require('../controllers/post');
const { updated } = require('../controllers/post');
const validaToken = require('../middlewares/validaToken');

const postRoutes = Router();

postRoutes.post('/post', validaToken, insert);
postRoutes.get('/post', validaToken, get);
postRoutes.get('/post/:id', validaToken, getId);
postRoutes.put('/post/:id', validaToken, updated);

module.exports = postRoutes;