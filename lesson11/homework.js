//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
//==========resolve===========
//let form = document.createElement('form');
//form.setAttribute('name', 'userInput');
//document.body.appendChild(form);
//let nameText = document.createElement('h4');
//nameText.innerText = 'Name';
//let name = document.createElement('input');
//name.setAttribute('type', 'text');
//let ageText = document.createElement('h4');
//ageText.innerText = 'Age';
//let age = document.createElement('input');
//age.setAttribute('type', 'number');
//let button = document.createElement('button');
//button.innerText = 'Send';
//button.style.marginLeft = '50px'
//form.append(nameText, name, ageText, age, button);
//form.onsubmit = function (e) {
//    e.preventDefault();
//    let userName = name.value;

//    let userAge = age.value;
//    localStorage.setItem('user', JSON.stringify({name: userName, age: userAge}));
//}

//-створити форму з інпутами для model,type та volume автівки.
//    при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//==========resolve===============
//let form = document.forms.carInput;
//form.onsubmit = function (e) {
//    e.preventDefault();
//    let model = this.model.value;
//    let type = this.type.value;
//    let volume = this.volume.value;
//    let car = {model, type, volume};
//    let cars = JSON.parse(localStorage.getItem('Cars'));
//    !cars ? (cars = [], cars.push(car)) : cars.push(car);
//    localStorage.setItem('Cars', JSON.stringify(cars));
//}
