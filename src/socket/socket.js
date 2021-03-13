const { joinUser, removeUser, getUsers } = require("./userListSocket");
const {
  inInitialPage,
  disconnect,
  chatMessageFromRoom,
} = require("./userSocketController");

module.exports.listen = function (server) {
  const io = require("socket.io")(server);
  let thisRoom = "";
  io.on("connection", function (socket) {
    console.log("new user connected", socket.id);

    socket.on("onRoom", function (data) {
      console.log("onRoom data:", data);
      inInitialPage(socket, data, io);
    });

    socket.on("chatMessageFromRoom", function (data) {
      console.log("chatMessageFromRoom data", data);
      chatMessageFromRoom(data, io);
    });

    socket.on("disconnect", function () {
      console.log("disconnect", socket.id);
      disconnect(socket, io);
    });
  });
};
