const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const api = require("./api");

const app = express();

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

app.use("/api/v1/products", api.products);
// app.use("/api/v1/carts", api.carts);

app.listen(3000);