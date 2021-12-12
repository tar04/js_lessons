//1.
//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//https://jsonplaceholder.typicode.com/posts
//    зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//========resolve================
//fetch('https://jsonplaceholder.typicode.com/posts')
//    .then(response => response.json())
//    .then(posts => {
//        for (const post of posts) {
//            let div = document.createElement('div');
//            let userId = document.createElement('h1');
//            userId.innerText = `UserId: ${post.userId}`;
//            let id = document.createElement('h2');
//            id.innerText = `id: ${post.id}`;
//            let title = document.createElement('h2');
//            title.innerText = `title: ${post.title}`;
//            let body = document.createElement('p');
//            body.innerText = `body: ${post.body}`;
//            document.body.appendChild(div);
//            let btn = document.createElement('button');
//            btn.innerText = 'Show comments';
//            div.append(userId, id, title, body, btn);
//            btn.onclick = function () {
//                fetch('https://jsonplaceholder.typicode.com/comments')
//                    .then(response => response.json())
//                    .then(comments => {
//                        for (const comment of comments) {
//                            if (post.id === comment.postId) {
//                                let commentDiv = document.createElement('div');
//                                commentDiv.style.margin = '15px';
//                                commentDiv.innerHTML = `${comment.email} writes: `;
//                                let com = document.createElement('div');
//                                com.innerHTML = comment.body;
//                                com.style.marginTop = '10px';
//                                com.style.border = '2px solid red';
//                                div.append(commentDiv);
//                                commentDiv.appendChild(com);
//                            }
//                        }
//                    });
//                this.disabled = true;
//            }
//        }
//    });