const { Router } = require('express');
const { insert } = require('../controllers/user');

const userRoutes = Router();

userRoutes.post('/user', insert);

module.exports = userRoutes;