

var distancia = 0;
var lat1;
var lon1;
function obtengoposicion(coordenadas){

    if(lat1==null && lon1==null){
        lat1 = coordenadas.coords.latitude
        lon1 = coordenadas.coords.longitude
    }else{
        let lat2 = coordenadas.coords.latitude
        let lon2 = coordenadas.coords.longitude

        distancia = distancia + Math.sqrt(Math.pow(lat2-lat1, 2)+Math.pow(lon2-lon1, 2))

        lat1 = lat2;
        lon1 = lat2;
    }
    

    
    console.log(distancia)
}



if(navigator.geolocation){
    navigator.geolocation.watchPosition(obtengoposicion)
}else{
    console.log("No se ha encontrado la ubi")
}



/*var map = L.map('map').setView([lat, lon], 18);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([lat, lon]).addTo(map)
    .bindPopup('Elputo.<br> Easily customizable.')
    .openPopup();*/