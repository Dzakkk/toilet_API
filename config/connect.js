const mongoose = require('mongoose')

const connect = async () => {
    try {
        const connected = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('connected to mongo',
            connected.connection.host,
            connected.connection.name
        )
    } catch (error) {
        console.log('error', error)
        process.exit(1)
    }
}

module.exports = connect;