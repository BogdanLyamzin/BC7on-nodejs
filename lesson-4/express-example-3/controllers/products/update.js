const products = require("../../data/products");

const update = (req, res) => {
    const {id} =req.params;

    const idx = products.findIndex(({_id})=> _id === id);
    if(idx === -1){
        return res.status(404).json({
            status: "error",
            code: 404,
            message: "Not found"
        });
    }
    const updateProduct = {...req.body, _id: id}
    products[idx] = updateProduct;
    res.json({
        status: "success",
        code: 200,
        data: {
            result: updateProduct
        }
    })

};

module.exports = update;