const {NotFound} = require("http-errors");

const {authors: service} = require("../../services");

const update = async(req, res, next) => {
    const {id} = req.params;
    const result = await service.updateById(id, req.body);
    if(!result){
        throw new NotFound(`Author with id=${id} not found`);
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
};

module.exports = update;