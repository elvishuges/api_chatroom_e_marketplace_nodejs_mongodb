let userListSocket = [];
function joinUser(socketId, user, roomTitle) {
  const userSocket = {
    socketID: socketId,
    user: user,
    roomTitle: roomTitle,
  };
  userListSocket.push(userSocket);
  return userSocket.user;
}
function removeUser(id) {
  const getID = (userListSocket) => userListSocket.socketID === id;
  const index = userListSocket.findIndex(getID);
  if (index !== -1) {
    return userListSocket.splice(index, 1)[0];
  }
}

function findUser(email) {
  const getID = (userListSocket) => userListSocket.user.email === email;
  const index = userListSocket.findIndex(getID);
  if (index !== -1) {
    return true;
  }
  return false;
}

function getUsers() {
  return userListSocket.map((socket) => {
    return socket.user;
  });
}

function getUserByRoomTitle(roomTitle) {
  return userListSocket
    .filter((socket) => socket.roomTitle == roomTitle)
    .map((socket) => socket.user);
}
module.exports = {
  joinUser,
  removeUser,
  getUsers,
  findUser,
  getUserByRoomTitle,
};
