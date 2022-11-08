let btn = document.getElementById("btnClick")
let image = document.getElementById("image")
btn.addEventListener("click", () => {
  fetch("https://pokeapi.co/api/v2/pokemon/2")  
  .then((response) => response.json())
  .then((data) => console.log(data));
})
// fetch("https://pokeapi.co/api/v2/pokemon/")  
// .then((response) => response.json())
// .then((data) => console.log(data));