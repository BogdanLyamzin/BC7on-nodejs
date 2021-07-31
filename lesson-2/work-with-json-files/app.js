const productsApp = require("./products");

// const products = productsApp.getAll();
// products.then(data => console.log(data))
//     .catch(error => console.log(error));

const id = "48bd1cd8-72ca-42cc-8457-156bb8c30873";

// const product = productsApp.getById(id);
// product.then(data => console.log(data))
//     .catch(error => console.log(error));

// const newProduct = {
//     name: "iPhone X",
//     price: 5,
//     location: "Apple"
// };

// const product = productsApp.add(newProduct);
// product.then(data => console.log(data))
//     .catch(error => console.log(error));

// const product = productsApp.update(id, {price: 6});
// product.then(data => console.log(data))
//     .catch(error => console.log(error));

const delId = "7813c0cd-6651-48e8-9fc0-8702c4e9d033";

const product = productsApp.del(delId);
product.then(data => console.log(data))
    .catch(error => console.log(error));

// const productOperations = async(action) => {
//     try {
//         switch(action) {
//             case "getAll":
//                 const products = await productsApp.getAll();
//                 console.log(products);
//                 break;
//         }
//     }
//     catch(error){
//         console.log(error);
//     }
// };
// productOperations("getAll");

