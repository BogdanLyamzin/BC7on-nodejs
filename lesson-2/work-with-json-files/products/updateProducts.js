const fs = require("fs").promises;

const productsPath = require("./productsPath");

const updateProducts = async (data) => {
    try {
        const products = JSON.stringify(data);
        await fs.writeFile(productsPath, products);
    }
    catch(error){
        throw error;
    }
}

module.exports = updateProducts;