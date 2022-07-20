//Взяти файл template_2.html та працювати в ньому

//1) Напишіть код, який :

//a) змінює клас тексту елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById('main_header').innerText='dec-2021'

//b) робить ширину елементу ul 400px
for (let el of document.getElementsByTagName('ul')) {
    el.style.width='400px'
}

//c) робить ширину всіх елементів з класом linkList шириною 50%
for (let el of document.getElementsByClassName('linkList')) {
    el.style.width='50%'
}

//d) отримує текст який зберігається в елементі з класом listElement2
console.log(document.getElementsByClassName('listElement2')[0].innerText);

//e) отримує всі елементи li та змінює ім колір фону на сірий
for (let el of document.getElementsByTagName('li')) {
    el.style.background='gray'
}

//f) отримує всі елементи 'a' та додає їм клас anchor
for (let el of document.getElementsByTagName('a')) {
    el.classList.add('anchor')
}

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let el of document.getElementsByTagName('a')) {
    if (el.innerText==='link3') el.style.fontSize='40px';
}

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let el of document.getElementsByTagName('a')) {
    el.classList.add(`element_${el.innerText}`)
}

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let color=prompt('Введи колір ')
// for (let el of document.getElementsByClassName('sub-header')) {
//     el.style.background=color
// }

//j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let color=prompt('Введи колір ');
// for (let el of document.getElementsByClassName('sub-header')) {
//     if (el.innerText==='content 2 segment'){
//         el.style.color=color
//     }
// }

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// document.getElementsByClassName('content_1')[0].innerText=prompt('Введіть текст')

//l) отримати елементи p та змінити їм padding на 20px
for (let el of document.getElementsByTagName('p')) {
    el.style.padding='20px'
}

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

for (let el of document.getElementsByClassName('text2')) {
    el.innerText='sep-2021'
}