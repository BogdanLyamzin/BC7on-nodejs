const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const update = require("./update");
const del = require("./del");

const productsApp = {
    getAll,
    getById,
    add,
    update,
    del
};

module.exports = productsApp;