let goods = JSON.parse(localStorage.getItem('Goods'));
let mainDiv = document.createElement('div');
mainDiv.style.display = 'flex';
mainDiv.setAttribute('id', 'products');
document.body.appendChild(mainDiv);
for (const item of goods) {
    let div = document.createElement('div');
    let name = document.createElement('h2');
    name.innerText = `Назва товару : ${item.name}`;
    let count = document.createElement('h3');
    count.innerText = `Кількість : ${item.count}`;
    let price = document.createElement('h3');
    price.innerText = `Вартість товару : ${item.price}`;
    let image = document.createElement('img');
    image.src = item.image;
    image.style.width = '200px';
    div.style.background = 'silver';
    div.style.border = '1px solid gray'
    div.style.width = '250px';
    div.style.margin = '10px';
    div.style.padding = '10px';
    let button = document.createElement('button');
    button.innerText = 'Видалити цей товар'
    button.onclick = function () {
        goods.splice(goods.indexOf(item), 1);
        localStorage.setItem('Goods', JSON.stringify(goods));
        button.disabled = true;
    }
    div.append(name, count, price, image, button);
    mainDiv.appendChild(div);
}
let deleteBtn = document.getElementById('deleteAll');
deleteBtn.onclick = function (e) {
    e.preventDefault();
    document.getElementById('products').style.display = 'none';
    localStorage.removeItem('Goods');
}
