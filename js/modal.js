let cartListModal = [];

document.querySelector(".menu-mobile").addEventListener("click", () => {
  let background = document.querySelector(".background");

  background.style.display = "block";
});

export function createModal() {
  let body = document.querySelector("body");
  let background = document.createElement("div");
  let container = document.createElement("div");
  let header = document.createElement("div");
  let close = document.createElement("span");
  let title = document.createElement("h3");
  let totalValue = document.createElement("p");
  let cart = document.createElement("ul");

  background.classList.add("background");
  container.classList.add("modal-container");
  header.classList.add("modal-header");
  totalValue.classList.add("modal-value");
  cart.classList.add("modal-cart");

  background.style.display = "none";

  close.innerText = "X";
  title.innerText = "Carrinho de compras";
  totalValue.innerText = "Valor Total: ";

  close.addEventListener("click", closeModal);

  body.append(background);
  background.append(container);
  container.append(header, totalValue, cart);
  header.append(title, close);
}

createModal();

function closeModal() {
  let background = document.querySelector(".background");
  background.style.display = "none";
}

export function cartModal(produto) {
  cartListModal.push(produto);
  renderCart(cartListModal);
  totalValue();
}

export function counter() {
  let span = document.querySelector(".counter");

  span.innerText = cartListModal.length;
}

counter();

function renderCart(array) {
  let addModalCart = document.querySelector(".modal-cart");
  addModalCart.innerHTML = "";

  array.forEach((element) => {
    let product = createCart(element);
    addModalCart.appendChild(product);
  });
}

function createCart(product) {
  let tagLi = document.createElement("li");
  let tagImg = document.createElement("img");
  let tagDiv = document.createElement("div");
  let tagP = document.createElement("p");
  let tagPreco = document.createElement("p");
  let tagButton = document.createElement("button");

  tagButton.classList.add("remove");
  tagDiv.classList.add("desc");
  tagImg.classList.add("img-cart");

  tagLi.id = product.id;
  tagImg.src = product.image;
  tagP.innerHTML = product.nameItem;
  tagPreco.innerHTML = `R$${product.value.toFixed(2)}`;
  tagButton.innerHTML = "remover";

  tagLi.append(tagImg, tagDiv, tagButton);
  tagDiv.append(tagP, tagPreco);

  tagButton.addEventListener("click", () => {
    tagLi.remove();

    let filteredCart = cartListModal.filter(
      (element) => element.id !== product.id
    );

    cartListModal = filteredCart;
    counter();
    totalValue();
  });

  return tagLi;
}

function totalValue() {
  let tagTotalValue = document.querySelector(".modal-value");

  let initial = 0;
  let values = cartListModal.map((element) => element.value);

  let sum = values.reduce((acc, value) => acc + value, initial);

  tagTotalValue.innerHTML = `Valor Total: R$${sum.toFixed(2)}`;
}

totalValue();
