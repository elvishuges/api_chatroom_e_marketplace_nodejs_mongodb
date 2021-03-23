var User = require("../models/user.model");
var Role = require("../models/role.model");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

exports.login = async function (req, res) {
  console.log("LOGIN");
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email }).select("password");
    if (!userFound) {
      return res.status(400).send({ error: "Usuário ou senha incorretos" });
    }

    if (!(await bcrypt.compare(password, userFound.password))) {
      return res.status(400).send({ error: "Usuário ou senha incorretos" });
    }

    const user = await User.findOne({ email }).populate("role");

    res.status(200).send({ user, token: generateToken({ user: user }) });
  } catch (error) {
    console.log("error", error);
    return res.status(400).send({ error: " Algo deu errado na aplicação" });
  }
};

exports.register = async function (req, res) {
  try {
    const { email, username, password } = req.body;
    if (await User.findOne({ email })) {
      return res.status(400).send({ error: "Email já cadastrado no sistema" });
    } else {
      let roleFound = await Role.findOne({ name: "Common" });

      const user = await new User({
        username: username,
        email: email,
        role: roleFound._id,
        password: bcrypt.hashSync(password, 8),
      }).save();

      userFound = await User.findOne({ email }).populate("role");
      res.send({ user: userFound, token: generateToken({ user: userFound }) });
    }
  } catch (error) {
    return res.status(500).send({ error: " Algo deu errado na aplicação" });
  }
};
