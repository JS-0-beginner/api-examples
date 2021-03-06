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

            <button
            onclick="loadCountryDetail_ByName('${countryName.name}')">

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

    //check nested oject
    // .then(countryDetail => console.log(countryDetail));
    
     //check nested oject
    // .then(countryDetail => displayCountryDetail(countryDetail));

    //check nested oject [0]
    .then(countryDetail => displayCountryDetail(countryDetail[0])); 
    

}

const displayCountryDetail = countryDetail => 
{
    // console.log(countryDetail);
    const everyCountryDetails = document.getElementById('country-details')
    const divDetail = document.createElement('div');
    // divDetail.classList.add('flags');
    divDetail.innerHTML =
    `
    <div style="display: inline-flex; margin: 20px;">

    <div>
        <img style="height: 250px; width: 400px;" src="${countryDetail.flag}">
    </div>

    <div style="margin-left: 60px;"> 

    <h2>Name:       ${countryDetail.name}         </h2>
    <h2>Population: _ ${countryDetail.population} </h2>
    <h2>Demonym:    _ ${countryDetail.demonym}    </h2>
    <h2>Region:     _ ${countryDetail.region}     </h2>
    </div>

    </div>
    
    `
    everyCountryDetails.appendChild(divDetail);
}

