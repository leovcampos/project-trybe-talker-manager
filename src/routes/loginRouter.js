const express = require('express');
const token = require('../functions/loginFunctions');
const loginChecked = require('../middlewares/loginChecked');

const router = express.router();

router.post('/', loginChecked, token);

module.exports = router;
