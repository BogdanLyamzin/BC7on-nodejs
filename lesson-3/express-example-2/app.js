const express = require("express");
const cors = require("cors");
const products = require("./products");

const app = express();

app.use(cors());

// app.set("json spaces", 2);

app.get("/products", (req, res)=>{
    // res.send(null);
    // res.json(null);
    // res.send(products);
    res.json(products);
});

app.listen(3000);