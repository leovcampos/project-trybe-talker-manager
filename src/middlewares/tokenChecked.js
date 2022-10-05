const tokenChecked = (req, res, next) => {
    const auth = req.get('authorization');
    if (!auth) {
        return res.status(401).send({ message: 'Token não encontrado' });
      }
    if (auth.length !== 16) {
        return res.status(401).send({ message: 'Token inválido' });
    }

    next();
};

module.exports = tokenChecked;