---
name: Kender estate 
borough: Lewisham
image: estates/src/images/kender.jpg
location: '[51.478169,-0.050057]'
landlord: Lewisham Council
developer:
itla:
total: 150
ballot:
planning: Demolished
---
![Kender estate](../estates/src/images/kender.jpg)

Circa 150 homes were demolished on the Kender estate in Lewisham.
The redevelopment of the estate completed in 2014.

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