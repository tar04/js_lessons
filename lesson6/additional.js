//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//========resolve=============
//function cutString(str, n) {
//    let newStr = [];
//    while (str.length) {
//        newStr.push(str.substring(0, n));
//        str = str.substring(n)
//    }
//    return newStr;
//}
//
//document.writeln(cutString('наслаждение', 3));


//- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
//    наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
//(some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//Протестувати на значеннях
//someemail@gmail.com
//someeMAIL@gmail.com
//someeMAIL@i.ua
//some.email@gmail.com
//===========resolve===========
//function mailVal(mail) {
//    let realmail = mail.toLowerCase();
//    if ((realmail.includes('@')) && (realmail.split('@')[0]) && (!(realmail.split('@')[1].split('.')[0].length<2))) {
//        return mail;
//    } else {
//        return 'Неправильно введена пошта'
//    }
//}
//
//console.log(mailVal('some.email@gmail.com'))


//- є масив
//let coursesArray = [
//    {
//        title: 'JavaScript Complex',
//        monthDuration: 5,
//        hourDuration: 909,
//        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//    },
//    {
//        title: 'Java Complex',
//        monthDuration: 6,
//        hourDuration: 909,
//        modules: ['html',
//            'css',
//            'js',
//            'mysql',
//            'mongodb',
//            'angular',
//            'aws',
//            'docker',
//            'git',
//            'java core',
//            'java advanced']
//    },
//    {
//        title: 'Python Complex',
//        monthDuration: 6,
//        hourDuration: 909,
//        modules: ['html',
//            'css',
//            'js',
//            'mysql',
//            'mongodb',
//            'angular',
//            'aws',
//            'docker',
//            'python core',
//            'python advanced']
//    },
//    {
//        title: 'QA Complex',
//        monthDuration: 4,
//        hourDuration: 909,
//        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//    },
//    {
//        title: 'FullStack',
//        monthDuration: 7,
//        hourDuration: 909,
//        modules: ['html',
//            'css',
//            'js',
//            'mysql',
//            'mongodb',
//            'react',
//            'angular',
//            'aws',
//            'docker',
//            'git',
//            'node.js',
//            'python',
//            'java']
//    },
//    {
//        title: 'Frontend',
//        monthDuration: 4,
//        hourDuration: 909,
//        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//    }
//];
//
//відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//===========resolve==============
//let sort = coursesArray.sort((a, b) => b.modules.length-a.modules.length);
//console.log(sort)


//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//    let symb = "о", str = "Астрономия это наука о небесных объектах";
//document.writeln(count(str, symb)) // 5
//================resolve===================
//let symb = "о", str = "Астрономия это наука о небесных объектах";
//
//function count(str, stringsearch) {
//    let n = 0;
//    for (let i = 0; i < str.length - 1; i++) {
//        if (str.charAt(i) === stringsearch) {
//            n++;
//        }
//    }
//    return n;
//}
//
//document.writeln(count(str, symb))


//- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//    let str = "Сила тяжести приложена к центру масс тела";
//document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//let str = "Сила тяжести приложена к центру масс тела";
//
//let str = "Сила тяжести приложена к центру масс тела";
//
//function cutString(str, n) {
//    return str.split(' ').reverse().slice(length-n).reverse().join(' ')
//}
//
//document.writeln(cutString(str, 5));