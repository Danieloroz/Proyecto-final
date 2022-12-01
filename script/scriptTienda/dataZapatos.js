let category = "guayo";


const url = "https://6376e012b5f0e1eb85145eb2.mockapi.io/articles";

export const inventarioZapatos = [
    {
        nombre: "Guayos",
        cantidad: 23,
        precio: 5000

    },
    {
        nombre: "Chanclas",
        cantidad: 20,
        precio: 50000

    },
    {
        nombre: "Zapatillas",
        cantidad: 25,
        precio: 15000

    },
    {
        nombre: "Tennis",
        cantidad: 3,
        precio: 115000

    }

]

const obtenerDatos = async () => {
    response = await fetch(url);
    return response.json;
}

const addZapato = (zapato) => {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(zapato),
        headers: {
            "Content-type": "application/json"
        }
    })
}

const zapatoNuevo = {
    category: category,
    name: "",
    stock: 1,
    price: 10000
}
//addZapato(zapatoNuevo);