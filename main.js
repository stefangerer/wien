/* OGD Wien Beispiel */


let stephansdom = {
   lat: 48.208431766854055,
   lng: 16.373449188835192,
   titel: "Stephansdom",  
}; 

let startLayer = L.tileLayer.provider("BasemapAT.grau"); 

let map = L.map("map", {
    center: [stephansdom.lat, stephansdom.lng], 
    zoom: 12, 
    layers: [
        startLayer
    ]
}); 

let layerControl = L.control.layers({
    "BasemapAT Grau": startLayer,
    "Basemap Standard": L.tileLayer.provider("BasemapAT.basemap"),
    "Basemap Topographie": L.tileLayer.provider("BasemapAT.terrain"),
    "Basemap Oberfläche": L.tileLayer.provider("BasemapAT.surface"),
    "Basemap HighDPI": L.tileLayer.provider("BasemapAT.highdpi"),
    "Basemap Orthofoto": L.tileLayer.provider("BasemapAT.orthofoto"),
    //"Basemap Beschriftung": L.tileLayer.provider("BasemapAT.overlay"),//
    "Basemap mit Orthofoto und Beschriftung": L.layerGroup([
        L.tileLayer.provider("BasemapAT.orthofoto"),
        L.tileLayer.provider("BasemapAT.overlay"),
    ])
}).addTo(map);

layerControl.expand(); 

let sightLayer = L.featureGroup().addTo(map);

layerControl.addOverlay(sightLayer, "Sehenswürdigkeiten"); 

let mrk = L.marker([stephansdom.lat, stephansdom.lng]).addTo(sightLayer)

L.control.scale({
    imperial: false, 
}).addTo(map);

L.control.fullscreen().addTo(map); 