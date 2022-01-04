let url = new URL(location.href);
let urlId = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${urlId}`)
    .then(response => response.json())
    .then(user => {
        let mainInfo = document.createElement('div');
        mainInfo.style.display = 'flex';
        mainInfo.style.flexDirection = 'column';
        let id = document.createElement('div');
        id.innerText = 'Id: ' + user.id;
        let name = document.createElement('div');
        name.innerText = 'Name: ' + user.name;
        let username = document.createElement('div');
        username.innerText = 'Username: ' + user.username;
        let email = document.createElement('div');
        email.innerText = 'Email: ' + user.email;
        let address = document.createElement('div');
        address.innerText = `Address:\n street:${user.address.street} \n suite: ${user.address.suite} \n city: ${user.address.city} \n zipcode: ${user.address.zipcode} \n geo: lat - ${user.address.geo.lat}, lng - ${user.address.geo.lng}`;
        let phone = document.createElement('div');
        phone.innerText = 'Phone: ' + user.phone;
        let website = document.createElement('div');
        website.innerText = 'Website: ' + user.website;
        let company = document.createElement('div');
        company.innerText = `Company name: ${user.company.name}, catchPhrase: ${user.company.catchPhrase}, bs: ${user.company.bs}`
        let btn = document.createElement('button');
        btn.style.width = '90%';
        btn.style.margin = '10px auto'
        btn.innerText = 'Пости користувача';
        btn.onclick = function () {
            let postsDiv = document.createElement('div');
            mainInfo.append(postsDiv);
            postsDiv.style.display = 'flex';
            postsDiv.style.flexWrap = 'wrap';
            postsDiv.style.columnGap = '10px';
            postsDiv.style.justifyContent = 'space-around';
            fetch(`https://jsonplaceholder.typicode.com/users/${urlId}/posts`)
                .then(response => response.json())
                .then(posts => {
                    for (const postElement of posts) {
                        let post = document.createElement('div');
                        post.innerText = postElement.title;
                        post.style.width = '19%';
                        post.style.height = '100px';
                        post.style.margin = '10px 0';
                        post.style.border = '1px solid red';
                        post.style.background = '#fc6f03'
                        post.style.boxSizing = 'border-box';
                        post.style.display = 'flex';
                        post.style.flexDirection = 'column';
                        post.style.justifyContent = 'space-between';
                        let postBtn = document.createElement('button');
                        postBtn.innerText = 'Інформація про пост';
                        postBtn.onclick = function () {
                            location.href = 'post-details.html?userid=' + urlId + '&postid='+postElement.id;
                        }
                        postsDiv.append(post);
                        post.append(postBtn)
                    }
                });
            this.disabled = true;
        }
        mainInfo.append(id, name, username, email, address, phone, website, company, btn);
        document.body.append(mainInfo);
    })
