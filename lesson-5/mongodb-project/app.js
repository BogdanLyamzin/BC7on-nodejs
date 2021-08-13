const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const {Schema, model} = mongoose;

const authorSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            return value >= 0;
        }
    }
});

const Author = model("author", authorSchema);

const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(async()=> {
    app.listen(PORT);
    const newAuthor = {
        name: "Скотт",
        lastName: "Беккер",
        email: "bekker@gmail.com",
        age: "123"
    }
    try {
        const result = await Author.create(newAuthor);
        // const data = await Author.find({});
        // console.log(data);
    }
    catch(error){
        console.log(error);
    }
    // Author.find({}, (error, data)=> {
    //     console.log(data);
    // })

    // Author.create(newAuthor, (error, data)=> {
    //     console.log(error);
    //     console.log(data);
    // });
    
})
.catch(error => console.log(error));