---
name: Ferrier estate 
borough: Greenwich
image: estates/src/images/ferrier.jpg
location: '[51.460667,0.027657]'
landlord: Greenwich Council
developer: Berkeley Homes
architect: Lifschutz Davidson Sandilands
total: 1900
ballot: Exempt
---
1900 homes have been demolished on Greenwich's Ferrier estate in Kidbrooke.
Demolition completed in 2009.

As of November 2024, the final phase of the estate's redevelopment is yet to be completed.

![final phase of ferrier estate](../estates/src/images/ferrierfinal.png)

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