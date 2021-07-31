const {program} = require("commander");

program
    .option("-d, --getDate <type>", "get date info")
    .option("-f, --format", "get date formated");

program.parse(process.argv);

const options = program.opts();

// console.log(options)

const actionType = options.getDate;

let  result = null;

if(options.getDate){
    const now = new Date();
    switch(process.argv[3]){
        case "year":
            result = now.getUTCFullYear();
            break;
        case "month":
            result = now.getMonth() + 1;
            break;
    }
}

if(options.format) {
    console.log(`${actionType} = ${result}`)
}
else {
    console.log(result);
}
