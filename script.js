
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-30.595394, -71.189857],
    zoom: 18,
    zoomControl: true
});


				
var	SECTOR_8JULb = L.geoJson(SECTOR_8JULb, {	
              	    style: function(feature) {
        switch (feature.properties.sector) {
            case 'HP142': return {color: "yellow"};
            case 'HP151':   return {color: "green"};
			case 'HP160':   return {color: "blue"};
			case 'HP157':   return {color: "orange"};
			case 'HP158':   return {color: "olive"};
			case 'HP120':   return {color: "teal"};
			case 'HP124':   return {color: "purple"};
			case 'HP163':   return {color: "red"};
			
        }
    },

     onEachFeature: function (feature, layer) {
	var txt = "Usted está en el sector donde hay aprox :";	 
	var txt2 = "Homepass";
       layer.bindPopup(txt.fontcolor("DarkGreen")+" "+" "+feature.properties.sector.fontcolor("blue").fontsize(3)+" "+txt2.fontcolor("DarkGreen"));
   } 	
                  
              }).addTo(map);
			  
			  
			  
var style1 = {
                    'color': "red",
                    'weight': 1,
                    'opacity': 5,
					'fillOpacity': 0.5
                };								  
			  
	

var geojsonMarkerOptions = {
    radius: 2.4,
    fillColor: "red",
    color: "red",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
	
 var hp2= L.geoJSON(hp2, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);		  
			  

			  

		  
			  

		  








// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
