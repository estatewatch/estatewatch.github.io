---
name: Elmington estate 
borough: Southwark
image: estates/src/images/elmington.jpg
location: '[51.479557,-0.089306]'
landlord: Southwark Council
developer:
itla:
total: 482
ballot:
planning: Demolished
---
![Elmington estate](../estates/src/images/elmington.jpg)
482 homes have been demolished on the Elmington estate in Southwark.
The redevelopment of the estate was completed in 2021.

It has been [reported] that the estate's redevelopment has resulted in the net loss of 346 social rented homes.

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