---
name: Connaught estate 
borough: Greenwich
image: estates/src/images/connaught.jpg
location: '[51.487706,0.064427]'
landlord: Greenwich Council
developer:
itla:
total: 338
ballot: Exempt
planning: Demolished
---
![connaught estate](../estates/src/images/connaught.jpg)

338 homes have been demolished on Greenwich's Connaught estate in Woolwich.
The scheme completed in 2018.

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