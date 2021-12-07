//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//    При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//    Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//=========resolve========
//document.onclick = function (e) {
//    console.log(`Назва тегу - ${e.target.localName}`);
//    if (e.target.classList.length) {
//        console.log(`Список класів - ${e.target.classList}`);
//    } else {
//        console.log('В цього елементу немає класів')
//    }
//    if (e.target.id) {
//        console.log(`Id елемента - ${e.target.id}`);
//    } else {
//        console.log('В цього елементу немає id')
//    }
//    console.log(`Висота: ${e.target.clientHeight}px * ширина : ${e.target.clientWidth}px`)
//    console.log(`---------------------------------------------`)
//}

//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//    При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//    Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//=========resolve================
//document.onclick = function (e) {
//    let classes = !!(e.target.classList.length) ? `Список класів - ${e.target.classList}` : 'В цього елементу немає класів';
//    let ids = !!(e.target.id) ? `Id елемента - ${e.target.id}` : 'В цього елементу немає id';
//    alert(`Назва тегу - ${e.target.localName}\n${classes}\n${ids}\nВисота: ${e.target.clientHeight}px * ширина : ${e.target.clientWidth}px`);
//}

//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//================resolve=============
//let images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"]
//let mainDiv = document.createElement('div');
//mainDiv.style.width = 'fit-content'
//let btnLeft = document.createElement('button');
//let img = document.createElement('img');
//img.src = images[0];
//img.style.width = '500px'
//img.style.height = '300px'
//btnLeft.innerText = '<-';
//let i = 0;
//btnLeft.onclick = function () {
//    i--;
//    if (i < 0) {
//        i = images.length - 1;
//    }
//    img.src = images[i];
//}
//
//let btnRight = document.createElement('button');
//btnRight.onclick = function () {
//    i++;
//    if (i > images.length - 1) {
//        i = 0;
//    }
//    img.src = images[i];
//}
//btnRight.innerText = '->'
//btnLeft.style.position = 'absolute';
//btnLeft.style.top = '150px';
//btnLeft.style.opacity = '0.4';
//btnRight.style.position = 'absolute';
//btnRight.style.top = '150px';
//btnRight.style.opacity = '0.4';
//btnRight.style.left = '480px';
//mainDiv.append(btnLeft, img, btnRight)
//document.body.appendChild(mainDiv);

//    Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//==========resolve=================
//document.onmouseup = function (e) {
//document.designMode='on';
//document.execCommand('italic');
//}

//-- взять массив пользователей
//let usersWithAddress = [
//    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//];
//- Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
//1й - отфильтровывает пользователей со статусом false (оставляет со статусом false)
//2й - оставляет старше 29 лет включительно
//3й - оставляет тех у кого город киев
//Данные выводить в документ

//*****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
//при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
//НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//    Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне