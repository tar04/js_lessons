//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//    При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//    Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//=========resolve================
// document.onclick=function (e) {
//     console.log(e)
//     alert(`Назва тегу : ${e.target.localName}
//     Класи: ${e.target.classList[0] ? e.target.classList : 'Відсутні'}
//     Id:  ${e.target.id[0] ? e.target.id : 'Відсутні'}
//     Висота: ${e.target.clientHeight}
//     Ширина: ${e.target.clientWidth}`)
// }

//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//================resolve=============
// let images = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg', './images/5.jpg'];
// let i = 0;
//
// const imgEl = document.createElement('img');
// imgEl.src = images[i];
//
// imgEl.style.width = '250px';
// let main = document.createElement('div');
// main.style.display = 'flex';
// let left = document.createElement('button');
// left.innerText = '<';
// let right = document.createElement('button');
//
// right.innerText = '>';
// document.body.appendChild(main);
//
// main.append(left, imgEl, right)
// left.onclick = function () {
//     --i;
//     if (i < 0) {
//         i = images.length - 1;
//     }
//     imgEl.src = images[i];
// }
// right.onclick = function () {
//     ++i;
//     if (i > images.length - 1) {
//         i = 0;
//     }
//     imgEl.src = images[i];
// }

//-- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
//- Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
//1й - отфильтровывает пользователей со статусом false (оставляет со статусом false)
//2й - оставляет старше 29 лет включительно
//3й - оставляет тех у кого город киев
//Данные выводить в документ
//===========resolve==============
function showUsers(users) {
    const main = document.createElement('div');
    main.id='users';
    for (const user of users) {
        const h4 = document.createElement('h4');
        h4.innerText = `Id: ${user.id}, name: ${user.name}, ${user.age}, status: ${user.status}. Address: ${user.address.city}, ${user.address.street} street, ${user.address.number}`
        main.appendChild(h4)
    }
    return main;
}

function usersManipulator() {
    let users = [...usersWithAddress];
    return {
        changeUsers: (condition) => {
            users = users.filter(condition);
            return users;
        },
        resetUsers: () => {
            users = [...usersWithAddress]
        }
    };
}

const {changeUsers, resetUsers} = usersManipulator();

const lab1 = document.createElement('h2');
lab1.innerText = 'status=false'
const lab2 = document.createElement('h2');
lab2.innerText = '29 yo and older'
const lab3 = document.createElement('h2');
lab3.innerText = 'city=Kyiv'

const form = document.createElement('form');
form.id = 'f1';
document.body.appendChild(form);

const check1 = document.createElement('input');
check1.name = 'check1';
check1.type = 'checkbox'

const check2 = check1.cloneNode(true)
check2.name = 'check2';

const check3 = check1.cloneNode(true)
check3.name = 'check3';

form.append(lab1, check1, lab2, check2, lab3, check3);

check1.onclick = function () {
    const main = showUsers(changeUsers(u => !u.status));
    if (this.checked) {
        document.body.appendChild(main)
    } else {
        resetUsers()
        document.body.removeChild(main)
        main.remove()
    }

}

check2.onclick = function () {
    const main = showUsers(changeUsers(u => u.age >= 29));

    if (this.checked) {
        document.body.appendChild(main)
    } else {

    }
}

check3.onclick = function () {
    const main = showUsers(changeUsers(u => u.address.city === 'Kyiv'));

    if (this.checked) {
        document.body.appendChild(main)
    } else {

    }
}

//*****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
//при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу
// (лежащему на одном уровне)
//НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//    Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

