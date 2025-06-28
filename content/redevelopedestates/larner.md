---
name: Larner Road estate 
borough: Bexley
image: estates/src/images/larner.jpg
location: '[51.473574,0.17835]'
landlord: Bexley Council
developer:
itla:
total: 622
ballot: Exempt
planning: Demolished
---
![Larner rd estate](../estates/src/images/larner.jpg)

622 homes have been demolished on Bexley's Larner Road estate.
Demolition commenced in 2013.

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