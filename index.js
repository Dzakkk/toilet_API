const express = require('express')
const connect = require('config/connect')

connect();


const app = express()

app.use(express.json())

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`running in ${port}`)
})