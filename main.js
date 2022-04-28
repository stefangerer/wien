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
    "BasemapAT Grau": startLayer
}).addTo(map);


