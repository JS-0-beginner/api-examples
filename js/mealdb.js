const searchFood = () =>
{
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`;
    
    fetch(url)
    .then(response => response.json())
//   .then(data => console.log(data))
  .then(data => displaySearchedMeal(data.meals))

}

const displaySearchedMeal = meals =>
{
    const searchedMeals = document.getElementById('searched-meals');

    meals.forEach( meal => 
    {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=
        `
        <div onclick = "loadMealDetail(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
        </div>
        </div>

        `
        searchedMeals.appendChild(div);

    });
}

const loadMealDetail = mealID =>
{
    // console.log(mealID);
    const url = 
    `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}
    ` ;
    fetch(url)
  .then(response => response.json())
  .then(data => console.log(data.meals[0]))
}

const displayMealDetail = meal =>
{
    console.log(meal);
}