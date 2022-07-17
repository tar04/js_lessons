//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//========resolve=============

// let cutString = (str, n) => {
//     let arr = [];
//     let split = str.split('');
//     let i = 0
//     while (i < str.length) {
//         arr.push(split.splice(0, n).join(''));
//         i += n;
//     }
//     return arr;
// }
//----------------------------2nd variant------------------------------
// let cutString = (str, n) => {
//     if (n >= str.length) return [str];
//     const arr = [];
//     for (let i = 0, j = n; i < str.length; i += n, j += n) {
//         arr.push(str.slice(i, j))
//     }
//     return arr;
// }
//
// console.log(cutString('наслаждение', 3)) // [нас,лаж,ден,ие]

//- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
//    наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
//(some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//Протестувати на значеннях
//someemail@gmail.com
//someeMAIL@gmail.com
//someeMAIL@i.ua
//some.email@gmail.com
//===========resolve===========
// let mailValidator = (email) => {
//     let mail = email.toLowerCase();
//     if (mail.includes('@') && mail.split('@')[0] && mail.split('@')[1].split('.')[0].length >= 2) {
//         return 'Пошта вірна'
//     } else {
//         return 'Невірний формат'
//     }
// }
//
// let mail1 = 'someemail@gmail.com'
// let mail2 = 'someeMAIL@gmail.com'
// let mail3 = 'someeMAIL@i.ua'
// let mail4 = 'some.email@gmail.com'
// console.log(mailValidator(mail1))
// console.log(mailValidator(mail2))
// console.log(mailValidator(mail3))
// console.log(mailValidator(mail4))

//- є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
//відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//===========resolve==============
// console.log(coursesArray.sort((a, b) =>  b.modules.length-a.modules.length))

//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//    let symb = "о", str = "Астрономия это наука о небесных объектах";
//document.writeln(count(str, symb)) // 5
//================resolve===================
//
// let str = "Астрономия это наука о небесных объектах"
//
// let count=(str, stringSearch)=>{
//     let i=0;
//     for (const strElement of str.split('')) {
//         if (strElement.toLowerCase()===stringSearch.toLowerCase()){
//             i++;
//         }
//     }
//     return i;
// }
//
// console.log(count(str, 'А'))

//- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.

// let cutString = (str, n) => {
//     let repeat = str.split(' ')
//     let length = repeat.length;
//     for (let i = 0; i < length - n; i++) {
//         repeat.pop()
//     }
//     return repeat.join(' ')
// }
//----------------2nd version------------------
// let cutString = (str, n) => {
//     let split = str.split(' ');
//     split.splice(-(split.length - n));
//     return split;
// }

// console.log(cutString("Сила тяжести приложена к центру масс тела", 5)) // 'Сила тяжести приложена к центру'
