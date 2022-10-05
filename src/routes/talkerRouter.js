const express = require('express');

const tokenChecked = require('../middlewares/tokenChecked');
const validateTalker = require('../middlewares/talkerChecked');
const { checkEmail, checkPassword } = require('../middlewares/loginChecked');
const {
    allTalkers,
    talkerById,
    addTalker,
    editTalker,
    deleteTalker,
    searchTalker,
} = require('../functions/talkerFunctions');

const router = express.Router();

router.get('/search', tokenChecked, searchTalker);

router.get('/', allTalkers);

router.get('/:id', talkerById);

router.use(tokenChecked);

router.post('/', validateTalker, addTalker);

router.put('/:id', validateTalker, editTalker);

router.delete('/:id', deleteTalker);

module.exports = router;