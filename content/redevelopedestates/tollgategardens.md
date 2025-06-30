---
name: Tollgate Gardens estate 
borough: westminster
image: estates/src/images/tollgate.png
location: '[51.535285,-0.191409]'
landlord: Westminster Council
developer:
itla:
total: 150
ballot:
planning: Demolished
---
![tollgate gardens](../estates/src/images/tollgate.png)

150 homes have been demolished on the Tollgate Gardens estate in Westminster.
The redevelopment of the estate was completed in 2015.

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