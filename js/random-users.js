const users = () =>
{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => allUsers(data))
}

const allUsers = (data) =>
{
    const fiveUsers = data.results;
    const div = document.getElementById('users');
    for(const user of fiveUsers)
    {
        // console.log(user.email);
        const p = document.createElement('p');
        // p.innerText = user.name;
        p.classList.add('p')
        p.innerText = `
        Name: ${user.name.title} ${user.name.first} ${user.name.last}
        Email: ${user.email}
        Gender: ${user.gender}
        Location: ${user.location.city}
        `;
        div.appendChild(p);
    }
}

