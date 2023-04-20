


let stop_lat = -41.2875;
let stop_lng = 174.776111;
let zoom = 5;
let title = 'Die Hauptstadt von Neuseeland<br><strong>Wellington</strong>.';

// Kommentar in Java-Script mit Slash-Slash -> Kopiertes Java Script von Leaflet.
// Variablen sind let fangen nie mit Zahlen oder Sonderzeichen an
// konst sind konstanten

const STOPS = [

    // https://etherpad.wikimedia.org/

    {
        title: "Christchurch",
        user: "manohog",
        lat: -43.531111,
        lng: 172.636667,
        wikipedia: "https://de.wikipedia.org/wiki/Christchurch"
    },
    {
        title: "Lake Tekapo",
        user: "chris0810",
        lat: -43.883333,
        lng: 170.516667,
        wikipedia: "https://de.wikipedia.org/wiki/Lake_Tekapo",
    },
    {
        title: "Moeraki Boulders",
        user: "Mirjamkirschner",
        lat: -45.345275,
        lng: 170.826061,
        wikipedia: "https://en.wikipedia.org/wiki/Moeraki_Boulders"
    },
    {
        title: "Milford Sound",
        user: "julianple",
        lat: -44.616667,
        lng: 167.866667,
        wikipedia: "https://de.wikipedia.org/wiki/Milford_Sound/Piopiotahi"
    },
    {
        title: "Wanaka",
        user: "sebastianv99",
        lat: -44.71,
        lng: 169.16,
        wikipedia: "https://de.wikipedia.org/wiki/Wanaka"
    },
    {
        title: "Der Fox Gletscher",
        user: "grueneli",
        lat: -43.53,
        lng: 170.15,
        wikipedia: "https://de.wikipedia.org/wiki/Fox-Gletscher"
    },
    {
        title: "Der Franz-Joseph Gletscher",
        user: "ttfg22",
        lat: -43.5,
        lng: 170.22,
        wikipedia: "https://de.wikipedia.org/wiki/Franz-Josef-Gletscher"
    },
    {
        title: "Abel Tasman Nationalpark",
        user: "fabianwild",
        lat: -40.833333,
        lng: 172.9,
        wikipedia: "https://de.wikipedia.org/wiki/Abel-Tasman-Nationalpark"
    },
    {
        title: "Picton",
        user: "LauraMap",
        lat: -41.293056,
        lng: 174.001944,
        wikipedia: "https://en.wikipedia.org/wiki/Picton,_New_Zealand"
    },
    {
        title: "Die Hauptstadt von Neuseeland Wellington",
        user: "damerow",
        lat: -41.2875,
        lng: 174.7761,
        wikipedia: "https://de.wikipedia.org/wiki/Wellington",
    },
    {
        title: "Tongariro-Nationalpark",
        user: "webmapping",
        lat: -39.2,
        lng: 175.583333,
        wikipedia: "https://de.wikipedia.org/wiki/Tongariro-Nationalpark"
    },
    {
        title: "Rotorua",
        user: "juba1508",
        lat: "-38.136944",
        lng: "176.250833",
        wikipedia: "https://de.wikipedia.org/wiki/Rotorua"
    },
    {
        title: "Auckland",
        user: "madeleinehll",
        lat: -36.833333,
        lng: 174.8,
        wikipedia: "https://de.wikipedia.org/wiki/Auckland"
    }];

// geschweifte Klammer für Objekte verwenden!

let map = L.map('map').setView([stop_lat, stop_lng], zoom); //Koordinaten immer als fixe Zahl

// GIthub Seite https://github.com/leaflet-extras/leaflet-providers:
let watercolor = L.tileLayer.provider('Stamen.Watercolor').addTo(map);
let osm = L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);
let OpenTopoMap = L.tileLayer.provider('OpenTopoMap').addTo(map);
let cycle = L.tileLayer.provider('CyclOSM').addTo(map);
let OPNV = L.tileLayer.provider('OPNVKarte').addTo(map);

L.control.layers({
    "Openstreetmap": osm,
    "Watercolor": watercolor,
    "OpenTopoMap": OpenTopoMap,
    "Fahrrad": cycle,
    "ÖPNV": OPNV
}).addTo(map);



//der Maßstab ist wieder links unten und ohne Meilenangabe:
L.control.scale({ imperial: false, maxWidth: 200, position: "bottomleft" }).addTo(map)
// Vorschleife:
// für jedes Element im Array wird das in der {} gemacht
for (let stop of STOPS) {
    // Marker für den Stop -> die Marker sind nicht mehr transparent sondern opaque (undursichtig)
    let marker = L.marker([stop.lat, stop.lng], {
        opacity: 1,

    }).addTo(map)
        .bindPopup(`<h3>${stop.title}</h3>
        <a href="${stop.wikipedia}">Wikipedia</a>`

        );
    if (stop.user == "damerow") {
        marker.openPopup();
        console.log("Mein Marker: ", stop);

        // Zwei Ist-gleich-Zeichen! Überprüfung ob beide Werte auf beiden Seiten stimmen

    }

}









