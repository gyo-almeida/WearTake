import data from "./database.js";
import { renderTemplate } from "./template.js";

let list = document.querySelector(".showcase-list");
let form = document.querySelector(".search-form");
let input = document.querySelector(".search");

function search() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  input.addEventListener("keyup", () => {
    list.innerHTML = "";

    let productByName = data.filter((product) =>
      product.nameItem.toLowerCase().includes(input.value.trim().toLowerCase())
    );

    renderTemplate(productByName, list);
  });
}

search();
