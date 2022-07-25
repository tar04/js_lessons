//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
//==========resolve===========
// const form = document.createElement('form');
// form.name = 'f1';
// document.body.appendChild(form);
//
// const name = document.createElement('input');
// name.name = 'name';
// const age = document.createElement('input');
// age.name = 'age';
// age.type = 'number';
// const button = document.createElement('button');
// button.innerText = 'Send';
// form.append(name, age, button);
// form.onsubmit = function (e) {
//     e.preventDefault();
//     if (this.name.value && this.age.value) {
//         localStorage.setItem('user',JSON.stringify({name: this.name.value, age: this.age.value}))
//     }else {
//         alert('Fill all fields')
//     }
// }

//-створити форму з інпутами для model,type та volume автівки.
//    при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//==========resolve===============
// document.forms.carInput.onsubmit=function (e) {
//     e.preventDefault()
//     if (this.model.value && this.type.value && this.volume.value ){
//         let cars=JSON.parse(localStorage.getItem('cars')) || [];
//         cars.push({model:this.model.value, type:this.type.value,volume:this.volume.value});
//         localStorage.setItem('cars',JSON.stringify(cars));
//         for (const input of this.children){
//             input.value='';
//         }
//     }else{
//         alert('fill the fields')
//     }
// }
