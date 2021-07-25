let arrProducts =[]

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let bornedate = document.getElementById("born").value;
  let rg = document.getElementById("rg").value;

  let data = {
    nome,
    email,
    bornedate,
    rg,
  };
  let convertData = JSON.stringify(data);

  localStorage.setItem("ClientData", convertData);

  let content = document.getElementById("content");

  let carregando = `<p>carregando...</p>`;

  content.innerHTML = carregando;

  setTimeout(() => {
    (content.innerHTML = ""),
      window.alert("Cadastro concluído ! Pode seguir com as suas compras !  "),
      (window.location.href = "http://127.0.0.1:5500/index.html");
  }, 1000);
});

function addToCart(a){
console.log("item adicionado " + a)
const itensCart = document.getElementsByClassName("card");
const divProduct = itensCart.item(a)

console.log(divProduct);
 
const newProduct = { 
  name: divProduct.querySelector('.product-name').innerHTML,
  price: divProduct.querySelector('.product-price').innerHTML,
  description: divProduct.querySelector('.description').innerHTML
}

arrProducts.push(newProduct)
console.log(arrProducts)
let convertArray = JSON.stringify(arrProducts)
localStorage.setItem("@ecommerce/products", convertArray);

}


function goToCart() {
  window.location.href = "http://127.0.0.1:5500/cart.html";

}

