//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]

const URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const {
      strMeal,
      idMeal,
      strArea,
      strInstructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
    } = data.meals[0];

    const ficha = {
      Nome: strMeal,
      ID: idMeal,
      Região: strArea,
      Ingredientes: `${strIngredient1}, ${strIngredient2}, ${strIngredient3}, ${strIngredient4}, ${strIngredient5}, ${strIngredient6}, ${strIngredient7}, ${strIngredient8}, ${strIngredient9}`,
      Instruções: strInstructions,
    };

    console.log(ficha);
  })
  .catch((error) => {
    console.log(error.message);
  });
