const searchFood = async () =>
{
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    searchField.value = '';

    //Unknown Result Handling 
    if(searchFieldText == '')
    {
      searchField.value = "Please type a dish name, cause you don't want to see all the dishes."
    } 
    
    else
    {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`;
    
    //Regular Basic JS Form not ES6
    const res = await fetch(url);
    const data = await res.json();
    displaySearchedMeal(data.meals);

    /* 
      fetch(url)
    .then(response => response.json())
  //.then(data => console.log(data))
    .then(data => displaySearchedMeal(data.meals))
    */   

    }
    

}

const displaySearchedMeal = meals =>
{
    const searchedMeals = document.getElementById('searched-meals');

    //Removing Previous Search -(It will work but not Reccomended)
    // searchedMeals.innerHTML = '';
    searchedMeals.textContent = '';

    //Unknown Result Handling
    /* 
    if()
    {

    }
     */
   
    meals.forEach( meal => 
    {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=
        `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
        <img style="cursor: pointer;" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 style="cursor: pointer;" class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
        </div>
        </div>

        `
        searchedMeals.appendChild(div);

    });
}

//Async & Await
const loadMealDetail = async mealID =>
{
    // console.log(mealID);

    const url = 
    `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}
    ` ;

    //Regular Basic JS Form not ES6
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
    /*
    fetch(url)
    .then(response => response.json())
    .then(data => displayMealDetail(data.meals[0])) 
    */
}

const displayMealDetail = meal =>
{
    // console.log(meal);
    const singleMealDetails = document.getElementById('single-mealDetails');

    //Removing Previous Search -(It will work but not Reccomended)
    // singleMealDetails.innerHTML = '';
    singleMealDetails.textContent = '';

    const divDetail = document.createElement('div');
    divDetail.classList.add('card');
    divDetail.innerHTML =
    
    `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">

    <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
          <a href="${meal.strYoutube}" class="btn btn-danger">Watch</a>
    </div>

    `;
    singleMealDetails.appendChild(divDetail);
}