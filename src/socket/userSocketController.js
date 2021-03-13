/* register-handler.js */
const {
  joinUser,
  removeUser,
  getUsers,
  findUser,
} = require("./userListSocket");
const roomName = "InitialPage";

function inInitialPage(socket, data, io) {
  const { user } = data;
  const { roomTitle } = data;

  let userJoined = joinUser(socket.id, user, roomTitle);
  io.to(roomTitle).emit("newLogedSocket", { data: userJoined });
  socket.join(roomTitle);
  socket.emit("logedSocketList", getUsers());
}

function chatMessageFromRoom(data, io) {
  io.to(data.roomTitle).emit("chatMessageToRoom", { data: data.message });
}

function disconnect(socket, io) {
  const user = removeUser(socket.id);
}

module.exports = { inInitialPage, disconnect, chatMessageFromRoom };
