//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//==========resolve==============
//let div = document.createElement('div');
//let btn = document.createElement('button');
//btn.innerText = 'Інформація з форм'
//let form1 = document.createElement('form');
//let form2 = document.createElement('form');
//form1.setAttribute('name', 'form1');
//form2.setAttribute('name', 'form2');
//form2.style.margin = '20px 0'
//let input1 = document.createElement('input');
//let input2 = input1.cloneNode();
//let input3 = input1.cloneNode();
//let input4 = input1.cloneNode();
//btn.onclick = function () {
//    console.log(input1.value);
//    console.log(input2.value);
//    console.log(input3.value);
//    console.log(input4.value);
//}
//document.body.appendChild(div);
//div.append(form1, form2, btn);
//form1.append(input1, input2);
//form2.append(input3, input4);

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додаткова частина для завдання)
//==========resolve==============
//let input1 = document.createElement('input');
//let input2 = input1.cloneNode();
//let input3 = input1.cloneNode();
//input1.setAttribute('type', 'number');
//input2.setAttribute('type', 'number');
//let btn = document.createElement('button');
//btn.innerText = 'Створити таблицю'
//btn.style.margin = '10px'
//document.body.append(input1, input2, input3, btn);
//btn.onclick = function () {
//    let table = document.createElement("table");
//    for (let i = 0; i < input1.value; i++) {
//        let tr = document.createElement("tr");
//        for (let j = 0; j < input2.value; j++) {
//            let td = document.createElement("td");
//            td.innerText = input3.value;
//            td.style.border = '1px solid blue'
//            tr.appendChild(td);
//        }
//        table.appendChild(tr);
//    }
//    table.style.border = '1px solid red'
//    document.body.appendChild(table)
//}


//- Сворити масив не цензцрних слів.
//    Сворити інпут текстового типу.
//    Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//    Перевірку робити при натисканні на кнопку
//==========resolve==============
//let bw = ['чорт', 'дурень', 'гівнюк', 'козел', 'мудак'];
//let input = document.createElement('input');
//input.setAttribute('type', 'text');
//let btn = document.createElement('button');
//btn.innerText = 'Перевірити текст';
//document.body.append(input, btn);
//btn.onclick = function () {
//    let x = 0;
//    for (const item of bw) {
//        if (input.value===item) { //if (input.value.includes(item))
//            x = 1;
//        }
//    }
//    if (x) {
//        alert('Оце ти лихослів!')
//    } else {
//        alert('Молодець!')
//    }
//    input.value = '';
//}

//- Сворити масив не цензцрних слів.
//    Сворити інпут текстового типу.
//    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//    Кинути алерт з попередженням у випадку якщо містить.
//    Перевірку робити при натисканні на кнопку
//==========resolve==============
//Попереднє завдання, але умова буде використовуватись із коментаря -->(input.value.includes(item))
