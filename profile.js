console.log("hello world");

let colorButton = document.querySelector("#color");
let placeButton = document.querySelector("#place");
let foodButton = document.querySelector("#food");

function favoriteColor(evt) {
  evt.preventDefault();
  alert("Sage");
}

function favoritePlace(evt) {
  evt.preventDefault();
  alert("Virginia");
}

// in place of favorite ritual is favorite food as I couldn't think of a ritual
function favoriteFood(evt) {
  evt.preventDefault();
  alert("Tamales");
}

colorButton.addEventListener("click", favoriteColor);
placeButton.addEventListener("click", favoritePlace);
foodButton.addEventListener("click", favoriteFood);
