const { readData, writeData } = require('../utils/fsUtils');

async function allTalkers(_req, res) {
    const talkers = await readData();
    res.status(200).send(talkers);
}

async function talkerById(req, res) {
    const { id } = req.params;
    const talkers = await readData();
    const talkerId = talkers.find((element) => Number(id) === element.id);

    if (talkerId) {
        return res.status(200).json(talkerId);
    }

    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
}

async function addTalker(req, res) {
    const talkers = await readData();

    const newTalker = {
        id: talkers.length + 1,
        ...req.body,
    };
    await writeData([
        ...talkers,
        newTalker,
    ]);

    res.status(201).send(newTalker);
}

async function editTalker(req, res) {
    const talkers = await readData();
    const { id } = req.params;
    const talkerEdit = talkers.findIndex((talker) => talker.id === Number(id));
    talkers[talkerEdit] = {
        id: Number(id),
        ...req.body,
    };
    await writeData(talkers);
    res.status(200).send(talkers[talkerEdit]);
}

module.exports = {
    allTalkers,
    talkerById,
    addTalker,
    editTalker,
};