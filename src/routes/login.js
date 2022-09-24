const { Router } = require('express');
const authent = require('../middlewares/authentication');

const loginRoutes = Router();

loginRoutes.post('/login', authent);

module.exports = loginRoutes;