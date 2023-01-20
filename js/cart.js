let addCart = document.querySelector(".cart");

export let cartList = [];

export function cart(produto) {
  cartList.push(produto);
  renderCart(cartList);
  totalValue();
}

function renderCart(array) {
  addCart.innerHTML = "";

  array.forEach((element) => {
    let product = createCart(element);
    addCart.appendChild(product);
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

    let filteredCart = cartList.filter((element) => element.id !== product.id);

    cartList = filteredCart;

    totalValue();
  });

  return tagLi;
}

function totalValue() {
  let tagTotalValue = document.querySelector(".totalValue");
  let initial = 0;
  let values = cartList.map((element) => element.value);

  let sum = values.reduce((acc, value) => acc + value, initial);

  return (tagTotalValue.innerHTML = `Valor Total: R$${sum.toFixed(2)}`);
}
