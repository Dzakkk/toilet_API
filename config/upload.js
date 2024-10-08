const multer = require('multer');
const fs = require('fs');
const path = require('path');

const uploadDir = '/tmp/uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '_' + Date.now()) + path.extname(file.originalname);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
