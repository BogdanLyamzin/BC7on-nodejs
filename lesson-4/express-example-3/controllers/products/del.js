const products = require("../../data/products");

const del = (req, res) => {
    const {id} =req.params;

    const idx = products.findIndex(({_id})=> _id === id);
    if(idx === -1){
        return res.status(404).json({
            status: "error",
            code: 404,
            message: "Not found"
        });
    };
    const deleteProduct = products[idx];
    products.splice(idx, 1);
    res.json({
        status: "success",
        code: 200,
        data: {
            result: deleteProduct
        }
    });
    // res.status(204).send()
};

module.exports = del;