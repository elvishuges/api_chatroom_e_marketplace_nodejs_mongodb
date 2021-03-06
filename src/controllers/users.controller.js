var User = require('../models/user.model');
exports.find = async function (req, res) {
    try {
        const users = await User.find({}).populate('role')
        res.send({
            users,
        });

    } catch (error) {
        return res.status(400).send({ error: " Algo deu errado na aplicação" });
    }
};
