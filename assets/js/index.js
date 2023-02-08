console.log("Entro index.js");

// Mediante el DOM podemos acceder a nuestero HTML desde js
// document es la menra de acceder a nuestro HTML

// console.log(document);

let titulo1 = document.getElementById("titulo1");
let titulo2 = document.getElementById("titulo2");

// Modificando el HTML
titulo1.innerText = "Modificado desde JS";

// Agregar una nueva clase desde JS(OJO: remplaza las clases actuales)
// titulo1.className = "text-green";

// Agregar clase a la lista de clases actual...
titulo1.classList.add("text-green");

console.log(titulo1.classList);

titulo2.innerText = "Modificando el titulo 2";

// Agregar style desde js
titulo2.style.color = "orange";
titulo2.style.fontSize = "3rem";

// style = "color:orange"

// como accedo a los elementos del titulo 3

let conjuntoTitulos3 = document.getElementsByTagName("h3");

// conjuntoTitulos3[1].classList.add("text-blue");

for (let index = 0; index < conjuntoTitulos3.length; index++) {
    if (index === 2) {
        conjuntoTitulos3[index].innerText = "Esta es una <p> p color naranja</p>";
        conjuntoTitulos3[index].classList.add("text-orange");
    } else {
        conjuntoTitulos3[index].classList.add("text-blue");
    }
}

console.log(conjuntoTitulos3);

let contenedorElementos = document.getElementById("contenedorElementos");

let parrafoNuevo = document.createElement("p");
parrafoNuevo.innerHTML = "Hola";
contenedorElementos.appendChild(parrafoNuevo);

let parrafoNuevo2 = document.createElement("p");
parrafoNuevo2.innerHTML = "Mundo";
contenedorElementos.appendChild(parrafoNuevo2);
// <p>....</p>

// titulo2.classList.add("text-orange");

let acumulador = 2;
function clickButton() {
    // alert("Se hizo click en el button")
    acumulador++;
    console.log(acumulador);
    let emojiTexto = document.getElementById("emojiTexto");
    emojiTexto.innerText = "Emoji con lentes";
    // titulo2.style.fontSize = "3rem";
    // TODO LO QUE SABES DE JAVASCRIPT
    // Aumentar tamaño del emoji con cada click
    // Cambiar texto de "Texto Emoji"
    // emoji.style.fontSize = acumulador+"rem";
    if(acumulador == 10) {
        let emoji = document.getElementById("emoji");
        emoji.innerText = "💥";
        // acumulador = 2;
    }

    emoji.style.fontSize = `${acumulador}rem`;
}