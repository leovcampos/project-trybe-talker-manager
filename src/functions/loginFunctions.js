const crypto = require('crypto');

const RandonToken = (_req, res) => {
    const token = crypto.randomBytes(8).toString('hex');
    res.status(200).json({ token });
};

module.exports = RandonToken;