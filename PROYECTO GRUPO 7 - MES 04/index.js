const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

function registrar(){
    console.log("accionastes con un click")
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;

    console.log(email);
    console.log(contrasena);

}
