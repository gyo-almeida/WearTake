import data from "./database.js";
import { cart } from "./cart.js";
let list = document.querySelector(".showcase-list");

export function renderTemplate(data, showcase) {
  data.forEach((element) => {
    let template = createTemplate(element);
    showcase.appendChild(template);
  });
}

function createTemplate(product) {
  let ID = product.id;
  let image = product.image;
  let item = product.nameItem;
  let desc = product.description;
  let value = product.value;
  let category = product.tag;
  let button = product.addCart;

  let tagLi = document.createElement("li");
  let tagImg = document.createElement("img");
  let tagP = document.createElement("p");
  let tagH2 = document.createElement("h2");
  let tagDesc = document.createElement("p");
  let tagValue = document.createElement("p");
  let tagButton = document.createElement("button");

  tagP.classList.add("category");
  tagH2.classList.add("title");
  tagDesc.classList.add("description");
  tagValue.classList.add("value");
  tagButton.classList.add("add-cart");

  tagImg.src = image;
  tagImg.alt = `imagem do produto`;
  tagP.innerHTML = category;
  tagH2.innerHTML = item;
  tagDesc.innerHTML = desc;
  tagValue.innerHTML = `R$${value.toFixed(2)}`;
  tagButton.innerHTML = button;
  tagButton.id = ID;

  tagLi.append(tagImg, tagP, tagH2, tagDesc, tagValue, tagButton);

  tagButton.addEventListener("click", () => {
    cart(product);
  });

  return tagLi;
}

renderTemplate(data, list);
