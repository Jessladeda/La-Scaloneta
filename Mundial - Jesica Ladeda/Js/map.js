//Cerrar Sesión
function cerrarSesion() {
    localStorage.removeItem("logged");
    window.location.href = "/";
  }
if (!localStorage.logged) {
    window.location.href = "/index.html";
}
//mapa
let center = [25.2841478, 51.4419568];

let map = L.map("map").setView(center, 12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);


// ícono rojo
let messiIcon = L.icon({
    iconUrl: "Marker.png",
    iconSize: [30, 30],
    iconAnchor: [22, 44],
    popupAnchor: [-6, -41],
    });

    // Ponemos el ícono en el mapa.
    let marker = L.marker(center, { icon: messiIcon }).addTo(map);

    // Agregamos el pop up.
    marker.bindPopup("<b>Messi</b><br>Los amo!").openPopup();
  

/* Locaciones*/
const objetoMapa = [
    {
    jugador: "Qatar 2022",
    coordenada: [25.2841478, 51.4419568],
    ciudad: "World Cup",
    },
    {
    jugador: "Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    {
    jugador: "Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    {
    jugador: "Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: "El Talar",
    },
    {
    jugador: "Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
    },
    {
    jugador: "Dibu Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
    },
    ];

    let select = document.querySelector("select");

    let opciones = objetoMapa.map( x => {
        return `<option>${x.jugador}</option>`;    
    })
    select.innerHTML = opciones.join().replaceAll(","," ");
    function changeMap() {
    const objeto = objetoMapa.find((item) => item.jugador === select.value);
    map.setView(new L.LatLng(...objeto.coordenada), 11);
    marker = L.marker(objeto.coordenada, { icon:messiIcon }).addTo(map);
    marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
}