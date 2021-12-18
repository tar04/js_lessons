//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Наприклад. // Прокинутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

//Callbacks

function wakeUp(wokeUp, cb) {
    setTimeout(() => {
        if (wokeUp) {
            console.log('Прокинутись');
            cb();
        } else {
            console.log('Давай вставай уже');
            cb();
        }
    }, 3000);
}

function breakfast() {
    setTimeout(() => {
        console.log('Сніданок');
        wash();
    }, 1000);
}

function wash() {
    setTimeout(() => {
        console.log('Прийняти душ');
        workPlace();
    }, 2000);
}

function workPlace() {
    setTimeout(() => {
            console.log('Поїхати в офіс');
            work();
    }, 500);
}

let i=true;

function work() {
    setTimeout(() => {
        console.log('Працюємо!!');
        if (i){
            dinner(true);
        }else{
            goHome()
        }
    }, 3000);
}

function dinner(wantToEat) {
    setTimeout(() => {
        if (wantToEat) {
            console.log('Обід');
            work();
            i=false;
        } else {
            work();
            i=false;
        }
    }, 300);
}

function goHome() {
    setTimeout(()=>{
        console.log('Поїхати додому');
        training();
    },500)
}

function training() {
    setTimeout(() => {
        console.log('Тренування');
        supper();
    }, 1000);
}

function supper() {
    setTimeout(() => {
        console.log('Вечеря');
        freeTime();
    }, 300);
}

function freeTime() {
    setTimeout(() => {
        console.log('Прочитати книгу(мінімум 40 сторінок)');
        brushTeeth();
    }, 1000);
}

function brushTeeth() {
    setTimeout(() => {
        console.log('Почистити зуби');
        sleep()
    }, 200);
}

function sleep() {
    setTimeout(() => {
        console.log('Лягаємо спати');
    }, 100);
}

wakeUp(true, breakfast);

//new Promise


//async/await

