const checkEmail = (req, res, next) => {
    const { email } = req.body;
    const regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
    if (!email) {
        return res.status(400).send({ message: 'O campo "email" é obrigatório' });
    }
    if (!regex.test(email)) {
        return res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
};

const checkPassword = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).send({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length < 6) {
        return res.status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    next();
};

module.exports = {
    checkEmail,
    checkPassword,
};