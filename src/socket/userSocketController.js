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
  io.to(roomTitle).emit("newUserInRoom", userJoined);
  socket.join(roomTitle);
  let users = getUserByRoomTitle(roomTitle);
  socket.emit("logedUsersList", users);
}

function chatMessageFromRoom(roomTitle, message, userEmail, username, io) {
  io.to(roomTitle).emit("chatMessageToRoom", {
    data: { message: message, userEmail: userEmail, username: username },
  });
}

function userOutRoom(roomTitle, user, io) {
  io.to(roomTitle).emit("userOutRoom", { user: user });
}

function disconnect(socket, io) {
  //io.to(roomTitle).emit("userOutRoom", userJoined);
  const user = removeUser(socket.id);
}

module.exports = { onRoom, disconnect, chatMessageFromRoom, userOutRoom };
