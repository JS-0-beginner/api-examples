const searchFood = async () => 
{
  const searchField = document.getElementById("search-field");
  const searchFieldText = searchField.value;
  searchField.value = '';

  //Unknown Result Handling
  if (searchFieldText == '') {
    // alert("Please type a dish name, cause you don't want to see all the dishes.");
    searchField.value = "Please type a dish name, cause you don't want to see all the dishes.";
  } 
   
  else 
  {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`;

    //Regular Basic JS Form not ES6
    const res = await fetch(url);
    const data = await res.json();
    displaySearchedMeal(data.meals);
   

  }
  
};

////////////////////////////////Operation
const displaySearchedMeal =( meals => 
{
    console.log(meals); 
    const searchedMeals = document.getElementById("searched-meals");
    searchedMeals.textContent = '';
    const noResult = document.getElementById('no-result');
    noResult.textContent = '';

   if(meals == null)
   {
        //alert('No Result Found');

        
        const noResultDisplay = document.createElement('h1');
        noResultDisplay.classList.add('no-result');
        noResultDisplay.innerHTML =
        `<h1 style="font-size: 100px;" >No Result Found</h1>`;
        noResult.appendChild(noResultDisplay);
   }
      
  else
  {
    meals.forEach( meal =>  
   
      {    
        
        console.log(meal.strTags);
       
          const div = document.createElement("div");
          div.classList.add("col");
          div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img style="cursor: pointer;" src="${
              meal.strMealThumb
            }" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 style="cursor: pointer;" class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
            </div>
            </div>
    
            `;
          searchedMeals.appendChild(div); 
        
      });
  }
  
});

////////////////////////////////Operation

//Async & Await
const loadMealDetail = async (mealID) => {
  // console.log(mealID);

  const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}
    `;

  //Regular Basic JS Form not ES6
  const res = await fetch(url);
  const data = await res.json();
  displayMealDetail(data.meals[0]);
};

const displayMealDetail = (meal) => {
  // console.log(meal);
  const singleMealDetails = document.getElementById("single-mealDetails");
  singleMealDetails.textContent = "";

  const divDetail = document.createElement("div");
  divDetail.classList.add("card");
  divDetail.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">

    <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
          <a href="${meal.strYoutube}" class="btn btn-danger">Watch</a>
    </div>

    `;
  singleMealDetails.appendChild(divDetail);
};
