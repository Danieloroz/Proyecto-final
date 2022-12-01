import { addZapato } from "./dataZapatos.js";
const inputNombre = document.getElementById("nombre-zapatos");
const inputCantidad = document.getElementById("cantidad-zapatos");
const inputPrecio = document.getElementById("precio-zapatos");
const inputUrl = document.getElementById("url-zapatos");
const inputButton = document.getElementById("boton-formulario");
const inputSelect = document.getElementById("select-categoria");

export const addZapatoHandler = () => {
    let categoriaZapato = inputSelect.value;
    let nombreZapato = inputNombre.value;
    let cantidadZapato = inputCantidad.value;
    let precioZapato = inputPrecio.value;
    let urlZapato = inputUrl.value;
    let zapato = {
        category: categoriaZapato,
        name: nombreZapato,
        stock: parseInt(cantidadZapato),
        price: parseInt(precioZapato),
        url: urlZapato
    }
    addZapato(zapato);
}
const divInventario = document.getElementById("inventario-container"); // Obtener el div del HTML por medio del id

// export const imprimirData = (inventario-container) => {
//     const ul = document.createElement("UL"); // Crear un elemento, recibe como paremetro el elemento a crear
//     inventario.forEach(zapato => {
//         const li = document.createElement("LI");
//         const button = document.createElement("button");
//         button.addEventListener("click", functionButton.bind(null, zapato.nombre, zapato.cantidad)); //El bind es preconfigurar la funcion, antes se ejecutaba sin siquiera llamarla, con este metodo solucionamos el problema
//         button.innerText = "BOTON"; //Modificar el contenido del texto de un elemento del DOM
//         button.classList.add("button-list-item"); // Añadir una clase a un elemento del DOM
//         li.innerText = zapato.nombre;
//         li.appendChild(button); // Sirve para insetar hijos a un elemento del DOM
//         ul.appendChild(li);
//     });
//     divInventario.appendChild(ul);
// }

// const functionButton = (nombre, cantidad) => {
//     alert("el nombre del articulo es " + nombre + " cantidad :" + cantidad);
// }
