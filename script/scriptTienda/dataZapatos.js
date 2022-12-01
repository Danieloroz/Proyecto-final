let category = "guayo";

const url = "https://6376e012b5f0e1eb85145eb2.mockapi.io/articles";



const obtenerDatos = async () => {
    let response = await fetch(url);
    return response.json;
}

export const inventario = obtenerDatos();

export const addZapato = (zapato) => {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(zapato),
        headers: {
            "Content-type": "application/json"
        }
    })
}