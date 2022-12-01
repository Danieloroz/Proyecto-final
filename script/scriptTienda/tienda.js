//import { imprimirData } from "./functions.js";
import { inventario } from "./dataZapatos.js";
//imprimirData(inventario);
import { addZapatoHandler } from "./functions.js";
const inputButton = document.getElementById("boton-formulario");
inputButton.addEventListener("click",(e)=>{
    e.preventDefault();
    addZapatoHandler();
    console.log("jhzdjhsjhad");
})