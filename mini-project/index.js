fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(users=>{
    let mainDiv = document.createElement('div');
    document.body.appendChild(mainDiv);
    mainDiv.setAttribute('class',"users");
    mainDiv.style.display='flex';
    mainDiv.style.flexWrap='wrap';
    for (const user of users) {
        let item = document.createElement('div');
        item.style.columnGap='10px';
        item.style.display='flex';
        item.style.flexDirection='column';
        item.style.alignItems='center';
        item.style.justifyContent='center';
        item.style.border='1px solid red'
        item.style.width="50%";
        item.style.boxSizing='border-box';
        item.style.background='#fca99a';
        item.style.padding='10px';
        item.setAttribute('class','user');
        let info=document.createElement('h2');
        info.innerText=`${user.id} ${user.name}`;
        let fullInfo=document.createElement('a');
        fullInfo.href='user-details.html?id='+user.id;
        fullInfo.innerText='Показати всю інформацію про користувача';
        item.append(info,fullInfo)
        mainDiv.appendChild(item);
    }
})