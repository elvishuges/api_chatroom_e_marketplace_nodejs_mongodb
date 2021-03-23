const { joinUser, removeUser, getUsers } = require("./userListSocket");
const {
  onRoom,
  disconnect,
  chatMessageFromRoom,
  userOutRoom,
} = require("./userSocketController");

module.exports.listen = function (server) {
  const io = require("socket.io")(server);
  io.on("connection", function (socket) {
    console.log("connection:", socket.id);

    socket.on("onRoom", function (data) {
      onRoom(socket, data, io);
    });

    socket.on("chatMessageFromRoom", function (data) {
      let { roomTitle, message, userEmail, username } = data;
      chatMessageFromRoom(roomTitle, message, userEmail, username, io);
    });

    socket.on("logedUsersByRoom", function (data) {
      chatMessageFromRoom(data, io);
    });

    socket.on("userOutRoom", function (data) {
      console.log("userOut data", data);
      let { roomTitle, user } = data;
      userOutRoom(roomTitle, user, io);
    });

    socket.on("disconnect", function () {
      disconnect(socket, io);
    });
  });
};
