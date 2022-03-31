//3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados.

const URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const meals = data.meals;
    const result = meals.slice(0, 10);
    console.log(result);
  });
