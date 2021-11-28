//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
//function User(id, name, surname, email, phone) {
//    this.id = id;
//    this.name = name;
//    this.surname = surname;
//    this.email = email;
//    this.phone = phone;
//}
//
//let UserArr = [
//    new User(1, 'Taras', 'Oseredchuk', 'taras200195@gmail.com', '0988610231'),
//    new User(65, 'Max', 'Severyn', 'm2000s@gmail.com', '0988610232'),
//    new User(9, 'Bogdan', 'Martiniv', 'bm@gmail.com', '0988610233'),
//    new User(226, 'Ihor', 'Yavoriv', 'ihoryavoriv@gmail.com', '0988610234'),
//    new User(901, 'Matthew', 'Zhalivciv', 'zhalivciv1@gmail.com', '0988610235'),
//    new User(215, 'Roman', 'Matviitsiv', 'mrkabaken@gmail.com', '0988610236'),
//    new User(4, 'Stas', 'Podmazov', 'djbit@gmail.com', '0988610237'),
//    new User(15, 'Rostyk', 'Fediv', 'rostikkyss@gmail.com', '0988610238'),
//    new User(84, 'Sasha', 'Nikanorov', 'alex01@gmail.com', '0988610239'),
//    new User(155, 'Arthur', 'Komlev', 'qwerty123@gmail.com', '0988610230')
//]
//console.log(UserArr)

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//console.log(UserArr.filter(value =>!(value.id % 2)));

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//console.log(UserArr.sort((a, b) => a.id - b.id));

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
//class Client {
//    constructor(id, name, surname, email, phone, order) {
//        this.id = id;
//        this.name = name;
//        this.surname = surname;
//        this.email = email;
//        this.phone = phone;
//        this.order = order;
//    }
//}
//
//let Clients = [
//    new Client(1, 'Taras', 'Oseredchuk', 'taras200195@gmail.com', '0988610231', ['driveshaft']),
//    new Client(65, 'Max', 'Severyn', 'm2000s@gmail.com', '0988610232', ['brake disks',  'tires(x4)']),
//    new Client(9, 'Bogdan', 'Martiniv', 'bm@gmail.com', '0988610233',  ['ac compressor',  'left wing']),
//    new Client(226, 'Ihor', 'Yavoriv', 'ihoryavoriv@gmail.com', '0988610234', ['M-package body kit','exhaust']),
//    new Client(901, 'Matthew', 'Zhalivciv', 'zhalivciv1@gmail.com', '0988610235', ['oil filter','tires(x2)','ac compressor']),
//    new Client(215, 'Roman', 'Matviitsiv', 'mrkabaken@gmail.com', '0988610236', ['engine block','engine oil']),
//    new Client(4, 'Stas', 'Podmazov', 'djbit@gmail.com', '0988610237', ['timing chain']),
//    new Client(15, 'Rostyk', 'Fediv', 'rostikkyss@gmail.com', '0988610238', ['clutch kit','coil springs','drive axle','fuel filter','drive axle']),
//    new Client(84, 'Sasha', 'Nikanorov', 'alex01@gmail.com', '0988610239', ['fuel pump','cylinder head gasket','door lock','v-belt']),
//    new Client(155, 'Arthur', 'Komlev', 'qwerty123@gmail.com', '0988610230',['car battery','fuel tank'])
//
//];
//console.log(Clients)

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//let sort = Clients.sort((a, b) =>a.order.length-b.order.length);
//console.log(sort)

