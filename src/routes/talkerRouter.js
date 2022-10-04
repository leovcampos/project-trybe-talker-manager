const express = require('express');

const {
    allTalkers,
    talkerById,
} = require('../functions/talkerFunctions');

const router = express.Router();

router.get('/', allTalkers);

router.get('/:id', talkerById);

module.exports = router;