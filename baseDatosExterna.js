// //Protocolo: HTTP.

// //API. Aplication programing interface
// /* Una API es un listado de declaraciones que se usan para los programadores para ejecutar comandos o acceder a información

// pokeapi.co
// .... RESTfulAPI
// REST: Arquitectura de desarrollo en la que el proyecto se organiza de tal manera que vos le disponibilices al usuario, donde vos le organizás la información de tu base de datos en una manera en que puede pedirte un listado de MUCHOS recursos o pedirte un valor y leer esos recursos y al mismo tiempo podria llegar a tener acceso a modificar los datos
// */

// const notificaciones = [
//     {
//       id: 1,
//       aplicacion: "Instagram",
//       descripcion: "Te mencionaron en una historia",
//     },
//     {
//       id: 2,
//       aplicacion: "Whatsapp",
//       descripcion: "Carlitos te envió un mensaje",
//     },
//     {
//       id: 3,
//       aplicacion: "Facebook",
//       descripcion: "Te etiquetaron en una foto",
//     },
//     {
//       id: 4,
//       aplicacion: "Tiempo",
//       descripcion: "Mañana va a llover",
//     },
//   ];

//   // https://pokeapi.co/api/v2/pokemon

//   //Se tiene que definir qué tipo de solicitud: get o post
//   const contenido = document.getElementById("contenido");
//   const boton = document.getElementById("boton");
//   const botonPokemones = document.getElementById("botonPokemones");
//   let notificacionesActualizadas = false;

//   //página: javascript.info

//   function actualizarNotificaciones() {
//     contenido.innerHTML ="<p>Cargando...</p>";
//     let nuevoContenido ="";

//     const promise = new Promise((resolve, reject) => {
//         let data;

        
//         setTimeout(() => {
//             data = notificaciones;
//             /* data = []; */
//             if(data.length === 0) {
//                 reject("No hay data");
//             }

//             resolve(data);
            
//             /* notificacionesActualizadas = true;
//             console.log("Se actualizaron correctamente");
//              */
//         }, 2000);
//     });
    

//     promise.then(respuesta => {
//         console.log(respuesta);
//         respuesta.forEach(notificacion => {
//             const p = `<p>${notificacion.aplicacion}: ${notificacion.descripcion}</p>`;
//             nuevoContenido += p;
//         });
//         contenido.innerHTML = nuevoContenido;
//         return;
//     })

//     promise.catch(error => {
//         contenido.innerHTML = '<h3 style="background-color:red">ERROR FATAL</h3>';
//         console.log(error);
//         /* return "Algún mensaje"; */
//     });
    
//     promise.then(res => {
//         console.log("El contenido que recibo es: ", res);
//     }); 

//     if (notificacionesActualizadas){
//         alert("Tus notificaciones están al día");
//     }
//   }

  function buscarPokemones(){
    //Recibe una URL y la configuración de esa solicitud
    //Te devuelve una promesa del tipo response

    //La respuesta del fetch se maneja en dos pasos. 
    //1. Si la solicitud me respondió exitosamente
    const solicitud = fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
    solicitud.then((respuesta) => {
      if (respuesta.ok) {
        return respuesta.json();
      }
    })
    // .then(json => console.log(json.sprites.front_default))
    
    
    
    .then(json => json.results.forEach(E =>{
         const solicitud_especifica = fetch((E.url));
         solicitud_especifica.then((response) => {
            if (response.ok){
                return response.json();
              }
             })      
             .then(
               json => {
               console.log(json)
               const imgurl = json.sprites.front_shiny
               const imagen = document.createElement("img")
               const div = document.getElementById("contenido") 
               const link = document.createElement("a")
               link.href = `pokemon.html?name=` + json.name
               link.appendChild(imagen)
               imagen.src = imgurl
               div.appendChild(link)
               }
          )}))


    .catch((error => console.error(error)));
  }
  botonPokemones.onclick = (buscarPokemones)
 /*  boton.onclick = actualizarNotificaciones; */
