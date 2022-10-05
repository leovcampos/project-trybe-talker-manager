const express = require('express');
const token = require('../functions/loginFunctions');
const { checkEmail, checkPassword } = require('../middlewares/loginChecked');

const router = express.Router();

router.post('/', checkEmail, checkPassword, token);

module.exports = router;
