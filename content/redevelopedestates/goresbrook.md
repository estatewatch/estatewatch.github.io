---
name: Goresbrook Village estate 
borough: Barking and Dagenham
image: estates/src/images/goresbrook.jpg
location: '[51.533531,0.116668]'
landlord: Barking and Dagenham Council
developer:
itla:
total: 282
ballot:
planning:
---
![Goresbrook estate](../estates/src/images/goresbrook.jpg)

282 homes have been demolished on Barking and Dagenham's Goresbrook Village estate.
The blocks were demolished in 2012.

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