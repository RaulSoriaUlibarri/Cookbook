export async function fetchCategories() {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`Error fetching categories, info: ${response.statusText}`);
  const data = await response.json();
  console.log(data, "fetCategories");
  return data.categories;
}

export async function fetchCategoriesList() {
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`Error fetching categories, info: ${response.statusText}`);
  const data = await response.json();
  console.log(data.meals, "fetchCategoriesList");
  return data.meals;
}
export async function fetchCountriesList() {
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`Error fetching categories, info: ${response.statusText}`);
  const data = await response.json();
  console.log(data.meals.slice(0, 20), "fetchCategoriesList");
  const countries = data.meals;
  return countries.slice(0, 20);
}

export async function fetchIngredientsList() {
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`Error fetching categories, info: ${response.statusText}`);
  const data = await response.json();
  console.log(data.meals.slice(0, 20), "fetchIngredientsList");
  const ingredients = data.meals;
  return ingredients.slice(0, 20);
}

export async function fetchCategoryMeals(categorySelected: String | null) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorySelected}`;
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`Error fetching meals, info: ${response.statusText}`);
  const data = await response.json();
  console.log(data, "fetchCategoryMeals");
  return data.meals;
}

export async function fetchMeal(mealSelected: String) {
  const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${mealSelected}`;
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`Error fetching meal, info: ${response.statusText}`);
  const data = await response.json();
  console.log(data, "fetchMeal");
  return data.meals;
}
