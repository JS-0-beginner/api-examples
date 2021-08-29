////////////////////////////////Operation
const displaySearchedMeal = meals =>
{
    const searchedMeals = document.getElementById('searched-meals');

    //Removing Previous Search -(It will work but not Reccomended)
    // searchedMeals.innerHTML = '';
    searchedMeals.textContent = '';

     
    //Unknown Result Handling
     
    //gorga

    /* if(meal != meal.strMeal)
    {
        const noResult = document.getElementById('no-result');
        const noResultDisplay = document.createElement('h1');
        noResultDisplay.classList.add('no-result');
        noResultDisplay.innerHTML =
        `<h1>No Result Found</h1>`;
        noResult.appendChild(noResultDisplay);
    }  */
    
    
   
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
////////////////////////////////Operation


