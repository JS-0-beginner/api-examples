const buddies = () =>
{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => bestBuddies(data))
}

const bestBuddies = (data) =>
{
    const fiveBuddies = data.results;
    const div = document.getElementById('buddies');
    for(const buddy of fiveBuddies)
    {
        // console.log(buddy.email);
        const p = document.createElement('p');
        // p.innerText = buddy.name;
        p.classList.add('p')
        p.innerText = `
        Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email}
        Gender: ${buddy.gender}
        Location: ${buddy.location.city}
        `;
        div.appendChild(p);
    }
}

