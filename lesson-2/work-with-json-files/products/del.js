const fs = require("fs").promises;

const updateProducts = require("./updateProducts");
const getAll = require("./getAll");

const del = async(id) => {
    try {
        const products = await getAll();
        const idx = products.findIndex(item => item.id === id);
        if(idx === -1){
            throw new Error(`Товар с id=${id} не найден`);
        }
        const newProducts = products.filter(item => item.id !== id);
        await updateProducts(newProducts);
        return products[idx];
    }
    catch(error){
        throw error;
    }
}

module.exports = del;