const Category = require("../models/category.model");
const Product = require("../models/product.model");
const Marketplace = require("../models/marketplace.model");
const User = require("../models/user.model");
const authConfig = require("../config/auth");

var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

//===================auth

exports.registerUser = async function (req, res) {
  try {
    const { email, username, password } = req.body;
    if (await User.findOne({ email })) {
      return res.status(400).send({ error: "Algo errado com seu e-mail" });
    } else {
      const user = await new User({
        username: username,
        email: email,
        password: bcrypt.hashSync(password, 8),
      }).save();

      res.send({ user: user, token: generateToken({ user: user }) });
    }
  } catch (error) {
    return res.status(500).send({ error: " Algo deu errado na aplicação" });
  }
};

exports.loginUser = async function (req, res) {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email }).select("password");
    if (!userFound) {
      return res.status(400).send({ error: "Usuário ou senha incorretos" });
    }

    if (!(await bcrypt.compare(password, userFound.password))) {
      return res.status(400).send({ error: "Usuário ou senha incorretos" });
    }

    const user = await User.findOne({ email });

    res.status(200).send({ user, token: generateToken({ user: user }) });
  } catch (error) {
    console.log("error", error);
    return res.status(400).send({ error: " Algo deu errado na aplicação" });
  }
};

//===================cagetory

/**
 *
 * @param {*} req
 * @param {*} res
 */

exports.getCategories = async function (req, res) {
  try {
    const categories = await Category.find({});
    res.send({
      categories,
    });
  } catch (error) {}
};

exports.createCategory = async function (req, res) {
  try {
    const { name } = req.body;
    const category = await new Category({
      name: name,
    }).save();

    let categoryFounded = await category.findOne({ name });

    res.send({ cagetory: categoryFounded });
  } catch (error) {}
};

//===================marketplace

/**
 *
 * @param {*} req
 * @param {*} res
 */

exports.createMarketplace = async function (req, res) {
  try {
    const { name } = req.body;

    const marketPlace = await new Marketplace({
      name: name,
    }).save();

    let marketplaceFounded = await Marketplace.findOne({ name });

    res.send({ marketplace: marketplaceFounded });
  } catch (error) {}
};

/**
 * get the market place from a user by token
 * @param {*} req
 * @param {*} res
 */

exports.getMarketplace = async function (req, res) {
  try {
    const { name } = req.body;

    const marketPlace = await new Marketplace({
      name: name,
    }).save();

    let marketplaceFounded = await Marketplace.findOne({ name });

    res.send({ marketplace: marketplaceFounded });
  } catch (error) {}
};
