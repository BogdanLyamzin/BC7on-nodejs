const fs = require("fs").promises;

const productsPath = require("./productsPath");

const getAll = async()=>{
    try {
        const data = await fs.readFile(productsPath);
        const products = JSON.parse(data);
        return products;

    }
    catch(error){
        throw error;
    }
};

module.exports = getAll;