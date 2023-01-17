let addCart = document.querySelector(".cart");
let cartList = [];

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
  let valorTotal = document.createElement("p");
  let tagP = document.createElement("p");
  let tagPreco = document.createElement("p");
  let tagButton = document.createElement("button");

  tagLi.id = product.id;
  tagP.innerHTML = product.nameItem;
  tagPreco.innerHTML = `R$${product.value.toFixed(2)}`;
  tagButton.innerHTML = "remover";

  tagLi.append(tagP, tagPreco, tagButton);

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

  tagTotalValue.innerHTML = `Valor Total: R$${sum.toFixed(2)}`;
}
