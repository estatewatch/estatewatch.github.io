---
name: Barham Park estate 
borough: Brent 
image: estates/src/images/barhampark.png
location: '[51.553934,-0.316587]'
landlord: Brent Council
developer:
itla:
total: 214
ballot:
planning: Approved
---
![Barham park estate](../estates/src/images/barhampark.png)

214 homes were demolished on the Barham Park estate in Brent.
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