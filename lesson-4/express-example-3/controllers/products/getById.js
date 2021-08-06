const products = require("../../data/products");

const getById = (req, res) => {
    /*
    req.params = {
        id: "tgddsdfh"
    }
    */
    const {id} = req.params;
    const result = products.find(item => item._id === id);
    if(!result) {
        return res.status(404).json({
            status: "error",
            code: 404,
            message: "Not found"
        });
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    });
};

module.exports = getById;