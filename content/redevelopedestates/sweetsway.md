---
name: Sweets Way estate 
borough: Barnet 
image: estates/src/images/sweetsway.jpg
location: '[51.628122,-0.172491]'
landlord: Notting Hill Genesis
developer:
itla:
total: 150
ballot:
planning: Demolished
---
![sweets way estate](../estates/src/images/sweetsway.jpg)

150 homes were demolished on the Sweets Way estate in Barnet.
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