//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
//console.log('hello world'.length);
//console.log('lorem ipsum'.length);
//console.log('javascript is cool'.length);

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
//console.log('hello world'.toUpperCase(),'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase())

//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//onsole.log('HELLO WORLD'.toLowerCase(),'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase())

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//let str = ' dirty string   ';
//console.log(str.trim())

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let stringToarray = (str) => {
//    return str.split(' ');
//}
//let str = 'Каждый охотник желает знать';
//let arr = stringToarray(str);
//document.writeln(arr);

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//let delete_characters=(str, length)=>{
//return str.slice(0,length);
//}
//let str = 'Каждый охотник желает знать';
//document.writeln(delete_characters(str, 7));

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//let insert_dash=(str)=>{
//    return str.toUpperCase().replaceAll(' ','-');
//}
//let str = "HTML JavaScript PHP";
//document.writeln(insert_dash(str));

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//let upp = (str) => {
//    return str[0].toUpperCase().concat(str.slice(1));
//}
//
//console.log(upp('hello world'))

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//let capitalize = (str) => {
//    return str.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')
//}
//let str = 'Каждый охотник желает знать';
//console.log(capitalize(str));

