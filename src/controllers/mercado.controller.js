var Category = require("../models/category.model");
var Product = require("../models/product.model");
var MarketPlace = require("../models/marketplace.model");
const authConfig = require("../config/auth");

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

/**
 *
 * @param {*} req
 * @param {*} res
 */

exports.createMarketPlace = async function (req, res) {
  try {
    const { name } = req.body;

    const marketPlace = await new MarketPlace({
      name: name,
    }).save();

    let marketPlaceFounded = await MarketPlace.findOne({ name });

    res.send({ marketPlace: marketPlaceFounded });
  } catch (error) {}
};
