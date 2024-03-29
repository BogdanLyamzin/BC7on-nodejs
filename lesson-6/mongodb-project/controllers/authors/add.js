const {authors: service} = require("../../services");

const add = async(req, res, next) =>{
    try {
        const result = await service.add(req.body);
        res.status(201).json({
            status: "suceess",
            code: 201,
            data: {
                result
            }
        })
    } 
    catch (error) {
        next(error);
    }
};

module.exports = add;