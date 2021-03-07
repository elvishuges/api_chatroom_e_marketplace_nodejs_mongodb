let userListSocket = [];
function joinUser(socketId, user, roomName) {
    const userSocket = {
        socketID: socketId,
        user: user,
        roomname: roomName
    }
    userListSocket.push(userSocket)
    return userSocket;
}
function removeUser(id) {
    const getID = userListSocket => userListSocket.socketID === id;
    const index = userListSocket.findIndex(getID);
    if (index !== -1) {
        return userListSocket.splice(index, 1)[0];
    }
}

function getUsers() {
    return userListSocket
}
module.exports = { joinUser, removeUser, getUsers }