// Question 3:
// Imagine you are going out to do some grocery shopping.So you have an array called shoppingList with all the products you want to buy.
// Now that you are inside of the shop, you have a basket with all the products from your list, but you want toadd a few more.Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add somenew products into it.

shoppingList = ["Apple", "Bada Apple", "Chotta Apple", "Dhaansu Apple"];
shoppingList.push("Elephant Jaisa Apple");
console.log("shoppingList:", shoppingList);

shoppingBasket = [
  "Ratlami Sev",
  "Ujjaini Sev",
  "Laung Sev",
  ...shoppingList,
  "Hing Sev",
  "Lahsun Sev",
];
shoppingBasket.push("Dal Sev");

console.log("shoppingBasket:", shoppingBasket);
