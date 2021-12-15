//- Імітуємо наповнення інтернет магазину товарами :

//Створити форму з наступними полями :
//- назва товару
//- кількість товару
//- ціна товару
//- картинка товару (посилання з інтернету)
//Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
//створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
//На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//    До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

document.forms.f1.onsubmit = function (e) {
    e.preventDefault();
    let name = document.forms.f1.Name.value;
    let count = document.forms.f1.Count.value;
    let price = document.forms.f1.Price.value;
    let image = document.forms.f1.Image.value;
    let item = {name, count, price, image};
    let Goods = JSON.parse(localStorage.getItem('Goods')) || [];
    //item.id = Goods[Goods.length - 1]?.id + 1 || 1;
    Goods.push(item);
    localStorage.setItem('Goods', JSON.stringify(Goods));
    document.forms.f1.Name.value = '';
    document.forms.f1.Count.value = '';
    document.forms.f1.Price.value = '';
    document.forms.f1.Image.value = '';
}
