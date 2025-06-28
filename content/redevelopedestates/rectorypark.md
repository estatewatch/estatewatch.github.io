---
name: Rectory Park estate 
borough: Ealing 
image: estates/src/images/rectorypark.jpg
location: '[51.534215,-0.37889]'
landlord: Ealing Council
developer:
itla:
total: 270
ballot:
planning: Demolished
---
![Rectory park estate](../estates/src/images/rectorypark.jpg)

270 homes have been demolished on the Rectory Park estate in Ealing.
The redevelopment of the estate was completed in 2019.

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