//Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
const users = JSON.parse(localStorage.getItem('users'));

for (const user of users) {

    const main = document.createElement('div');
    const h2 = document.createElement('h2');

    h2.innerText=JSON.stringify(user)

    main.append(h2)
    document.body.appendChild(main)
}
