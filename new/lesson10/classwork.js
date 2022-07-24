//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//==========resolve==============
const form1 = document.createElement('form');
const input1=document.createElement('input')
form1.appendChild(input1)
form1.id='f1'
input1.name='first_input'

const form2 = document.createElement('form');
const input2=document.createElement('input')
form2.appendChild(input2)
form2.id='f2'
input2.name='second_input'

const btn=document.createElement('button')
btn.innerText='Send'
btn.onclick=function () {
    console.log(`first input- ${document.forms.f1.first_input.value}`)
    console.log(`second input- ${document.forms.f2.second_input.value}`)
}
document.body.append(form1,form2,btn);

