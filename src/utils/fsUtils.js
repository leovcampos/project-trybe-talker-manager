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

async function writeData(file) {
    try {
        const pathFile = path.resolve('src', 'talker.json');
        await fs.writeFile(pathFile, JSON.stringify(file));
      } catch (err) {
        console.error(`Erro ao ler o arquivo: ${err.message}`);
      }
}

module.exports = {
    readData,
    writeData,
};