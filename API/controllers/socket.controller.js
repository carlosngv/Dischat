const { formatMessage } = require("../models/message.model");



const socketController = socket => {

    // Notifies all users that the current connected
    socket.broadcast.emit('welcome-message', 'User has joined the chat');

    socket.on('new-message', (msg) => {
        let { user, message} = msg;
        console.log(msg);
        message = formatMessage(user, message);
        console.log('MSG', message);
        socket.broadcast.emit('message', message);

});

    socket.on('disconnect', () => {
        socket.broadcast.emit('message', 'The user has left the chat')
    });


}

module.exports = {
    socketController,
}
