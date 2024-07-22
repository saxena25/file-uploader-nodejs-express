const multer = require("multer");
const express = require("express");
const PORT = 8080;
const server = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage })

server.post('/upload', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.status(200).json({message: "file uploaded successfully"})
  })

server.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
})