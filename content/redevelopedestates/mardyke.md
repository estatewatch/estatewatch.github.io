---
name: Mardyke estate 
borough: barkinganddagenham
image: estates/src/images/mardyke.jpg
location: '[51.529157,0.170159]'
landlord: Barking & Dagenham Council
developer:
itla:
total: 547
ballot: Exempt
planning: Approved
---
![Mardyke estate](../estates/src/images/mardyke.jpg)

547 homes have been demolished on the Mardyke estate in Barking and Dagenham.
The scheme completed in 2015.

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