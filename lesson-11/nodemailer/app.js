const nodemailer = require("nodemailer");
require("dotenv").config();

const {EMAIL_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, //25, 465, 2255
    secure: true,
    auth: {
        user: "bogdan.lyamzin.d@meta.ua",
        pass: EMAIL_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const email = {
    from: "bogdan.lyamzin.d@gmail.com",
    to: "moson93264@mtlcz.com", 
    subject: "Тестовое письмо", 
    html: "Тестовое письмо"
};

transporter.sendMail(email)
    .then(()=> console.log("Email send"))
    .catch(error => console.log(error))

