//1.
//Отримати відповідь з цього ресурсу , та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
//Для кожного елементу свій блок div.post
//Всі характеристики повинні мати свої блоки всередені div.post
//https://jsonplaceholder.typicode.com/posts
//=========resolve==============
//fetch('https://jsonplaceholder.typicode.com/posts')
//    .then(response => response.json())
//    .then(posts => {
//        for (const post of posts) {
//            let div = document.createElement('div');
//            div.setAttribute('class', 'post');
//            div.style.width = '19%';
//            document.body.style.display = 'flex';
//            document.body.style.flexWrap = 'wrap';
//            document.body.style.columnGap = '15px';
//            let h1 = document.createElement('h1');
//            h1.innerText = `userId : ${post.userId}`;
//            let h2 = document.createElement('h2');
//            h2.innerText = `Id : ${post.id}`;
//            let h3 = document.createElement('h3');
//            h3.innerText = `title : ${post.title}`;
//            let p = document.createElement('p');
//            p.innerText = `body : ${post.body}`;
//            document.body.appendChild(div);
//            div.append(h1, h2, h3, p);
//        }
//    });

//    2.
//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//    Для кожного елементу свій блок div.comment
//Всі характеристики повинні мати свої блоки всередені div.comment
//https://jsonplaceholder.typicode.com/comments
//===========resolve==================
//fetch('https://jsonplaceholder.typicode.com/comments')
//    .then(response => response.json())
//    .then(comments => {
//        for (const comment of comments) {
//            let div = document.createElement('div');
//            div.setAttribute('class', 'comment');
//            let postId = document.createElement('h1');
//            postId.innerText = `postId : ${comment.postId}`;
//            let id = document.createElement('h2');
//            id.innerText = `id : ${comment.id}`;
//            let name = document.createElement('h3');
//            name.innerText = `name : ${comment.name}`;
//            let email = document.createElement('h3');
//            email.innerText = `email : ${comment.email}`;
//            let body = document.createElement('p');
//            body.innerHTML = `<strong>body</strong> : ${comment.body}`;
//            document.body.appendChild(div);
//            div.append(postId, id, name, email, body);
//        }
//    });