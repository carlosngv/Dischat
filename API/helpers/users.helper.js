const users = []

// Join user to chat

const joinUser = (id, username) => {
    const user =  { id, username };

    return user;
}


const getCurrentUser = (id) => {
    return this.users.find(user => user.id === id);
}


const userLeavesChat = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getRoomUsers = () => {
    return users;
}

module.exports =  {
    getCurrentUser,
    joinUser,
    userLeavesChat,
    getRoomUsers,
    users
}
