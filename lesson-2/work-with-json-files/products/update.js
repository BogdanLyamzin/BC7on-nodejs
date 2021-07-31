const fs = require("fs").promises;

const updateProducts = require("./updateProducts");
const getAll = require("./getAll");

const update = async(id, newProps) => {
    try {
        const products = await getAll();
        const idx = products.findIndex(item => item.id === id);
        if(idx === -1){
            throw new Error(`Товар с id=${id} не найден`);
        }
        products[idx] = {...products[idx], ...newProps}; // {name, price, location, price: 6}
        await updateProducts(products);
        return products[idx];
    }
    catch(error){
        throw error;
    }
}

module.exports = update;