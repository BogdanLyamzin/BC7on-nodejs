// console.log(process.argv);

if(process.argv[2] === "--getDate"){
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