const {Schema} = require("mongoose");
const Joi = require("joi");

const emailSchema = require("./email");

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const authorSchema = Schema({
    name: {
        type: String,
        required: [true, "Name must be exist!"],
        // minlength: 2
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: emailRegexp
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        // validate: {
        //     validator(value) {
        //       return /\d{3}-\d{3}-\d{4}/.test(value);
        //     },
        //     message: props => `${props.value} is not a valid phone number!`
        //   },
    },
    status: {
        type: String,
        enum: ["freelance", "own"],
        default: "freelance"
    }
}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().pattern(new RegExp(emailRegexp)),
    phone: Joi.string().required(),
    status: Joi.string()
});

module.exports = {authorSchema, joiSchema};