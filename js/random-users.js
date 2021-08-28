const users = () =>
{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => allUsers(data))
}

const allUsers = (data) =>
{
    const fiveUsers = data.results;
    const divUsers = document.getElementById('users');
    for(const user of fiveUsers)
    {
        // console.log(user.email);
        const div = document.createElement('div');
        // p.innerText = user.name;
        div.classList.add('users')
        div.innerHTML = `

        <div>

        <img style="width: 280px; height: 280px;" src="${user.picture.large}" >
                
        <p>Name: ${user.name.title} ${user.name.first} ${user.name.last}</p>
        <p>Email: ${user.email}</p>
        <p>Gender: ${user.gender}</p>
        <p>Location: ${user.location.city}</p>
        
        </div>
        
        `;
        divUsers.appendChild(div);
    }
}

