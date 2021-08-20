const jwt = require("jsonwebtoken");

const payload = {
    id: "611fdc65388abb36789da423"
};

const SECRET_KEY = "ghgsdfsdfhdhdfg";

const token = jwt.sign(payload, SECRET_KEY);
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const verifyToken = jwt.verify(token, SECRET_KEY);
    console.log(verifyToken);
}
catch(error){
    console.log(error.message);
}

