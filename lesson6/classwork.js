//- Дано список імен.
//let n1 = 'Harry..Potter'
//let n2 = 'Ron---Whisley'
//let n3 = 'Hermione__Granger'
//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'
//===========resolve==========
//let n1 = 'Harry..Potter'
//let n2 = 'Ron---Whisley'
//let n3 = 'Hermione__Granger'
//let nameVal = (name) => {
//    return name.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__', ' ');
//}
//console.log(nameVal(n1));
//console.log(nameVal(n2));
//console.log(nameVal(n3));

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//let randomArr = (number) => {
//    let arr = [];
//    for (let i = 0; i < number; i++) {
//        arr.push(Math.floor(Math.random() * 100) + 1);
//    }
//    return arr;
//}
//console.log(randomArr(13))

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//let array=randomArr(10);
//console.log(array)
//let sort = array.sort((a, b) => a-b);
//console.log(sort)

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//let array = randomArr(10);
//console.log(array)
//console.log(array.filter(value => {
//    return !(value % 2);
//}));

//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//let array = randomArr(10);
//console.log(array)
//let map = array.map(value => value.toString());
//console.log(map)


//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//let nums = [11,21,3];
//sortNums('ascending') // [3,11,21]
//sortNums('descending') // [21,11,3]
//===========resolve==========
//let nums = [11, 21, 3];
//console.log(nums)
//
//function sortNums(nums, direction) {
//    if (direction === 'ascending') {
//        return nums.sort((a, b) => a - b);
//    } else if (direction === 'descending') {
//        return nums.sort((a, b) => b - a);
//    }
//    return 0
//}
//
//console.log(sortNums(nums, 'descending'));

//- є масив
//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
//-- відсортувати його за спаданням за monthDuration
//let sort = coursesAndDurationArray.sort((a, b) => a.monthDuration-b.monthDuration);
//console.log(sort)

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
//console.log(filter)
