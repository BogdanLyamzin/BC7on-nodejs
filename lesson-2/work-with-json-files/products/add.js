const fs = require("fs").promises;
const {v4} = require("uuid");

const updateProducts = require("./updateProducts");
const getAll = require("./getAll");

const add = async(data) => {
    const newProduct = {...data, id: v4()};
    try {
        const products = await getAll();
        const newProducts = [...products, newProduct];
        await updateProducts(newProducts);
        return newProducts;
    }
    catch(error){
        throw error;
    }
};

module.exports = add;