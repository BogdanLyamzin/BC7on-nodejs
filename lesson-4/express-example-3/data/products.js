const {v4} = require("uuid");

const products = [
    {
        _id: v4(),
        name: "iPhone X",
        price: 34000
    },
    {
        _id: v4(),
        name: "GeForce RTX 3900",
        price: 90000
    }
];

module.exports = products;