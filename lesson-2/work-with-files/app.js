const fs = require("fs");

fs.readFile("file.txt", "utf-8", (error, data)=>{
    if(error){
        console.log("Не удалось считать файл");
        return;
    }
    const newData = data.toUpperCase();
    fs.writeFile("file.txt", newData, (error, data)=>{
        console.log(error);
        console.log(data);
    });
    // console.log(data.toString()); // из utf-8 в нормальный текст
});

