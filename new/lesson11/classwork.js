//є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.
for (const user of users) {
    const main = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = `${user.name} -- ${user.age} -- ${user.status}`
    const button = document.createElement('button');
    button.innerText = 'Add to favourites'
    main.append(h2, button)
    button.onclick = function () {
        let usersArr = JSON.parse(localStorage.getItem('users')) || [];
        usersArr.push(user)
        localStorage.setItem('users',JSON.stringify(usersArr));
    }
    document.body.appendChild(main);
}

//Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.