console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("form successfully submitted");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

function giveCompliment(evt) {
  evt.preventDefault();

  alert("You are so smart");
}

let rubberDucky = document.querySelector("#rubber-ducky");

rubberDucky.addEventListener("mouseover", giveCompliment);
