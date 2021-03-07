var users = [];
var idsnicks = {};


module.exports.listen = function (server) {
    const io = require("socket.io")(server);

    io.on('connection', function (socket) {
        console.log('New user connected', socket.id);
        socket.on('inInitialPage', function (nick) { // escuta do usuario
            users.push(nick.user);
            console.log('New user inInitialPage', nick.user, users);
            socket.nick = nick.user.id;
            idsnicks[nick.user.id] = socket.id;
            socket.emit('logedUserList', users);
            //io.sockets.emit('logedUserList', users);//emite para quem estiver escutando "userlist"
        })

        socket.on('disconnect', function () {
            console.log('New user disconnected', socket.id)
            console.log('List User before disconnect', users);
            users.splice(users.indexOf(socket.nick), 1);
            delete idsnicks[socket.nick];
            console.log('List User after disconnect', users);
            io.emit('discon', { usr: socket.nick, list: users });
        });
    });
}
