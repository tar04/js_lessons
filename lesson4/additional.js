//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
/*function writeconcat() {
    let sum = arguments[0] + arguments[1]
    let write = arguments[0];
    write = arguments[1] === undefined ? write : sum;
    console.log(write);
}

writeconcat(-5);*/

//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//    EXAMPLE:
//    [1,2,3,4]
//    [2,3,4,5]
//        результат
//    [3,5,7,9]
/*function sum(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr3[i] = arr1[i] + arr2[i];
    }
    return arr3;
}

console.log(sum([1, 2, 3, 4], [2, 3, 4, 5]))*/

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
/*function massKey(array) {
    let array2 = [];
    for (const item of array) {
        for (const itemKey in item) {
            array2.push(itemKey);
        }
    }
    return array2;
}

let array = [{name: 'Dima', age: 13},
    {model: 'Camry'}];
console.log(massKey(array));*/

//    - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
/*
function massKey(array) {
    let array2 = [];
    for (const item of array) {
        for (const itemKey in item) {
            array2.push(item[itemKey]);
        }
    }
    return array2;
}

let array = [{name: 'Dima', age: 13},
    {model: 'Camry'}];
console.log(massKey(array));
*/
