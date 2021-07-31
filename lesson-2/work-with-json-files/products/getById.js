const fs = require("fs").promises;
const getAll = require("./getAll");

const getById = async(id) => {
    try {
        const products = await getAll();
        const product = products.find(item => item.id === id);
        if(!product) {
            throw new Error(`Товар с id=${id} не найден`);
        }
        return product;
    }
    catch(error){
        throw error;
    }
};

module.exports = getById;