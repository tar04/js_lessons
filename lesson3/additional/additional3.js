/*1. Створити пустий масив та :*/
let array = [];
//a. заповнити його 50 парними числами за допомоги циклу.
//for (let i = 0; i < 50; i++) {
//    array[i]=i*2;
//    console.log(array[i*2]);
//}

//b. заповнити його 50 непарними числами за допомоги циклу.
//for (let i = 0, x = 0; array.length < 50; i++) {
//    if (i % 2) {
//        array[x] = i;
//        x++;
//    }
//}
//console.log(array)

//c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//for (let i = 0; i < 20; i++) {
//    array[i]=Math.round(Math.random()*100);
//    console.log(array[i]);
//}

//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//for (let i = 0; i < 20; i++) {
//    array[i] = Math.round((Math.random() * 724) + 8);
//    console.log(array[i]);
//}

//2. Вивести за допомогою console.log кожен третій елемент
let arr = [456, -3, 18, 15, 87, 6, 65, 3, 2, 10, 112, 800, 131, 15, 41];
//for (let i = 0; i < arr.length; i += 3) {
//    console.log(arr[i]);
//}

//3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
//for (let i = 0; i < arr.length; i += 3) {
//    if (arr[i] % 3 === 0) {
//        console.log(arr[i])
//    }
//}

//4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
//let arr1=[];
//for (let i = 0,j=0; i < arr.length; i += 3) {
//    if (arr[i] % 3 === 0) {
//        console.log(arr[i]);
//        arr1[j]=arr[i];
//        j++;
//    }
//}

//5. Вивести кожен елемент масиву, сусід справа якого є парним
//EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//let arr2 = [1, 4, 6, 5, 7, 9, 56, 8, 67];
//for (let i = 0; i < arr2.length; i++) {
//    if (arr2[i+1]%2===0){
//        console.log(arr2[i]);
//    }
//}

//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//let arr3 = [100, 250, 50, 168, 120, 345, 188];
//let x = 0;
//for (let i = 0; i < arr3.length; i++) {
//    x += arr3[i]
//}
//console.log(`В середньому у чеку фігуруватиме сума ${Math.round(x / arr.length)}`)

//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//let arr4=[];
//let arr5=[];
//for (let i = 0; i < 5; i++) {
//    arr4[i]=Math.round(Math.random()*100);
//    arr5[i]=arr4[i]*5;
//}
//console.log(arr4);
//console.log(arr5);

//8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//let arr6 = ['asd', 456, -14, 5 >= 6,'16', NaN, 'hello'];
//let arr7=[];
//for (let i = 0, j=0; i < arr6.length; i++) {
//    if (typeof(arr6[i])==="number"){
//        arr7[j]=arr6[i];
//        j++;
//    }
//}
//console.log(arr7);

/*- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:*/
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
/*З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив
Example:
    let usersWithCities = [
            {
                id: 1, // <===
                name: 'vasya',
                age: 31,
                status: false,
                address: {
                    user_id: 1, // <===
                    country: 'Ukraine',
                    city: 'Ternopil'
                }
            },
            // TO BE CONTINUED .....
        ]*/

let usersWithCities = usersWithId;
for (const user of usersWithCities) {
    for (const cities of citiesWithId) {
        if (cities.user_id === user.id) {
            user.address = cities;
        }
    }
}
console.log(usersWithCities)

//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//let numbers = [-2, 2, 801, 4, 5500, 0, 7, 8, 83, 11];
//for (const number of numbers ) {
//    if (number%2===0 && number!==0){
//        console.log(number);
//    }
//}

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//let numbers = [-2, 2, 801, 4, 5500, 0, 7, 8, 83, 11];
//let numbers2=[];
//let i=0;
//do{
//    numbers2[i]=numbers[i];
//    i++;
//} while (i<numbers.length);
//console.log(numbers2)

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//let str = ['a', 'b', 'c'];
//let word=''
//for (let i = 0; i < str.length; i++) {
//    word+=str[i];
//}
//console.log(word);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//let str = ['a', 'b', 'c'];
//let word=''
//let i=0;
//while(i<str.length){
//    word+=str[i];
//    i++
//}
//console.log(word);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//let str = ['a', 'b', 'c'];
//let word=''
//for (const string of str) {
//word+=string;
//}
//console.log(word)