let price = document.querySelector(".purchase-price")
let payment = document.querySelector(".customer-payment")
let remainingCash = document.querySelector(".remaining-cash")
let buttonSubmit = document.querySelector(".button-submit")
let error = document.querySelector(".error")
let reset = document.querySelector(".reset")

buttonSubmit.addEventListener("click",()=>{
 
    let vuelto = payment.value - price.value;

         if(price.value < payment.value){
            remainingCash.innerHTML = vuelto  
         } else if(price.value === payment.value) {
             error.innerHTML = "El pago está justo" 
         } else if(price.value > payment.value) {
             error.innerHTML = "El pago del cliente es menor al precio de la compra"
         } else {
             error.innerHTML = "Ha ocurrido un error" 
         }
 })


reset.addEventListener("click",()=>{
    window.location.reload();
})

