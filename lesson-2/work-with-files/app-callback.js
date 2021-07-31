// const fs = require("fs/promises");
const fs = require("fs").promises;

// const makFileOperation = async() => {
//     try {
//         const data = await fs.readFile("file.txt", "utf-8");
//         const result = await fs.appendFile("file.txt", "\nТак говорил Заратустра");
//         console.log(result);
//         // const newData = data.toUpperCase();
//         // await fs.writeFile("file.txt", newData);
//     }
//     catch(error){
//         console.log(error);
//     }
// };

// makFileOperation();

const createFile = async(fileName, fileContent) => {
    // await fs.writeFile(fileName, fileContent);
    try{
        await fs.appendFile(fileName, fileContent);
    }
    catch(error){
        console.log(error);
    }
};

createFile("./files/new-file.txt", "Кто бы говорил");

// (async() => {
//     console.log("Самовызывающаяся асинхронная функция");
// })();

// fs.readFile("file.txt", "utf-8")
//     .then(data => {
//         const newData = data.toLowerCase();
//         fs.writeFile("file.txt", newData);
//     })
//     .catch(error => console.log(error));