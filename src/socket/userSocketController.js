/* register-handler.js */
const { joinUser, removeUser, getUsers } = require('./userListSocket');
const roomName = "InitialPage"

function inInitialPage(socket, data, io) {
    const { user } = data
    let userJoined = joinUser(socket.id, user, roomName)
    io.to(roomName).emit("newLogedSocket", { data: userJoined }); // emitte before join
    socket.join(roomName)
    socket.emit('logedSocketList', getUsers());
}

function disconnect(socket, io) {
    const user = removeUser(socket.id);
    io.to(roomName).emit("removeLogedSocke", { data: socket });
    //io.to(roomName).emit("chat message", {data:data,id : socket.id});
}

module.exports = { inInitialPage, disconnect }