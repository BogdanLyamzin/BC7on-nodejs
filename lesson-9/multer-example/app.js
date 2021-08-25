const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");

const app = express();

app.use(express.json());
app.use(cors());

const userSchema = mongoose.Schema({
    name: String,
    avatar: String
});

const User = mongoose.model("user", userSchema);

const tempDir = path.join(process.cwd(), "temp");
const usersDir = path.join(process.cwd(), "upload/users");

const storageSettings = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, tempDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 10000
    }
});

const uploadMiddleware = multer({
    storage: storageSettings
});

app.post("/profile", uploadMiddleware.single("avatar"), async (req, res, next)=> {
    try{
        const result = await User.create(req.body);
        const newUserDir = path.join(usersDir, result._id);
        await fs.mkdir(newUserDir);
        const {path: tempName, originalname} = req.file;
        // Shiera.SeaStar.jpg
        // ["jpg", "Shiera", "SeaStar"]
        const [extension] = originalname.split(".").reverse();
        const fileName = path.join(newUserDir, `avatar.${extension}`);
        await fs.rename(tempName, fileName);
        await User.findByIdAndUpdate(result._id, {avatar: fileName});
    }
    catch(error){
        await fs.unlink(tempName);
        next(error);
    }
});

const productImages = [
    {
        name: "main-image",
        maxCount: 1
    },
    {
        name: "other-images",
        maxCount: 10
    }
]

app.post("/products", uploadMiddleware.fields(productImages), async (req, res, next)=> {
    try{
        const {path: tempName, originalname} = req.file;
        const fileName = path.join(usersDir, originalname);
        await fs.rename(tempName, fileName);
    }
    catch(error){
        await fs.unlink(tempName);
        next(error);
    }
});

app.listen(3000);