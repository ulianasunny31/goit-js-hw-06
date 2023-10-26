const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItem = document.createElement("li");
const ingredientsHtml = ingredients.map(
  (ingredient) => `<li class="item">${ingredient}</li>`
);
const list = document.querySelector("#ingredients");
list.insertAdjacentHTML("afterbegin", ingredientsHtml.join(""));
