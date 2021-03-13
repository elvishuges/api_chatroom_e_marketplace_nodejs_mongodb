var express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var app = express();
const server = require("http").createServer(app);

require("./socket/socket").listen(server);
const port = 4000;
//BODY parse of requistion

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Wellcome to Mongodb API");
});

const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");

app.use("/user", userRoutes);
app.use("/auth", authRoutes);

server.listen(process.env.PORT || port, function () {
  console.log(`-- Listening on port ${port} --`);
});
