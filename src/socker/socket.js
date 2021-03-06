var users = [];
var idsnicks = {};


module.exports.listen = function (server) {
    const io = require("socket.io")(server);

    io.on('connection', function (socket) {
        console.log('New user connected', socket.id);
        socket.on('inInitialPage', function (nick) { // escuta do usuario
            console.log('New user inInitialPage', nick);
            users.push(nick);
            socket.nick = nick;
            idsnicks[nick] = socket.id;
            io.emit('userlist', users); // emite para quem estiver escutando "userlist"
        })

        socket.on('disconnect', function () {
            console.log('New user disconnected', socket.id)
            users.splice(users.indexOf(socket.nick), 1);
            delete idsnicks[socket.nick];
            io.emit('discon', { usr: socket.nick, list: users });
        });
    });
}
