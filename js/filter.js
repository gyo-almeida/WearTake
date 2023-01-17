import data from "./database.js";
import { renderTemplate } from "./template.js";
let list = document.querySelector(".showcase-list");
let todos = document.querySelector(".Todos");
let camisetas = document.querySelector(".Camisetas");
let calçados = document.querySelector(".Calçados");
let acessorios = document.querySelector(".Acessórios");

function filter() {
  todos.addEventListener("click", () => {
    list.innerHTML = "";
    renderTemplate(data, list);
  });

  camisetas.addEventListener("click", () => {
    let tag = data.filter((element) => {
      let name = element.tag;

      return name.toString() === camisetas.outerText;
    });

    list.innerHTML = "";
    renderTemplate(tag, list);
  });

  calçados.addEventListener("click", () => {
    let tag = data.filter((element) => {
      let name = element.tag;

      return name.toString() === calçados.outerText;
    });

    list.innerHTML = "";
    renderTemplate(tag, list);
  });

  acessorios.addEventListener("click", () => {
    let tag = data.filter((element) => {
      let name = element.tag;

      return name.toString() === acessorios.outerText;
    });

    list.innerHTML = "";
    renderTemplate(tag, list);
  });
}

filter();
