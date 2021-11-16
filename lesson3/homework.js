//--створити масив з:
//   - з 5 числових значень
//    - з 5 стрічкових значень
//    - з 5 значень стрічкового, числового та булевого типу
//    - та вивести його в консоль

//let array1=[123,0,-45,999,23];
//let array2=['asdf','45',' ', 'hello','world'];
//let array3=['bye',' ','123','qwerty','okten',123,5,0,-999,7,false,5>=6,true,5=='5',0==='0'];
//console.log(array1);
//console.log(array2);
//console.log(array3);


//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

//let arr=[];
//for (let i = 0; i < 5; i++) {
//     arr[i]= Math.round(Math.random()*100);
//    console.log(arr[i])
//}
////console.log(arr) -як варіант виведення усіх елементів в рядок

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

//for (let i = 1; i <= 10; i++) {
//    document.write(`<div>Блок</div>`);
//}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

//for (let i = 1; i <= 10; i++) {
//    document.write(`<div>Блок номер ${i}</div>`);
//}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

//let i = 1;
//while (i <= 20) {
//    document.write(`<h1>h1</h1>`);
//    i++;
//}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині

//let i = 1;
//while (i <= 20) {
//    document.write(`<h1>Елемент номер ${i}</h1>`);
//    i++;
//}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

//let array=[1,7645,-4,0,67,-3456,0,23,6,-8];
//for (let i = 0; i < array.length; i++) {
//    console.log(array[i])
//}

//- Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

//let array=['hello','asd','123',' ','bye', 'some text','7', 'sjkhagdf', 'false', '56>=11' ];
//for (let i = 0; i < array.length; i++) {
//    console.log(array[i])
//}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

//let array = ['hello', 876, '123', ' ', 123, 'some text', false, 'sjkhagdf', null, 56 >= 11];
//for (let i = 0; i < array.length; i++) {
//    console.log(array[i])
//}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

//let array = ['hello', 876, '123', ' ', 123, 'some text', false, 'sjkhagdf', null, 56 >= 11];
//for (let i = 0; i < array.length; i++) {
//    if (typeof array[i]==="boolean"){
//        console.log(array[i]);
//    }
//}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

//let array = ['hello', 876, '123', ' ', 123, 'some text', false, 'sjkhagdf', NaN, 56 >= 11];
//for (let i = 0; i < array.length; i++) {
//    if (typeof array[i]==="number"){
//        console.log(array[i]);
//    }
//}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

//let array = ['hello', 876, '123', ' ', 123, 'some text', false, 'sjkhagdf', NaN, 56 >= 11];
//for (let i = 0; i < array.length; i++) {
//    if (typeof array[i]==="string"){
//        console.log(array[i]);
//    }
//}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

//let arr = [];
//arr[1] = 1;
//arr[2] = ' ';
//arr[3] = 5 < 6;
//arr[4] = false;
//arr[5] = 'safdg';
//arr[6] = '435';
//arr[7] = -113;
//arr[8] = NaN;
//arr[9] = 807;
//arr[10] = 'hello';
//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}


//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

//for (let i = 1; i <= 10; i++) {
//    console.log(`Номер кроку - ${i}`);
//    document.write(`<div>Номер кроку - ${i}</div> `);
//}

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

//for (let i = 1; i <= 100; i++) {
//    console.log(`Номер кроку ${i}`);
//    document.write(`<div>Номер кроку - ${i}</div> `);
//}

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

//for (let i = 0; i <=100 ; i+=2) {
//    console.log(`Номер кроку - ${i}`);
//    document.write(`<div>Номер кроку - ${i}</div>`);
//}

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

//for (let i = 0; i <= 100; i++) {
//    if (i % 2 === 0) {
//        console.log(`Номер кроку - ${i}`);
//        document.write(`<div>Номер кроку - ${i}</div>`);
//    }
//}

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

//for (let i = 0; i <= 100; i++) {
//    if (i % 2 !== 0) {
//        console.log(`Номер кроку - ${i}`);
//        document.write(`<div>Номер кроку - ${i}</div>`);
//    }
//}