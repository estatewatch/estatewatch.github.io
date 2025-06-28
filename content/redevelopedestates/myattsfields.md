---
name: Myatts Fields estate 
borough: Lambeth
image: estates/src/images/myattsfields.jpg
location: '[51.474589,-0.108238]'
landlord: Lambeth Council
architect: PRP
developer: Regenter/Rydon
itla:
total: 477
ballot:
planning: Demolished
---
![Myatts fields estate](../estates/src/images/myattsfields.jpg)

477 homes were demolished on the Myatts Fields estate in Lambeth.
The redevelopment of the estate was completed in 2016.

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