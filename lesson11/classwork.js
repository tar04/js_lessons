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
    let mainDiv = document.createElement('div');
    mainDiv.style.display = 'flex';
    mainDiv.style.columnGap = '5px';
    mainDiv.style.paddingBottom = '5px'
    let name = document.createElement('div');
    name.innerText = user.name;
    let age = document.createElement('div');
    age.innerText = user.age;
    let status = document.createElement('div');
    status.innerText = user.status;
    let btn = document.createElement('button');
    btn.innerText = 'Додати до улюблених'
    document.body.appendChild(mainDiv);
    mainDiv.append(name, age, status, btn);
    btn.onclick = function () {
        let favoriteUsers = JSON.parse(localStorage.getItem('Favorites')) || [];
        favoriteUsers.push(user);
        localStorage.setItem('Favorites', JSON.stringify(favoriteUsers));
    }
}

//Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.