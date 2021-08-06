const products = require("../../data/products");
// /api/v1/products?brand=Apple&&priceFrom=15000&priceTo=30000
const getAll = (req, res) => {
    // console.log(req.query);
    // const filteredProducts = products.filter(({brand}) => brand === req.query.brand);
    if(!products) {
        return res.status(500).json({
            status: "fail",
            code: 500,
            message: "Server error"
        });
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products
        }
    });
};

module.exports = getAll;