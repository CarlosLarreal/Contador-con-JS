let precio = 400000;


let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let cantidadHtml = document.querySelector(".cantidad");
let total = document.querySelector(".valor-total");
let contador = 0;

document.querySelector(".increase").addEventListener("click", function() {
    contador++;
    cantidadHtml.innerHTML = contador;
    total.innerHTML = precio * Number (cantidadHtml.innerHTML);
    let bottunDecrease = document.querySelector (".decrease"); 
    bottunDecrease.disabled = false;
});

document.querySelector(".decrease").addEventListener("click", function() {
    contador--;
    cantidadHtml.innerHTML = contador;
    total.innerHTML = precio * Number (cantidadHtml.innerHTML);
    let bottunDecrease = document.querySelector (".decrease"); 
    
    
    if (contador <= 0){
      total.innerHTML = 0;
      cantidadHtml.innerHTML = 0;
      bottunDecrease.disabled = true;
    }else {
      bottunDecrease.disabled = false;
    }
});

