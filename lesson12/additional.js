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
            let btn1 = document.createElement('button');
            btn1.innerText = 'Load posts';
            btn1.style.margin = '10px 0';
            userDiv.append(btn1);
            userDiv.style.borderBottom = '2px solid red';
            btn1.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts => {
                        for (const post of posts) {
                            if (user.id === post.userId) {
                                let postDiv = document.createElement('div');
                                postDiv.setAttribute('class', 'post');
                                let postId = document.createElement('h6');
                                postId.innerText = `Id : ${post.id}`;
                                let title = document.createElement('h3');
                                title.innerText = post.title;
                                let body = document.createElement('p');
                                body.innerText = post.body;
                                let btn2 = document.createElement('button');
                                btn2.innerText = 'Load comments';
                                btn2.style.marginTop = '8px';
                                btn2.onclick = function () {
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(response => response.json())
                                        .then(comments => {
                                            for (const comment of comments) {
                                                if (post.id === comment.postId) {
                                                    let commentDiv = document.createElement('div');
                                                    commentDiv.setAttribute('class', 'comment');
                                                    let commId = document.createElement('h4');
                                                    commId.innerText = `Comment id: ${comment.id}`;
                                                    let commName = document.createElement('h3');
                                                    commName.innerText = `Name: ${comment.name}`;
                                                    let commEmail = document.createElement('h5');
                                                    commEmail.innerText = `Email: ${comment.email}`;
                                                    let commBody = document.createElement('p');
                                                    commBody.innerHTML = comment.body;
                                                    commentDiv.append(commId, commName, commEmail, commBody);
                                                    postDiv.appendChild(commentDiv);
                                                }
                                            }
                                        });
                                    this.disabled = true;
                                }
                                postDiv.append(postId, title, body, btn2);
                                userDiv.appendChild(postDiv);
                            }
                        }
                    });
                this.disabled = true;
            }
        }
    });