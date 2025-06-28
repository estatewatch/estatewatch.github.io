---
name: Leopold estate 
borough: Tower Hamlets 
image: estates/src/images/leopold.jpg
location: '[51.518176,-0.029091]'
landlord: Tower Hamlets
developer:
itla:
total: 165
ballot:
planning:
---
![Leopold estate](../estates/src/images/leopold.jpg)

165 homes were demolished on the Leopold estate in Tower Hamlets.
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