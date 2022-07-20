//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//-- отримує текст з параграфа з id "content"
// console.log(document.getElementById('content').innerText);

//-- отримує текст з блоку з id "rules"
// console.log(document.getElementById('rules').innerText);

//-- замініть текст параграфа з id 'content' на будь-який інший
// document.getElementById('content').innerText='qqqq'

//-- замініть текст параграфа з id 'rules' на будь-який інший
// document.getElementById('rules').innerHTML='<i>hello</i>'

//-- змініть кожному елементу колір фону на червоний
for (let child of document.body.children) {
    child.style.background='red'
}

//-- змініть кожному елементу колір тексту на синій
for (let child of document.body.children) {
    child.style.color='blue'
}

//-- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList)

//-- поміняти колір тексту у всіх елементів fc_rules на червоний
for (let el of document.getElementsByClassName('fc_rules')) {
    el.style.color='red'
}
