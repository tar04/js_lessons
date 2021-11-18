//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*function min(a, b, c) {
    let min = '';
    if ((a < b) && (a < c)) {
        min = a;
    } else if ((b < a) && (b < c)) {
        min = b;
    } else if ((c < a) && (c < a)) {
        min = c;
    }
    console.log(min);
}

min(4, 0, 800);*/

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/*function max(a, b, c) {
    if ((a > b) && (a > c)) {
        max = a;
    } else if ((b > a) && (b > c)) {
        max = b;
    } else if ((c > a) && (c > a)) {
        max = c;
    }
    console.log(max);
}

max(-8, -5, -3);*/

//- створити функцію яка повертає найбільше число з масиву\
/*function mass_max(array) {
    return Math.max.apply(null, array);
}

console.log(mass_max([-5, -4, -15, -5]));*/

//- створити функцію яка повертає найменьше число з масиву
/*function mass_min(array) {
    return Math.min.apply(null, array);
}

console.log(mass_min([-5, -4, -15, -5]));*/

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*function mass(array) {
    let sum=0;
    for (const arrayElement of array) {
       sum+=arrayElement;
    }
    return sum;
}

console.log(mass([1, 2, 65, -5]));*/

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*function mass(array) {
    let sum=0;
    for (const arrayElement of array) {
        sum+=arrayElement;
    }
    return sum / array.length;
}

console.log(mass([1, 2, 65, -5]));*/

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minmax(a, b, c, d) {

}

let a = 5;
let b = -4;
let c = 18;
let d = 0;

//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
/*function random() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array[i] = Math.round(Math.random() * 100);
    }
    return array;
}
console.log(random());*/

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
/*function random(limit) {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array[i] = Math.round(Math.random() * limit + 1) - 1
    }
    return array;
}

console.log(random(7))*/

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
/*function reverse(array) {
    let array2 = []
    for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
        array2[j] = array[i];
    }
    return array2;
}

let arr = [1, 2, 3];
console.log(arr);
console.log(reverse(arr));*/

