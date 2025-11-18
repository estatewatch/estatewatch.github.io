---
name: Churchway estate 
borough: Camden
tags: camden
location: '[51.529546, -0.131707]'
landlord: Camden Council
developer: 
itla: 
total: 180
ballot: 
planning: 
architect: 
image: estates/src/images/churchway.png
---
![Churchway estate image](src/images/churchway.png)

Circa 180 homes are earmarked for potential demolition on Camden's Church Way estate near Euston Station.

The estate has been identified in Camden's [draft Euston Area Plan](https://camden.moderngov.co.uk/mgConvert2PDF.aspx?ID=128529) and says that residents are being consulted on options for the future of the estate:

![Euston Area Plan](src/images/churchwaydesignation.png)

---


<!------------THE CODE BELOW RENDERS THE MAP - DO NOT EDIT! ---------------------------->

<div id="map" style="width: 100%; height: 400px;"></div>

<script>
  var map = L.map('map').setView({{ location }}, 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var circle = L.circle({{ location }}, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
</script>

---
