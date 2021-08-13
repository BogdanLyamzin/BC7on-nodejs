const {Author} = require("../models");

const getAll = () => {
    return Author.find({}, "_id name lastName email phone");
}

const getById = (id) => {
    // return Author.findOne({_id: id})
    return Author.findById(id, "_id name lastName email phone");
}

const add = (newAuthor) => {
    return Author.create(newAuthor);
};

const updateById = (id, data) => {
    return Author.findByIdAndUpdate(id, data, {new: true});
};

const deleteById = (id) => {
    return Author.findByIdAndDelete(id);
};

module.exports = {
    getAll,
    add,
    getById,
    updateById,
    deleteById
}