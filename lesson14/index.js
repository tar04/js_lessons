//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Наприклад. // Прокинутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

//Callbacks
//function wakeUp(wokeUp, cb) {
//    setTimeout(() => {
//        if (wokeUp) {
//            console.log('Прокинутись');
//            cb();
//        } else {
//            console.log('Давай вставай уже');
//            cb();
//        }
//    }, 3000);
//}
//
//function breakfast() {
//    setTimeout(() => {
//        console.log('Сніданок');
//        wash();
//    }, 1000);
//}
//
//function wash() {
//    setTimeout(() => {
//        console.log('Прийняти душ');
//        workPlace();
//    }, 2000);
//}
//
//function workPlace() {
//    setTimeout(() => {
//            console.log('Поїхати в офіс');
//            work();
//    }, 500);
//}
//
//let i=true;
//
//function work() {
//    setTimeout(() => {
//        console.log('Працюємо!!');
//        if (i){
//            dinner(true);
//        }else{
//            goHome()
//        }
//    }, 3000);
//}
//
//function dinner(wantToEat) {
//    setTimeout(() => {
//        if (wantToEat) {
//            console.log('Обід');
//            work();
//            i=false;
//        } else {
//            work();
//            i=false;
//        }
//    }, 300);
//}
//
//function goHome() {
//    setTimeout(()=>{
//        console.log('Поїхати додому');
//        training();
//    },500)
//}
//
//function training() {
//    setTimeout(() => {
//        console.log('Тренування');
//        supper();
//    }, 1000);
//}
//
//function supper() {
//    setTimeout(() => {
//        console.log('Вечеря');
//        freeTime();
//    }, 300);
//}
//
//function freeTime() {
//    setTimeout(() => {
//        console.log('Прочитати книгу(мінімум 40 сторінок)');
//        brushTeeth();
//    }, 1000);
//}
//
//function brushTeeth() {
//    setTimeout(() => {
//        console.log('Почистити зуби');
//        sleep()
//    }, 200);
//}
//
//function sleep() {
//    setTimeout(() => {
//        console.log('Лягаємо спати');
//    }, 100);
//}
//
//wakeUp(true, breakfast);

// Promises
//function wakeUp(wokeUp) {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            if (wokeUp) {
//                resolve('Прокинутись')
//            } else {
//                reject('Давай вставай уже');
//            }
//        }, 3000);
//    })
//
//}
//
//function breakfast() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve('Сніданок');
//        }, 1000);
//    })
//
//}
//
//function wash() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve('Прийняти душ');
//        }, 2000);
//    })
//
//}
//
//function workPlace() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve('Поїхати в офіс');
//        }, 500);
//    })
//
//}
//
//function work() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve('Працюємо!!');
//        }, 3000);
//    })
//}
//
//function dinner() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve('Обід');
//        }, 300);
//    })
//}
//
//function goHome() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve('Поїхати додому');
//        }, 500)
//    })
//}
//
//function training() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve('Тренування');
//        }, 1000);
//    })
//}
//
//function supper() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve('Вечеря');
//        }, 300);
//    })
//}
//
//function freeTime() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve('Прочитати книгу(мінімум 40 сторінок)');
//        }, 1000);
//    })
//}
//
//function brushTeeth() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve('Почистити зуби');
//        }, 200);
//    })
//
//}
//
//function sleep() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve('Лягаємо спати');
//        }, 100);
//    })
//
//}
//
//wakeUp(true)
//    .then(morning => {
//        console.log(morning);
//
//        return breakfast();
//    })
//    .then(bf => {
//        console.log(bf);
//
//        return wash();
//    })
//    .then(washing => {
//        console.log(washing);
//
//        return workPlace();
//    })
//    .then(wp => {
//        console.log(wp);
//
//        return work()
//    })
//    .then(work => {
//        console.log(work);
//
//        return dinner()
//    })
//    .then(eating => {
//        console.log(eating);
//
//        return goHome();
//    })
//    .then(home => {
//        console.log(home);
//
//        return training();
//    })
//    .then(train => {
//        console.log(train);
//
//        return supper();
//    })
//    .then(supper => {
//        console.log(supper);
//
//        return freeTime();
//    })
//    .then(reading => {
//        console.log(reading);
//
//        return brushTeeth();
//    })
//    .then(brushTeeth => {
//        console.log(brushTeeth);
//
//        return sleep();
//    })
//    .then(sleep => {
//        console.log(sleep);
//    })
//    .catch(e => {
//        console.error(e)
//    })


//async/await
function wakeUp(wokeUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wokeUp) {
                resolve('Прокинутись')
            } else {
                reject('Давай вставай уже');
            }
        }, 3000);
    })

}

function breakfast() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Сніданок');
        }, 1000);
    })

}

function wash() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Прийняти душ');
        }, 2000);
    })

}

function workPlace() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Поїхати в офіс');
        }, 500);
    })

}

function work() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Працюємо!!');
        }, 3000);
    })
}

function dinner() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Обід');
        }, 300);
    })
}

function goHome() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Поїхати додому');
        }, 500)
    })
}

function training() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Тренування');
        }, 1000);
    })
}

function supper() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Вечеря');
        }, 300);
    })
}

function freeTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Прочитати книгу(мінімум 40 сторінок)');
        }, 1000);
    })
}

function brushTeeth() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Почистити зуби');
        }, 200);
    })

}

function sleep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Лягаємо спати');
        }, 100);
    })

}

async function daySchedule() {
    try{
        console.log(await wakeUp(true));
        console.log(await breakfast());
        console.log(await wash());
        console.log(await workPlace());
        console.log(await work());
        console.log(await dinner());
        console.log(await goHome());
        console.log(await training());
        console.log(await supper());
        console.log(await freeTime());
        console.log(await brushTeeth());
        console.log(await sleep());
    }
   catch (e) {
       console.error(e);
   }
}

daySchedule();
