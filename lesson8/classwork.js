//Взяти файл template_2.html та працювати в ньому

//1) Напишіть код, який :

//a) змінює клас тексту елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)
//document.getElementById('main_header').classList.add('sep-2021');

//b) робить шириниу елементу ul 400px
//let Ul = document.getElementsByTagName('ul');
//for (const element of Ul) {
//    element.style.width = '400px';
//}

//c) робить ширину всіх елементів з класом linkList шириною 50%
//let links = document.getElementsByClassName('linkList');
//for (const link of links) {
//    link.style.width='50%';
//}

//d) отримує текст який зберігається в елементі з класом listElement2
//console.log(document.querySelector('.listElement2').innerText);

//e) отримує всі елементи li та змінює ім колір фону на сірий
//let liEl = document.getElementsByTagName('li');
//for (const element of liEl) {
//    element.style.background='gray';
//}

//f) отримує всі елементи 'a' та додає їм клас anchor
//let elements = document.getElementsByTagName('a');
//for (const element of elements) {
//    element.classList.add('anchor');
//}

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//let aElements = document.getElementsByTagName('a');
//for (const element of aElements) {
//    if (element.innerText==='link3'){
//        element.style.fontSize= '40px'
//    }
//}

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//let aElements = document.getElementsByTagName('a');
//for (const element of aElements) {
//    element.classList.add(`element_${element.innerText}`)
//}

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//let subHeader = document.getElementsByClassName('sub-header');
//let customColor=prompt('Введи колір');
//for (const element of subHeader) {
//    element.style.background=customColor;
//}

//j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//let subHeader = document.getElementsByClassName('sub-header');
//let customColor=prompt('Введи колір');
//for (const element of subHeader) {
//    if (element.innerText==='content 2 segment'){
//        element.style.color=customColor
//    }
//}

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//let Content1 = document.getElementsByClassName('content_1');
//let someText=prompt('Введи свій текст');
//Content1[0].innerText=someText;

//l) отримати елементи p та змінити їм padding на 20px
//let allP = document.querySelectorAll('p');
//for (const element of allP) {
//    element.style.padding='20px';
//}

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//let  text2= document.getElementsByClassName('text2');
//for (const element of text2) {
//    element.innerText='sep-2021'
//}
