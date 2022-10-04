const express = require('express');

const {
    allTalkers,
} = require('../functions/talkerFunctions');

const router = express.Router();

router.get('/', allTalkers);

module.exports = router;