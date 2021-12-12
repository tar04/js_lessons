//1.
//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//https://jsonplaceholder.typicode.com/users
//    кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//    Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
//============resolve===================
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let userDiv = document.createElement('div');
            document.body.appendChild(userDiv);
            for (const key in user) {
                if (typeof user[key] !== "object") {
                    userDiv.innerText += ` ${key} : ${user[key]},\n`;
                } else {
                    for (const key2 in user[key]) {
                        if (key2 !== 'geo') {
                            userDiv.innerText += ` ${key2} : ${user[key][key2]},`;
                        } else {
                            for (const key3 in user[key][key2]) {
                                userDiv.innerText += ` ${key3} : ${user[key][key2][key3]},`;
                            }
                            userDiv.innerText += `\n`;
                        }
                    }

                }
            }
            userDiv.innerText += `\n`;
            let btn1=document.createElement('button');
            btn1.innerText = 'Load posts';

            btn1.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts => {
                        for (const post of posts) {
                            if (user.id === posts.userId) {
                                let postDiv = document.createElement('div');
                                let postId=document.createElement('h2');
                                postId.innerText=`Id : ${post.id}`;
                                let title=document.createElement('h1');
                                title.innerText=post.title;
                                let body=document.createElement('p');
                                body.innerText=post.body;
                                postDiv.append(postId,title,body);
                                userDiv.appendChild(postDiv);
                            }
                        }
                    });
                this.disabled = true;
            }

            userDiv.appendChild(btn1);
            userDiv.innerHTML += `<hr>`;
        }
    });