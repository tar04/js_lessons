//- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
//Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//{
//    id: 1,
//    name:'Leanne Graham',
//    username:'Bret',
//    email:'Sincere@april.biz',
//    address:{street: 'Kulas Light',
//     suite:'Apt. 556',
//     city:'Gwenborough',
//     zipcode:'92998-3874',
//     geo:{lat: '-37.3159',
//          lng:'81.1496'
//        }
//    },
//    phone: '1-770-736-8031 x56442',
//    website:'hildegard.org',
//    company:{
//        name: 'Romaguera-Crona',
//            catchPhrase
//    :
//        'Multi-layered client-server neural-net',
//            bs
//    :
//        'harness real-time e-markets'
//    }
//}
//==========resolve============
///class Company {
///    constructor(name, catchPhrase, bs) {
///        this.name = name;
///        this.catchPhrase = catchPhrase;
///        this.bs = bs;
///    }
///}
///
///class Address {
///    constructor(street, suite, city, zipcode,geo) {
///        this.street=street;
///        this.suite=suite;
///        this.city=city;
///        this.zipcode=zipcode;
///        this.geo=geo;
///    }
///}
///
///class Geo {
///    constructor(lat, lng) {
///        this.lat = lat;
///        this.lng = lng;
///    }
///}
///
///class User {
///    constructor(id, name, username, email, phone, website) {
///        this.id = id;
///        this.name = name;
///        this.username = username;
///        this.email = email;
///      this.address = new Address('Kulas Light','Apt. 556','Gwenborough','92998-3874',new Geo('-37.3159','81.1496'));
///        this.phone = phone;
///        this.website = website;
///        this.company = new Company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');
///    }
///}
///
///let user1=new User(1,'Leanne Graham','Bret','Sincere@april.biz','1-770-736-8031 x56442','hildegard.org')
//console.log(user1)

//-  Створити функцію конструктор / клас  який описує об'єкт тегу
//Поля :
//-назва тегу ()
//- опис його дій
//- масив з атрибутами (2-3 атрибути максимум)
//Кожен атрибут описати як окремий який буде містити
//-назву атрибуту
//-опис дії атрибуту
//інформацію брати з htmlbook.ru
//
//Таким чином описати теги
//-a
//-div
//-h1
//-span
//-input
//-form
//-option
//-select
//Приклад результуючого об'єкту
//{
//    titleOfTag: 'area',
//    action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//    attrs: [
//    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//    {/*some props and values*/},
//    {/*...*/},
//    {/*...*/},
//]
//==============resolve=============
//}
//function Attr(titleOfAttr, actionOfAttr) {
//    this.titleOfAttr = titleOfAttr;
//    this.actionOfAttr = actionOfAttr;
//
//}
//
//function Tag(titleOfTag, action, attrs) {
//    this.titleOfTag = titleOfTag;
//    this.action = action;
//    this.attrs = attrs;
//}
//
//let a = new Tag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [
//    new Attr('accesskey', 'Активация ссылки с помощью комбинации клавиш.'),
//    new Attr('href', 'Задает адрес документа, на который следует перейти.'),
//    new Attr('rel', 'Отношения между ссылаемым и текущим документами.')
//]);
//let div = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [
//    new Attr('align', 'Задает выравнивание содержимого тега <div>.'),
//    new Attr('title', 'Добавляет всплывающую подсказку к содержимому.')
//]);
//let h1 = new Tag('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.', [
//    new Attr('align', 'Определяет выравнивание заголовка.')
//]);
//let span = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа.', [
//    new Attr('accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'),
//    new Attr('dir', 'Задает направление и отображение текста — слева направо или справа налево.'),
//    new Attr('id', 'Указывает имя стилевого идентификатора.')
//]);
//let input = new Tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [
//    new Attr('autocomplete', 'Включает или отключает автозаполнение.'),
//    new Attr('checked', 'Предварительно активированный переключатель или флажок.'),
//    new Attr('form', 'Связывает поле с формой по её идентификатору.')
//]);
//let form = new Tag('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.', [
//    new Attr('accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'),
//    new Attr('action', 'Адрес программы или документа, который обрабатывает данные формы.'),
//    new Attr('autocomplete', 'Включает автозаполнение полей формы.')
//]);
//let option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ', [
//    new Attr('disabled', 'Заблокировать для доступа элемент списка.'),
//    new Attr('label', 'Указание метки пункта списка.')
//]);
//let select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка.  ', [
//    new Attr('size', 'Количество отображаемых строк списка.'),
//    new Attr('multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.'),
//    new Attr('name', 'Имя элемента для отправки на сервер или обращения через скрипты.')
//]);
//console.log(a, div, h1, span, input, form, option, select);