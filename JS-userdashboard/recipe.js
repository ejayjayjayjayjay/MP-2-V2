const appId = '4d4c6b35';
const appKey = '56891f5bb76d69976db143a3183e6c42';

function searchRecipes() {
  const searchInput = document.getElementById('searchInput');
  const recipeList = document.getElementById('recipeList');
  const searchTerm = searchInput.value.trim();

  if (searchTerm.length > 0) {
    recipeList.innerHTML = 'Loading...';
    const apiUrl = `https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${appKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        recipeList.innerHTML = '';
        const recipes = data.hits;
        recipes.forEach(recipe => {
          const recipeName = recipe.recipe.label;
          const recipeImage = recipe.recipe.image;
          const recipeIngredients = recipe.recipe.ingredientLines;

          const cardDiv = document.createElement('div');
          cardDiv.classList.add('card', 'mb-4');

          const cardImage = document.createElement('img');
          cardImage.classList.add('card-img-top');
          cardImage.src = recipeImage;
          cardImage.alt = recipeName;

          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');

          const cardTitle = document.createElement('h5');
          cardTitle.classList.add('card-title');
          cardTitle.textContent = recipeName;

          const cardIngredients = document.createElement('ul');
          cardIngredients.classList.add('list-group', 'list-group-flush');
          recipeIngredients.forEach(ingredient => {
            const ingredientListItem = document.createElement('li');
            ingredientListItem.classList.add('list-group-item');
            ingredientListItem.textContent = ingredient;
            cardIngredients.appendChild(ingredientListItem);
          });

          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardIngredients);
          cardDiv.appendChild(cardImage);
          cardDiv.appendChild(cardBody);
          recipeList.appendChild(cardDiv);
        });
      })
      .catch(error => {
        recipeList.innerHTML = `An error occurred: ${error.message}`;
      });
  } else {
    recipeList.innerHTML = 'Please enter a search term.';
  }
}