const loadCountries = () => 
{
     fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countryNames => displayCountryNames(countryNames) )
}

const displayCountryNames = (countryNames) =>
{
    const allCountries = document.getElementById('countries');

    //With Loop
    /* 
    for(const countryName of countryNames)
    {

    } 
    */

    //With Arrow Function
    countryNames.forEach(countryName => 
        {
            const div = document.createElement('div');
            div.classList.add('countryName-style');
            div.innerHTML =
            `
            <h2>${countryName.name}</h2>
            <h3>${countryName.capital}</h3>
            <button onclick="loadCountryDetail_ByName('${countryName.name}')">
            <h3>Details</h3> 
            </button> 
            `
            allCountries.appendChild(div)

        }
        );
}

const loadCountryDetail_ByName = name =>
{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())

    //array without function
    // .then(countryDetail => console.log(countryDetail));
    
     //array with a function
    // .then(countryDetail => displayCountryDetail(countryDetail));

    //in array with a function
    .then(countryDetail => displayCountryDetail(countryDetail[0])); 
    

}

const displayCountryDetail = countryDetail => 
{
    // console.log(countryDetail);
    const everyCountryDetails = document.getElementById('country-details')
    const divDetail = document.createElement('div');
    divDetail.innerHTML =
    `
    <img src="${countryDetail.flag}">

    
    <h2>Name: ${countryDetail.name}</h2>
    <h3>Population: ${countryDetail.population}</h3>
    <h3>Demonym: ${countryDetail.demonym}</h3>
    <h3>Region: ${countryDetail.region}</h3>

    `
    everyCountryDetails.appendChild(divDetail);
}

