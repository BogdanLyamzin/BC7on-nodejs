const {Schema, model} = require("mongoose");

const messageSchema = Schema({
    text: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    addressType: {
        type: String,
        enum: ["admins", "managers", "customers"]
    }
}, {versionKey = false, timesstamp = true});

const Message = model("message", messageSchema);

Message.watch().
    on('change', data => {
        switch(data.addressType){
            case "admins":
                global.admins.forEach(admin => admin.send(data.text));
                break;
            case "managers":
                global.managers.forEach(manager => manager.send(data.text));
                break;
            case "customers":
                global.customers.forEach(customer => customer.send(data.text));
                break;
        }
    });