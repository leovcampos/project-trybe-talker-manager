const express = require('express');
const RandonToken = require('../functions/loginFunctions');
const { checkEmail, checkPassword } = require('../middlewares/loginChecked');

const router = express.Router();

router.post('/', checkEmail, checkPassword, RandonToken);

module.exports = router;
