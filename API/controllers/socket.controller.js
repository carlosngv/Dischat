const { joinUser, getCurrentUser, getRoomUsers, userLeavesChat, users } = require("../helpers/users.helper");
const { formatMessage } = require("../models/message.model");



const socketController = socket => {

    // Notifies all users that the current connected

    // Join chat
        let userAux = '';
        socket.on('join-chat', ({user}) => {
            console.log(user);
            userAux = user;
            joinUser(socket.id, user);
            users.push(userAux)
            socket.broadcast.emit('welcome-message', formatMessage('CHATBOT', `${userAux} has joined the chat! `));
            console.log('users', users);
            socket.emit('users-list', users);
        })


        socket.emit('message', formatMessage('CHATBOT', 'Welcome to Dischat!'));


        socket.on('new-message', (msg) => {

            let { user, message} = msg;
            console.log(msg);
            message = formatMessage(user, message);
            console.log('MSG', message);
            socket.broadcast.emit('message', message);

        });

        socket.on('disconnect', () => {
            let user = userLeavesChat(socket.id);
            if(user) {
                socket.broadcast.emit('message', formatMessage('CHATBOT',`${user.username} has left the chat.`));
            }
        });



}

module.exports = {
    socketController,
}
