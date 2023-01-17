"use strict";

// Targeting the elements
const cardDesc = document.querySelector(".card--desc");
const cardBtn = document.querySelector(".card--btn");
console.log(cardBtn);

// Function for removing a attribute
const removeAttr = () => {
  return cardDesc.removeAttribute("display");
};

// Adding event listener to the button
cardBtn.addEventListener("click", () => removeAttr());
