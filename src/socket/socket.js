const { joinUser, removeUser, getUsers } = require('./userListSocket');
const { inInitialPage, disconnect } = require('./userSocketController');


module.exports.listen = function (server) {
    const io = require("socket.io")(server);
    let thisRoom = ""
    io.on('connection', function (socket) {
        console.log('New user connected', socket.id);
        socket.on('onInitialPage', function (data) {
            inInitialPage(socket, data, io)
        })

        socket.on('disconnect', function () {
            //disconnect(socket, io)
        });
    });
}
