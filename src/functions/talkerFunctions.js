const readFile = require('../utils/fsUtils');

async function allTalkers(_req, res) {
    const talkers = await readFile();
    res.status(200).send(talkers);
}

module.exports = {
    allTalkers,
};