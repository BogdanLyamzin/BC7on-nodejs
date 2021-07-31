const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");
// console.log(process.argv);
const arr = hideBin(process.argv);
// console.log(arr);

const {argv} = yargs(arr);
console.log(argv);

const action = argv.getDate;

if(action){
    const now = new Date();
    switch(process.argv[3]){
        case "year":
            console.log(now.getUTCFullYear());
            break;
        case "month":
            console.log(now.getMonth() + 1);
            break;
    }
}