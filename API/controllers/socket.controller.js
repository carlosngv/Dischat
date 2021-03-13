const { formatMessage } = require("../models/message.model");



const socketController = socket => {

    // Notifies all users that the current connected
    socket.broadcast.emit('welcome-message', 'User has joined the chat');

    socket.on('new-message', msg => {
        message = formatMessage('USER', msg);
        socket.broadcast.emit('message', message);

});

    socket.on('disconnect', () => {
        socket.broadcast.emit('message', 'The user has left the chat')
    });


}

module.exports = {
    socketController,
}
