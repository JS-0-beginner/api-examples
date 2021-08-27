const loadCountries = () => 
{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countries => displayCountries(countries) )
}

const displayCountries = (countries) =>
{
    const allCountries = document.getElementById('countries');
    /* 
    for(const country of countries)
    {

    } 
    */
    countries.forEach(country => 
        {
            /* 
            const hOne = document.createElement('h3');
            hOne.classList.add('countries')
            hOne.innerText = country.name;
            allCountries.appendChild(hOne);

            const paragraph = document.createElement('p');
            paragraph.classList.add('countries')
            paragraph.innerText = country.capital;
            allCountries.appendChild(paragraph); 
            */

            const div = document.createElement('div');
            div.classList.add('countries');
            div.innerHTML =
            `
            <h2>${country.name}</h2>
            <h3>${country.capital}</h3>
            <button onclick="loadCountryByName('${country.name}')">
            Details
            </button> 
            `
            allCountries.appendChild(div)

        }
        );
}

const loadCountryByName = name =>
{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));

}

const displayCountryDetail = country => 
{
    console.log(country);
}