//Все робити за допомоги js.
//- створити блок,
//let div = document.createElement('div');
//- додати йому класи wrap, collapse, alpha, beta
//div.classList.add('wrap', 'collapse', 'alpha', 'beta');
//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//div.style.background='red';
//div.style.color='gold';
//div.style.fontSize='24';
//- додати цей блок в body.
//document.body.appendChild(div);
//div.innerText='hello world'
//- клонувати його повністю, та додати клон в body.
//let divClone = div.cloneNode(true);
//document.body.appendChild(divClone);

//- Є масив:
//    ['Main','Products','About us','Contacts']
//Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
//Завдання робити через цикли.
//=============resolve==============
//let Arr=['Main','Products','About us','Contacts'];
//let ul = document.getElementsByClassName('menu')[0];
//for (const item of Arr) {
//    let li=document.createElement('li');
//    li.innerText=item;
//    ul.appendChild(li);
//}

//- Є масив
//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.
//=============resolve==============
//for (const course of coursesAndDurationArray) {
//    let div = document.createElement('div');
//    let h2 = document.createElement("h2");
//    h2.innerText=`${course.title} ${course.monthDuration}`
//    document.body.appendChild(div);
//    div.appendChild(h2);
//}

//- Є масив
//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//    Завдання робити через цикли.
//============resolve==========
//for (const course of coursesAndDurationArray) {
//    let div = document.createElement('div');
//    let h1 = document.createElement('h1');
//    let p = document.createElement('p');
//
//    div.setAttribute('class','item');
//    h1.setAttribute('class','heading');
//    p.setAttribute('class','description');
//
//    h1.innerText=course.title;
//    p.innerText=course.monthDuration;
//
//    document.body.appendChild(div);
//    div.append(h1,p);
//}