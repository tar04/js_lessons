//Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let favorites = JSON.parse(localStorage.getItem('Favorites'));
for (const user of favorites) {
    let mainDiv = document.createElement('div');
    document.body.appendChild(mainDiv);
    mainDiv.style.display = 'flex';
    mainDiv.style.columnGap = '5px';
    mainDiv.style.paddingBottom = '5px'
    let name = document.createElement('div');
    name.innerText = 'Name :' + user.name;
    let age = document.createElement('div');
    age.innerText = 'Age :' + user.age;
    let status = document.createElement('div');
    status.innerText = 'Status :' + user.status;
    mainDiv.append(name, age, status);
}