//Cerrar Sesión
function cerrarSesion() {
    localStorage.removeItem("logged");
    window.location.href = "./index.html";
  }
if (!localStorage.logged) {
    window.location.href = "./index.html";
}
let section=document.querySelector("section")
fetch("https://639a535a3a5fbccb5264b073.mockapi.io/jugadores")
.then((respuesta)=>respuesta.json())
.then((data) => {
    const jugadores = data.map(jugador => 
        `<div class="col-12 col-lg-6 col-xl-4 p-2 float-start">
            <div class="card">
                <div class="img-wrapper">
                    <img src="https://julioavantt.github.io/guayerd-project-images/img/${jugador.dorsal}.jpg" class="card-img-top" alt="${jugador.name}">
                    <span class="num-dorsal">${jugador.dorsal}</span>    
                </div>
                <div class="card-body">
                <h5 class="card-title">${jugador.name}</h5>
                    <p class="card-text">Edad: ${jugador.edad}</p>
                    <p class="card-text">Posición: ${jugador.posicion}</p>
                    <p class="card-text">Peso: ${jugador["stats-fisico"].peso}</p>
                    <p class="card-text">Altura: ${jugador["stats-fisico"].altura}</p>
                    <p class="card-text">Equipo actual: ${jugador["equipo-actual"]}</p>
                    <p class="card-text">Fecha de nacimiento: ${jugador["fecha-nacimiento"]}</p>
                    </div>
                </div>
            </div>`);
        section.innerHTML = jugadores.join().replaceAll(",", " ");
    })