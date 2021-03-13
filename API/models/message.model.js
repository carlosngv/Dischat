const moment = require('moment');


const formatMessage = (username, message) => {
    return {
        username,
        message,
        createdAt: moment().format('h:mm a'),
    }
}

module.exports = {
    formatMessage
}
