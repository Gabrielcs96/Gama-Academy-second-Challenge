const storagedCart= localStorage.getItem("@ecommerce/products")
let cartContent = JSON.parse(storagedCart)


let cartwindow = document.getElementById('cartcontent') 

function renderCart(){
console.log(cartContent)
        cartwindow.innerHTML=''
        cartContent.map(product =>{
            const newcontent = document.createElement("div");
            newcontent.innerHTML = `${product.name} Valor: ${product.price}  `
            cartwindow.appendChild(newcontent); //adiciona o nó de texto à nova div criada       
        })
    }
 
renderCart()

function finishCart(){
localStorage.removeItem('@ecommerce/products');
setTimeout(() =>{ 
    alert('Parabéns, sua compra foi concluída'),
    window.location.href = 'index.html'
}, 1000)
}