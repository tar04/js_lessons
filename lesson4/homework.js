//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/*function sq(a,b) {
    return a*b;
}
let x=sq(5,10);
console.log(x);*/

//- створити функцію яка обчислює та повертає площу кола з радіусом r
/*const pi=3.14;
function sq(r) {
    let s=pi*(r**2);
    return s;
}
console.log(sq(3));*/

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*const pi=3.14;
function sq(h,r) {
    let s=2*pi*h*r;
    return s;
}
console.log(sq(5,3));*/

//- створити функцію яка приймає масив та виводить кожен його елемент
/*function mass(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
mass([1,2,3,4]);*/

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*function paragraph(p) {
    document.write(`<p>${p}</p>`);
}
paragraph('hello');
paragraph('okten');*/

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/*function listCreator(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
listCreator('item');*/

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*function listCreator(text, i) {
    document.write(`<ul>`);
    for (let j = 0; j < i; j++) {
        document.write(`<li>${text} ${j + 1}</li>`);
    }
    document.write(`</ul>`);
}

listCreator('item', 3);*/

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*function mass(array) {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

mass([1, '2', 5 > 7, 'hello', true]);*/

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
/*function mass(array) {
    for (const item of array) {
        document.write(`<div>`)
        for (const itemKey in item) {
            document.write(`${itemKey} - ${item[itemKey]}, `);
        }
        document.write(`</div>`);
    }
}

mass([{id: 1, name: 'Max', age: 21},
    {id: 2, name: 'Taras', age: 20},
    {id: 3, name: 'Ihor', age: 20},
    {id: 4, name: 'Matthew', age: 20}]);*/
