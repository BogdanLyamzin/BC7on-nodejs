/*
 1. Получается год в виде целого числа.
 2. Возвращает true если год высокосный, и false - если не высокосный.
 3. Если передали неподходящие данные, то возвращает ошибку (Error) с нужным текстом.

 2008 - true
 2000 - true
 1900 - false
 2003 - false

 41 - ошибка с текстом "Год не дольше быть меньше 42"
 2008.4 - ошибка с текстом "Год должен быть целым числом"
 () - ошибка с текстом "Отсутствует аргумент функции"
 "2008" - ошибка с текстом "Год должен быть числом"
 null - ошибка с текстом "Год должен быть числом"
 true - ошибка с текстом "Год должен быть числом"
 false - ошибка с текстом "Год должен быть числом"
 () => {} - ошибка с текстом "Год должен быть числом"
 {} - ошибка с текстом "Год должен быть числом"
 [] - ошибка с текстом "Год должен быть числом"
 */

const isLeapYear = require("./isLeapYear");

 describe("Test isLeapYear function", ()=>{
    test("2008 - leap year", ()=>{
        expect(isLeapYear(2008)).toBe(true);
        /*
        const result = isLeapYear(2008);
        if(result !== true){
            console.log(`Test failed. Expect true, receive ${result}`);
        }
        */
    });

    test("2000 - leap year", ()=>{
        expect(isLeapYear(2000)).toBe(true);
    });

    test("2003 - not leap year", ()=>{
        expect(isLeapYear(2003)).toBe(false);
    });

    test("1900 - not leap year", ()=>{
        expect(isLeapYear(1900)).toBe(false);
    });

    test("41 - error 'Год не дольше быть меньше 42'", ()=>{
        expect(()=>isLeapYear(41)).toThrow("Год не дольше быть меньше 42");
    });

    test("2008.4 - error 'Год должен быть целым числом'", ()=>{
        expect(()=>isLeapYear(2008.4)).toThrow("Год должен быть целым числом");
    });

    test("() - error 'Отсутствует аргумент функции'", ()=>{
        expect(()=>isLeapYear()).toThrow("Отсутствует аргумент функции");
    });

    test("'2008' - error 'Год должен быть числом'", ()=>{
        expect(()=>isLeapYear('2008')).toThrow("Год должен быть числом");
    });

    test("null - error 'Год должен быть числом'", ()=>{
        expect(()=>isLeapYear(null)).toThrow("Год должен быть числом");
    });

    test("()=>{} - error 'Год должен быть числом'", ()=>{
        expect(()=>isLeapYear(()=>{})).toThrow("Год должен быть числом");
    });

    test("{} - error 'Год должен быть числом'", ()=>{
        expect(()=>isLeapYear({})).toThrow("Год должен быть числом");
    });

    test("[] - error 'Год должен быть числом'", ()=>{
        expect(()=>isLeapYear([])).toThrow("Год должен быть числом");
    });
 });
