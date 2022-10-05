const checkEmail = (req, res, next) => {
    const { email } = req.body;
    const regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
    if (!email) {
        return res.status(400).send({ message: 'Email obrigatório' });
    }
    if (!regex.test(email)) {
        return res.status(400).send({ message: 'Email em formato inválido' });
    }
    next();
};

const checkPassword = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).send({ message: 'Password obrigatório' });
    }
    if (password.length < 6) {
        return res.status(400).send({ message: 'Password curto' });
    }
    next();
};

module.exports = {
    checkEmail,
    checkPassword,
};