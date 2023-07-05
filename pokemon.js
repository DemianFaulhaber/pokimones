const titulo = document.getElementById("title")

const datos = new URLSearchParams(document.location.search)

const nombre = datos.get("name")

titulo.innerText = nombre

function detalles(){
    const solicitud = fetch("https://pokeapi.co/api/v2/pokemon/" + nombre);
    solicitud.then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        }
    })
    .then(json => {
        console.log(json)
        const imgurl = json.sprites.front_default
        const imagen = document.createElement("img")
        const div = document.getElementById("contenido") 
        div.setAttribute("width", '20vw')
        // const link = document.createElement("a")
        // link.href = `pokemon.html?name=` + json.name
        // link.appendChild(imagen)
        imagen.src = imgurl
        div.appendChild(imagen)
    })
}

detalles()