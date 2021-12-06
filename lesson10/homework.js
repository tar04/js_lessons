//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//let text = document.getElementById('text');
//let btn1 = document.getElementById('btn1');
//btn1.onclick=function () {
//    text.style.display='none';
//}

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//let hide = document.getElementById('hide');
//hide.onclick=function () {
//    this.hidden=true;
//}

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//let input = document.getElementById('age');
//let btn2 = document.getElementById('btn2');
//btn2.onclick = function () {
//    if (input.value >= 18) {
//        alert('Тобі 18 або більше')
//    } else {
//        alert('Тобі менше 18')
//    }
//}

//- Создайте меню, которое раскрывается/сворачивается при клике
//let hide=document.getElementById('hider');
//let menu = document.getElementsByTagName("ul")[0];
//hide.onmousemove=function () {
//    this.style.cursor='pointer'
//    this.style.width='fit-content'
//}
//hide.onclick=function () {
//    menu.classList.toggle('hidden')
//}

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//    Вывести список комментариев в документ, каждый в своем блоке.
//    Добавьте каждому комментарию по кнопке для сворачивания его body.
//
//let comments = document.getElementById('comments');
//let comm = [
//    {
//        title: 'Sophia Bolekhivska',
//        body: 'Цікаве та відверте відео, мене все одно дивує як можна генерувати стільки контенту'
//    },
//    {title: 'Светлана Нечаева', body: 'Все,що ви робите,це дуже круто!! Велика дяка вам за це!!)'},
//    {title: 'HomoGeekus', body: 'Дякую за таке мотиваційне відео! Контент - вогінь! Продовжуйте творити! '},
//    {title: 'Vova Chornyi', body: 'Як перевірити чи ти в ІТ!?  - "мені навіть рюкзак подарували"'},
//];
//let div = document.createElement('div');
//for (const element of comm) {
//    let h2 = document.createElement('h2');
//    let p = document.createElement('p');
//    let btn = document.createElement('button');
//    h2.innerText = element.title;
//    p.innerText = element.body;
//    btn.innerText = 'Приховати текст';
//    div.append(h2, p, btn);
//    btn.onclick = function () {
//        p.classList.toggle('hidden');
//        if (p.classList.contains('hidden')) {
//            btn.innerText = 'Показати текст';
//        } else {
//            btn.innerText = 'Приховати текст';
//        }
//    }
//}
//comments.appendChild(div);

