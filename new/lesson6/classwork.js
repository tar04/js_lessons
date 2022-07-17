//- Дано список імен.
//let n1 = 'Harry..Potter'
//let n2 = 'Ron---Whisley'
//let n3 = 'Hermione__Granger'
//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'
//===========resolve==========
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let valid = (str) => {
//     const split=str.split('').filter(item => item!=="." && item !=="-"&& item!=="_").join(' ').split('')
//     console.log(split)
//     for (let i = 0; i < split.length-1; i++) {
//         if (split[i+1]!==split[i+1].toUpperCase()){
//             split[i]=''
//         }
//     }
//     return split.join('')
// }
// console.log(valid(n1));
// console.log(valid(n2))
// console.log(valid(n3))


//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomArr = (length) => {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random() * 100)
    }
    return arr
}


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
// console.log(randomArr(10).sort((a, b) => a - b));

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// console.log(randomArr(10).filter(item=>!(item%2)));

//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// console.log(randomArr(10).map(item => item.toString()));

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') return arr.sort((a, b) => a - b);
//     if (direction === 'descending') return arr.sort((a, b) => b - a);
// }
//
// console.log(sortNums(randomArr(10), 'descending'))

//- є масив
// let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
// ];

//-- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(item=>item.monthDuration>=5))
