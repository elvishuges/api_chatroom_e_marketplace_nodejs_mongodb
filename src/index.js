var express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var app = express();
const server = require("http").createServer(app);

require("./socket/socket").listen(server);
//BODY parse of requistion

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const testRoutes = require("./routes/test.routes");

app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/test", testRoutes);

var port = process.env.PORT || 4000;

server.listen(port, function () {
  console.log(`-- Listening on port ${port} --`);
});
