const { joinUser, removeUser, getUsers } = require("./userListSocket");
const {
  onRoom,
  disconnect,
  chatMessageFromRoom,
} = require("./userSocketController");

module.exports.listen = function (server) {
  const io = require("socket.io")(server);
  io.on("connection", function (socket) {
    console.log("connection:", socket.id);

    socket.on("onRoom", function (data) {
      console.log("onRoom data:", data);
      onRoom(socket, data, io);
    });

    socket.on("chatMessageFromRoom", function (data) {
      let { roomTitle, message, userEmail } = data;
      chatMessageFromRoom(roomTitle, message, userEmail, io);
    });
    socket.on("logedUsersByRoom", function (data) {
      chatMessageFromRoom(data, io);
    });

    socket.on("disconnect", function () {
      console.log("disconnect:", socket.id);
      disconnect(socket, io);
    });
  });
};
