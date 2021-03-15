const {
  joinUser,
  removeUser,
  getUsers,
  findUser,
  getUserByRoomTitle,
} = require("./userListSocket");
const roomName = "InitialPage";

function onRoom(socket, data, io) {
  const { user } = data;
  const { roomTitle } = data;

  let userJoined = joinUser(socket.id, user, roomTitle);
  io.to(roomTitle).emit("newUserInRoom", { data: userJoined });
  socket.join(roomTitle);
  let users = getUserByRoomTitle(roomTitle);
  socket.emit("logedUsersList", users);
}

function chatMessageFromRoom(roomTitle, message, userEmail, io) {
  io.to(roomTitle).emit("chatMessageToRoom", {
    data: { message: message, userEmail: userEmail },
  });
}

function disconnect(socket, io) {
  const user = removeUser(socket.id);
}

module.exports = { onRoom, disconnect, chatMessageFromRoom };
