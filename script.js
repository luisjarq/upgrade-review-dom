// 1.1
const currentDiv = document.querySelector("div");
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
let newUl1 = document.createElement("ul");
for (const str of countries) {
  let newLi1 = document.createElement("li");
  let liContent = document.createTextNode(str);
  newLi1.appendChild(liContent);
  newUl1.appendChild(newLi1);
}
document.body.insertBefore(newUl1, currentDiv);
// 1.2
let remove2 = document.querySelector(".fn-remove-me");
remove2.parentNode?.removeChild(remove2);

// 1.3
let div3 = document.querySelector('[data-function="printHere"]');
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
let newUl3 = document.createElement("ul");
for (const car of cars) {
  let newLi3 = document.createElement("li");
  let liContent = document.createTextNode(car);
  newLi3.appendChild(liContent);
  newUl3.appendChild(newLi3);
}
div3.appendChild(newUl3);

// 1.4
const countries4 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
let list = document.createElement("ul");
for (const c of countries4) {
  let newDiv = document.createElement("div");
  let newH4 = document.createElement("h4");
  newH4.appendChild(document.createTextNode(c.title));
  let newImg = document.createElement("img");
  newImg.src = c.imgUrl;
  newImg.alt = c.title;
  newDiv.appendChild(newH4);
  newDiv.appendChild(newImg);
  list.appendChild(newDiv);
}
document.body.appendChild(list);

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//elemento de la lista.
function removeLast() {
  let last = list.lastChild;
  last?.parentNode?.removeChild(last);
}
let btn = document.createElement('button');
btn.appendChild(document.createTextNode("Borrar ultimo!"));
btn.addEventListener("click", removeLast);
document.body.appendChild(btn);
/*
1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */
function removeChildren(event) {
  let child = event.target.parentNode;
  child.parentNode?.removeChild(child);
}
let divs = document.querySelectorAll("ul > div");
for (const div6 of divs) {
  let btn6 = document.createElement("button");
  btn6.appendChild(document.createTextNode("Borrame!"));
  btn6.addEventListener("click", removeChildren);
  div6.appendChild(btn6);
}
