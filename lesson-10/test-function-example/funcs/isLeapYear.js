const isLeapYear = (year)=> {
    if(year === undefined) {
        throw new Error("Отсутствует аргумент функции");
    }
    if(typeof year !== "number") {
        throw new Error("Год должен быть числом");
    }
    if(!Number.isInteger(year)){
        throw new Error("Год должен быть целым числом");
    }
    if(year < 42) {
        throw new Error("Год не дольше быть меньше 42");
    }
    const date = new Date(year, 2, 0);
    const days = date.getDate();
    return (days === 29);
}

module.exports = isLeapYear;