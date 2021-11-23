//Всі функції повинні бути описані стрілочним типом!!!!

//- створити функцію яка обчислює та повертає площу прямокутника висотою
//let sq= (a,b)=>a*b;
//console.log(sq(5, 6));

//- створити функцію яка обчислює та повертає площу кола
//let sq= (r)=>3.14*(r**2);
//console.log(sq(5));

//- створити функцію яка обчислює та повертає площу циліндру
//let sq= (h,r)=>2*3.14*h*r;
//console.log(sq(5,6));

//- створити функцію яка приймає масив та виводить кожен його елемент
//let mass = (arr) => {
//    for (const item of arr) {
//        console.log(item);
//    }
//}
//mass([1, 2, 3, 4, 5]);

//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
//let p=(text)=>{
//    document.write(`${text}`)
//}
//p(prompt('Введіть текст'));

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//let ul=(text)=>{
//    document.write(`<ul>`);
//    document.write(`<li>${text}</li>`);
//    document.write(`<li>${text}</li>`);
//    document.write(`<li>${text}</li>`);
//    document.write(`</ul>`);
//}
//ul('li');

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//let ul = (text, count) => {
//    document.write(`<ul>`);
//    for (let i = 0; i < count; i++) {
//        document.write(`<li>${text}</li>`);
//    }
//    document.write(`</ul>`);
//}
//
//ul('item', 7);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//let list = (arr) => {
//    document.write(`<ul>`);
//    for (const item of arr) {
//        document.write(`<li>${item}</li>`);
//    }
//    document.write(`</ul>`);
//}
//list([1, 'string', 5 > 6, -6]);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//let mass=(arr)=>{
//    for (const item of arr) {
//        document.write(`<div>`);
//        for (const itemKey in item) {
//            document.write(`${itemKey} - ${item[itemKey]}, `);
//        }
//        document.write(`</div>`);
//    }
//}
//
//mass([{id: 1, name: 'Max', age: 21},
//    {id: 2, name: 'Taras', age: 20},
//    {id: 3, name: 'Ihor', age: 20},
//    {id: 4, name: 'Matthew', age: 20}]);