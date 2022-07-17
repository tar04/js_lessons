//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.trim())

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let stringToArray = (str) => {
//             return str.split(' ')
//     }
// console.log(stringToArray('hey its me'));

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//  let delete_characters=(str, length)=>{
//     return str.substring(0,length)
//  }
//
// console.log(delete_characters('hi its me',6))

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
// let insert_dash=(str)=>{
//     return str.toUpperCase().replaceAll(' ','-')
// }
// console.log(insert_dash('Каждый охотник желает знать'))

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let toUp=(str)=>{
//     return str[0].toUpperCase().concat(str.slice(1))
// }
// console.log(toUp('каждый охотник желает знать'))

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize=(str)=>{
//     return str.split(' ').map(item => item[0].toUpperCase().concat(item.slice(1))).join(' ')
//
// }
//
// console.log(capitalize('каждый охотник желает знать'))