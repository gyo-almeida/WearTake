let catalogo = document.querySelector(".lista_vitrine")
let adicionarNoCarrinho = document.querySelector(".carrinho")
let carrinhoVazio = []
let soma = 0

function listaProdutos(lista, referenciaHTML) {
    for (let i = 0; i < lista.length; i++) {
        let produto = lista[i]

        let template = criarTemplate(produto)

        referenciaHTML.appendChild(template)
    }
}

listaProdutos(data, catalogo)

function criarTemplate(produto) {
    let ID = produto.id
    let imagem = produto.image
    let item = produto.nameItem
    let descricao = produto.description
    let preco = produto.value
    let categoria = produto.tag
    let botao = produto.addCart

    let tagLi = document.createElement("li")
    let tagImg = document.createElement("img")
    let tagP = document.createElement("p")
    let tagH2 = document.createElement("h2")
    let tagDescricao = document.createElement("p")
    let tagPreco = document.createElement("p")
    let tagButton = document.createElement("button")

    tagP.classList.add("categoria")
    tagH2.classList.add("titulo")
    tagDescricao.classList.add("descricao")
    tagPreco.classList.add("preco")
    tagButton.classList.add("botao_vitrine")

    tagImg.src = imagem
    tagImg.alt = `imagem do produto`
    tagP.innerHTML = categoria
    tagH2.innerHTML = item
    tagDescricao.innerHTML = descricao
    tagPreco.innerHTML = `R$${preco.toFixed(2)}`
    tagButton.innerHTML = botao
    tagButton.id = ID

    tagLi.append(tagImg, tagP, tagH2, tagDescricao, tagPreco, tagButton)


    tagButton.addEventListener('click', function () {
        carrinho(produto)
    })

    return tagLi
}


function carrinho(produto) {
    carrinhoVazio.push(produto)
    renderizarCarrinho()
    
}

function renderizarCarrinho() {
    adicionarNoCarrinho.innerHTML = ""
    for (let i = 0; i < carrinhoVazio.length; i++) {

        let produtoCarrinho = carrinhoVazio[i]
        let carrinho = criarCarrinho(produtoCarrinho, i)
        adicionarNoCarrinho.appendChild(carrinho)
    }   
}

function criarCarrinho(produtoCarrinho, indice) {
    let tagLi = document.createElement("li")
    let valorTotal = document.createElement("p")
    let tagP = document.createElement("p")
    let tagPreco = document.createElement("p")
    let tagButton = document.createElement("button")

    tagP.innerHTML = produtoCarrinho.nameItem
    tagPreco.innerHTML = `R$${produtoCarrinho.value.toFixed(2)}`
    tagButton.innerHTML = "remover"


    tagLi.append(tagP, tagPreco, tagButton)

    tagButton.addEventListener('click', function () {
        removerProdutoDoCarrinho(tagLi, indice)
    })

    return tagLi
}
    


function removerProdutoDoCarrinho(tagLi, indice) {
    tagLi.remove()
    carrinhoVazio.splice(indice, 1)
    renderizarCarrinho()
}

// function somadora(){
//     for(let i =0; i<carrinhoVazio.length; i++){
//        soma += carrinhoVazio[i].value
//     }
// }

// valorTotal.innerHTML = `Valor Total: ${somadora()}`
// valorTotal.appendChild(soma)

// //console.log(somadora())
