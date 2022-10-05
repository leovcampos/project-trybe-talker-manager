const express = require('express');
const randonToken = require('../functions/loginFunctions');
const { checkEmail, checkPassword } = require('../middlewares/loginChecked');

const router = express.Router();

router.post('/', checkEmail, checkPassword, randonToken);

module.exports = router;
