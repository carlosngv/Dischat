const moment = require('moment');


const formatMessage = (user, message) => {
    return {
        user: user,
        message,
        createdAt: moment().format('h:mm a'),
    }
}

module.exports = {
    formatMessage
}
