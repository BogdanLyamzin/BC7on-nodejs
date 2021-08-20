const bcrypt = require("bcryptjs");
const {Schema} = require("mongoose");
const Joi = require("joi");

// const passport = "ЕН234565";
// /^[А-Я]{2}[0-9]{6}$/

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

const userSchema = Schema({
    email: {
        type: String,
        required: [true, "Email must be exist"],
        match: emailRegex,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password must be exist"],
        minlength: 6
    },
    token: {
        type: String,
        default: null
    }
});

userSchema.methods.setPassword = function(password) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

const joiSchema = Joi.object({
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(6).required(),
    token: Joi.string()
});

module.exports = {
    userSchema,
    joiSchema
}