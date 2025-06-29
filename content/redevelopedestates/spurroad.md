---
name: Stonegrove and Spur Road estate 
borough: Brent 
image: estates/src/images/stonegrove.png
location: '[51.621214,-0.288804]'
landlord: Brent Council
developer:
itla:
total: 630
ballot:
planning: Demolished
---
![Spur road estate](../estates/src/images/stonegrove.png)

630 homes were demolished on the Stonegrove and Spur Road estate in Brent.
The redevelopment of the estate was completed in 2018.

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