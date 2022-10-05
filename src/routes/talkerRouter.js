const express = require('express');

const tokenChecked = require('../middlewares/tokenChecked');
const validateTalker = require('../middlewares/talkerChecked');
const {
    allTalkers,
    talkerById,
    addTalker,
    editTalker,
} = require('../functions/talkerFunctions');

const router = express.Router();

router.get('/', allTalkers);

router.get('/:id', talkerById);

router.use(tokenChecked);

router.post('/', validateTalker, addTalker);

router.put('/:id', validateTalker, editTalker);

module.exports = router;