const users = require("./users");

// console.log(users);

const {admins} = require("./users");

// console.log(admins);

// console.log(now)

// const {getCurrentMonth} = require("./date");

// console.log(`Сейчас ${getCurrentMonth()} месяц`);

const currentMonth = require("./date/getCurrentMonth")();
// const car = new require("./Car");

console.log(`Сейчас ${currentMonth} месяц`);



