const readFile = require('../utils/fsUtils');

async function allTalkers(_req, res) {
    const talkers = await readFile();
    res.status(200).send(talkers);
}

async function talkerById(req, res) {
    const { id } = req.params;
    const talkers = await readFile();
    const talkerId = talkers.find((element) => Number(id) === element.id);

    if (talkerId) {
        return res.status(200).json(talkerId);
    }

    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
}

module.exports = {
    allTalkers,
    talkerById,
};