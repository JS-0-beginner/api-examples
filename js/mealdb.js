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
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=
        `
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>

        `
        searchedMeals.appendChild(div);

    });
}