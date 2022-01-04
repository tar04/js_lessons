let url = new URL(location.href);
let postId = url.searchParams.get('postid');
let userId = url.searchParams.get('userid');


let mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts?id=${postId}`)
    .then(response => response.json())
    .then(post => {
        let id = document.createElement('div');
        id.innerText = 'Post id: ' + post[0].id;
        let title = document.createElement('h5');
        title.innerText = 'Title: ' + post[0].title;
        let body = document.createElement('div');
        body.innerText = post[0].body;
        let commentsDiv = document.createElement('div');
        let header = document.createElement('h3');
        header.innerText = 'Comments';
        let mainBlock = document.createElement('div');
        mainBlock.style.display='flex';
        mainBlock.style.flexWrap='wrap';
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                for (const commElement of comments) {
                    let comm = document.createElement('div');
                    comm.style.width='25%';
                    comm.style.boxSizing='border-box';
                    comm.style.border='1px solid green';
                    comm.style.padding='5px';
                    comm.style.background='#a6ff6b';
                    comm.innerText =`${commElement.name} (${commElement.email}) writes \n \n ${commElement.body}`;
                    mainBlock.append(comm);
                }
            })
        commentsDiv.append(header, mainBlock);
        mainDiv.append(id, title, body, commentsDiv);
    })