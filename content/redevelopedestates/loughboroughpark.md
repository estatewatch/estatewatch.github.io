---
name: Loughborough Park estate 
borough: Lambeth
image: estates/src/images/loughborough.png
location: '[51.458923,-0.105629]'
landlord: Peabody
developer:
itla:
total: 390
ballot:
planning: Demolished
---
![Loughborough park estate](../estates/src/images/loughborough.png)

390 homes were demolished on the Loughborough Park estate in Brixton.
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