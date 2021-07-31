const mongoose = require("mongoose");
var bcrypt = require("bcrypt");
mongoose.Promise = global.Promise;

const roles = ["Admin", "Common"];
const dbConfig = require("./../config/db.config");
mongoose
  .connect(
    dbConfig.HOST,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    } //localhost/noderest'
  )
  .then(() => {
    console.log("Successfully connected to the database");
    populateRules(roles);
    creteUserAdmin();
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

async function creteUserAdmin() {
  const User = require("./../models/user.model");
  const Role = require("./../models/role.model");
  const Category = require("./../models/category.model");
  let roleFound = await Role.findOne({ name: "Admin" });
  let user = await User.find({ role: roleFound._id });
  let category = await Category.find();
  console.log("category", category);
  if (!user.length) {
    const user = await new User({
      username: "Jaque Huges",
      email: "jaque@hotmail.com",
      role: roleFound._id,
      password: bcrypt.hashSync(process.env.PASSWORD, 8),
    }).save();
  }
  if (!category.length) {
    const category = await new Category({
      name: "Categoria",
    }).save();
  }
}

async function populateRules(roles) {
  const Role = require("./../models/role.model");
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      roles.forEach((element) => {
        let role = new Role({
          name: element,
        }).save((err) => {
          if (err) {
            console.log("error", err);
          }
          console.log(`role to ${element} added`);
        });
      });
    }
  });
}

module.exports = mongoose;
