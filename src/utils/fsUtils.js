const fs = require('fs').promises;
const path = require('path');

async function readData() {
    try {
        const pathFile = path.resolve('src', 'talker.json');
        const data = await fs.readFile(pathFile);
        return JSON.parse(data);
    } catch (error) {
        console.error(`Erro na leitura: ${error}`);
    }
}

module.exports = readData;