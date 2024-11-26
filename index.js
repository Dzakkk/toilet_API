const express = require('express')
const connect = require('./config/connect')
const fs = require('fs')
const multer = require('multer')
const dotenv = require('dotenv').config()
const upload = require('./config/upload');
const cors = require('cors');

connect();
// const uploadDir = '/tmp/uploads'
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true })
// }

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, uploadDir);
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname + '_' + Date.now())
//     }
// })

// const upload = multer({ storage: storage })

const app = express()
const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };
  
  app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));




const toiletRoutes = require('./routes/toiletRoutes');
app.use('/api/toilets', toiletRoutes);
app.use('/api/toilets/:id', toiletRoutes)


const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`running in ${port}`)
})