const express = require("express");
const fs = require("fs").promises;
const moment = require("moment");
const app = express(); // app - наш сервер

app.use(async (req, res, next)=>{
    const date = moment().format("DD-MM-YYYY_hh:mm:ss");
    const {method, url} = req;
    await fs.appendFile("server.log", `\n${date} ${method} ${url}`);
    next();
});

// app.use((req, res, next)=>{
//     console.log("Second middleware");
//     next();
// });

app.get("/", (req, res)=>{
    res.send("<h2>Главная страница</h2>");
});

app.get("/contacts", (req, res)=> {
    res.send("<h2>Страница контактов</h2>");
});

app.get("/products", express.json(), (req, res)=> {
    const {brand} = req.query;
    console.log(req.body);
    // console.log(brand);
    res.send("<h2>Страница товаров</h2>");
});

app.get("/products/:id", (req, res)=>{
    res.send("Информация об отдельном товаре")
});

app.post("/products", express.json(), (req, res)=> {
    console.log(req.body);
});

app.use((_, res)=> {
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found"
    })
});

app.listen(3000);