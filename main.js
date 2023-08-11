let price = document.querySelector(".purchase-price")
let payment = document.querySelector(".customer-payment")
let remainingCash = document.querySelector(".remaining-cash")
let buttonSubmit = document.querySelector(".button-submit")
let error = document.querySelector(".error")
let reset = document.querySelector(".reset")



function permite(elEvento, permitidos) {
    // Variables que definen los caracteres permitidos
    var numeros = "0123456789";
    var caracteres = " aábcdeéfghiíjklmnñoópqrstuvwxyzAÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUVWXYZ";
    var numeros_caracteres = numeros + caracteres;
    var teclas_especiales = [8, 37, 39, 46];
    // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha
   
   
    // Seleccionar los caracteres a partir del parámetro de la función
    switch(permitidos) {
      case 'num':
        permitidos = numeros;
        break;
      case 'car':
        permitidos = caracteres;
        break;
      case 'num_car':
        permitidos = numeros_caracteres;
        break;
    }
   
    // Obtener la tecla pulsada 
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    var caracter = String.fromCharCode(codigoCaracter);
   
    // Comprobar si la tecla pulsada es alguna de las teclas especiales
    // (teclas de borrado y flechas horizontales)
    var tecla_especial = false;
    for(var i in teclas_especiales) {
      if(codigoCaracter == teclas_especiales[i]) {
        tecla_especial = true;
        break;
      }
    }
   
    // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
    // o si es una tecla especial
    return permitidos.indexOf(caracter) != -1 || tecla_especial;
  }




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

