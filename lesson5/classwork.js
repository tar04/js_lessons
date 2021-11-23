//Всі функції повинні бути описані стрілочним типом!!!!
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//let min = (a, b, c) => {
//    if ((a < b) && (a < c)) {
//        return a;
//    } else if ((b < a) && (b < c)) {
//        return b
//    }
//    if ((c < b) && (a > c)) {
//        return c;
//    } else {
//        return 0
//    }
//}
//console.log(min(-90, 0, 0));

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//let max = (a, b, c) => {
//    if ((a > b) && (a > c)) {
//        return a;
//    } else if ((b > a) && (b > c)) {
//        return b
//    }
//    if ((c > b) && (a < c)) {
//        return c;
//    } else {
//        return 0
//    }
//}
//console.log(max(-90, -100, -68));

//- створити функцію яка повертає найбільше число з масиву
//let mmax = (arr) => {
//    let max = arr[0];
//    for (const item of arr) {
//        if (item > max) {
//            max = item;
//        }
//    }
//    return max;
//}
//
//console.log(mmax([-5, 0, 23, 1, 5]))

//- створити функцію яка повертає найменьше число з масиву
//let mmin = (arr) => {
//    let min = arr[0];
//    for (const item of arr) {
//        if (item < min) {
//            min = item;
//        }
//    }
//    return min;
//}
//console.log(mmin([-5, 0, 23, 1, 5]))

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//let sum = (arr) => {
//    let s = 0;
//    for (const item of arr) {
//        s += item;
//    }
//    return s;
//}
//console.log(sum([1, 2, 3, 4]));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//let sum = (arr) => {
//    let s = 0;
//    for (const item of arr) {
//        s += item;
//    }
//    return s/arr.length;
//}
//console.log(sum([1, 2, 3, 4]));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//let minmax = (arr) => {
//    let max = arr[0];
//    let min = arr[0];
//    for (const item of arr) {
//        if (item > max) {
//            max = item;
//        }
//        if (item < min) {
//            min = item;
//        }
//    }
//    console.log(max);
//    return min;
//}
//minmax([-6, 500, 0, 800, 2])

//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//let random=(arr)=>{
//    for (let i = 0; i < 6; i++) {
//        arr[i]=Math.round(Math.random()*100);
//    }
//    return arr;
//}
//console.log(random([]));

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//let random = (arr, limit) => {
//    for (let i = 0; i < 10; i++) {
//        arr[i] = Math.round(Math.random() * limit);
//    }
//    return arr;
//}
//console.log(random([],74));

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//let rev = (arr) => {
//    let arr_reverse = [];
//    for (let i = 0, j = arr.length - 1; i < arr.length; i++,j--) {
//        arr_reverse[j] = arr[i];
//    }
//    return arr_reverse;
//}
//
//console.log(rev([1, 2, 3]));