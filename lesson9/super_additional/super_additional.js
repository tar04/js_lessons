let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
},
    {
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
    },
    {
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
    },
    {
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
    },
    {
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
    },
    {
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    },
    {
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    },
    {
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    },
    {
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    },
    {
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    },
    {
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
    }
];
//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//let Arr = [];
//for (const user of users) {
//    Arr.push(user.address);
//}
//console.log(Arr);

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
//let div = document.createElement('div');
//for (const user of users) {
//    for (const key in user) {
//        if (typeof user[key] !== "object") {
//            div.innerText += ` ${key} : ${user[key]},`
//        } else {
//            for (const key1 in user[key]) {
//                div.innerText += ` ${key1} : ${user[key][key1]}`
//            }
//            div.innerText += `.\n`
//        }
//    }
//    document.body.appendChild(div)
//}

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
//for (const user of users) {
//    let div = document.createElement('div');
//    for (const key in user) {
//        if (typeof user[key] !== "object") {
//            let div1 = div.cloneNode();
//            div1.innerText += `${key} : ${user[key]},`
//            div.appendChild(div1)
//        } else {
//            for (const key1 in user[key]) {
//                let div1 = div.cloneNode();
//                div1.innerText += ` ${key1} : ${user[key][key1]},`
//                div.appendChild(div1)
//            }
//        }
//    }
//    div.style.display = 'flex'
//    document.body.appendChild(div);
//}

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//for (const user of users) {
//    let div = document.createElement('div');
//    for (const key in user) {
//        if (typeof user[key] !== "object") {
//            let div1 = div.cloneNode();
//            div1.innerText += `${key} : ${user[key]}, `
//            div.appendChild(div1)
//        } else {
//            let div2 = div.cloneNode();
//            div2.style.display = 'flex'
//            div2.style.marginLeft = '6px'
//            div2.innerHTML = ' Address: '
//            for (const key1 in user[key]) {
//                let div3 = div.cloneNode();
//                div3.innerText += `${key1} : ${user[key][key1]}, `
//                div2.appendChild(div3)
//            }
//            div.appendChild(div2)
//        }
//    }
//    div.style.display = 'flex'
//    document.body.appendChild(div);
//}

//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//=================resolve====================
//let rules = [
//    {
//        title: 'Первое правило Бойцовского клуба.',
//        body: 'Никому не рассказывать о Бойцовском клубе.'
//    },
//    {
//        title: 'Второе правило Бойцовского клуба.',
//        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//    },
//    {
//        title: 'Третье правило Бойцовского клуба.',
//        body: 'В схватке участвуют только двое.'
//    },
//    {
//        title: 'Четвертое правило Бойцовского клуба.',
//        body: 'Не более одного поединка за один раз.'
//    },
//    {
//        title: 'Пятое правило Бойцовского клуба.',
//        body: 'Бойцы сражаются без обуви и голые по пояс.'
//    },
//    {
//        title: 'Шестое правило Бойцовского клуба.',
//        body: 'Поединок продолжается столько, сколько потребуется.'
//    },
//    {
//        title: 'Седьмое правило Бойцовского клуба.',
//        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//    },
//    {
//        title: 'Восьмое и последнее правило Бойцовского клуба.',
//        body: 'Новичок обязан принять бой.'
//    },
//];
//let wrap = document.createElement('div');
//for (const rule of rules) {
//    let ruleDiv = document.createElement('div');
//    for (const key in rule) {
//        let h2=document.createElement('h2');
//        h2.innerText=rule[key];
//        ruleDiv.appendChild(h2);
//        h2.style.background='gold';
//    }
//    wrap.append(document.createElement('hr'));
//    wrap.append(ruleDiv);
//}
//document.body.appendChild(wrap);
