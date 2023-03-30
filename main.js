


let stop_lat = -41.2875;
let stop_lng = 174.776111;
let zoom = 12;
let title = 'Die Hauptstadt von Neuseeland<br><strong>Wellington</strong>.';

// Kommentar in Java-Script mit Slash-Slash -> Kopiertes Java Script von Leaflet.
// Variablen sind let fangen nie mit Zahlen oder Sonderzeichen an
// konst sind konstanten

const STOPS = ["Picton", "Die Hauptstadt von Neuseeland", "Tongariro-Nationalpark"];
console.log (STOPS);
console.log (STOPS[0]);
console.log (STOPS[1]);
console.log (STOPS[2]);
console.log (STOPS.length);

let map = L.map('map').setView([stop_lat, stop_lng], zoom); //Koordinaten immer als fixe Zahl

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([stop_lat, stop_lng]).addTo(map)
    .bindPopup(title)
    .openPopup();