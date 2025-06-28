---
name: Kings Crescent estate 
borough: Hackney 
image: estates/src/images/kingscrescent.jpg
location: '[-0.092488,51.562183]'
landlord: Hackney Council
developer:
itla:
total: 357
ballot:
planning: demolished
---
![Kings Crescent estate](../estates/src/images/kingscrescent.jpg)

357 homes in two tower blocks have been demolished on Hackney's Kings Crescent estate in a scheme which left most of the low-rise blocks on the estate intact. 

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