//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//==============resolve==================
//function Car(model, manufacturer, year, maxspeed, capacity) {
//    this.Model = model;
//    this.Manufacturer = manufacturer;
//    this.Year = year;
//    this.Maxspeed = maxspeed;
//    this.Capacity = capacity;
//    this.drive = function () {
//        console.log(`їдемо зі швидкістю ${maxspeed} км на годину`)
//    }
//    this.info = function () {
//        for (const key in this) {
//            if (typeof this[key] !== "function") {
//                console.log(key +' '+ this[key])
//            }
//        }
//    }
//    this.increaseMaxSpeed = function (newSpeed) {
//        this.Maxspeed = this.Maxspeed + newSpeed;
//    }
//    this.changeYear = function (newValue) {
//        this.Year = newValue;
//    }
//    this.addDriver = function (driver) {
//        this.Driver = driver;
//    }
//}
//
//let car1 = new Car('Renault Megane', 'Renault Group', 2016, 200, 1.2);
//console.log(car1);
//car1.drive();
//car1.info()
//car1.increaseMaxSpeed(55);
//car1.changeYear(2020);
//car1.addDriver('Taras')
//console.log(car1);

//- (Те саме, тільки через клас) Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//class Car {
//    constructor(model, manufacturer, year, maxspeed, capacity) {
//        this.model = model;
//        this.manufacturer = manufacturer;
//        this.year = year;
//        this.maxspeed = maxspeed;
//        this.capacity = capacity;
//    }
//    drive = function () {
//        console.log(`їдемо зі швидкістю ${(this.maxspeed)} км на годину`)
//    }
//    info = function () {
//        for (const key in this) {
//            if (typeof this[key] !== "function") {
//                console.log(key +' '+ this[key])
//            }
//        }
//    }
//    increaseMaxSpeed = function (newSpeed) {
//        this.maxspeed = this.maxspeed + newSpeed;
//    }
//    changeYear = function (newValue) {
//        this.year = newValue;
//    }
//    addDriver = function (driver) {
//        this.driver = driver;
//    }
//}
//let car2=new Car('BMW M4','Germany', 2015,280, 3)
//console.log(car2);
//car2.drive();
//car2.info()
//car2.increaseMaxSpeed(50);
//car2.changeYear(2017);
//car2.addDriver('Ihor');
//console.log(' ')
//car2.info()

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//class Cinderella {
//    constructor(Name, Age, Footsize) {
//        this.Name = Name;
//        this.Age = Age;
//        this.Footsize = Footsize;
//    }
//}
//
//let CinderellaArr = [
//    new Cinderella('Марина', 25, 42),
//    new Cinderella('Ірина', 22, 41),
//    new Cinderella('Мар\'яна', 21, 42),
//    new Cinderella('Тетяна', 22, 42),
//    new Cinderella('Софія', 25, 44),
//    new Cinderella('Марта', 19, 40),
//    new Cinderella('Роксолана', 26, 42),
//    new Cinderella('Юлія', 22, 43),
//    new Cinderella('Евеліна', 23, 41),
//    new Cinderella('Надія', 22, 41)
//]
//console.log(CinderellaArr);

//    Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//class Prince {
//    constructor(Name, Age, Foundedshoe) {
//        this.Name = Name;
//        this.Age = Age;
//        this.Foundedshoe = Foundedshoe;
//    }
//}
//
//let Prince1 = new Prince('Taras', 20, 40);
//console.log(Prince1);

//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//for (const cinderella of CinderellaArr) {
//    if (cinderella.Footsize === Prince1.Foundedshoe) console.log(`Попелюшку звати ${cinderella.Name}`);
//}

//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//let find = CinderellaArr.find(value => value.Footsize === Prince1.Foundedshoe);
//console.log(`Попелюшку звати ${find.Name}`);
