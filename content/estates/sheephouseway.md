---
name: Sheephouse Way estate
borough: kingston
tags: kingston
location: '[51.384434, -0.264362]'
ballot: Exempt
landlord: RB Kingston
developer: 
itla: 
total: 120
planning:
image: estates/src/images/sheephouseway.png 
---
![Sheephouse Way estate image](src/images/sheephouseway.png)

Circa 120 homes have been earmarked for demolition in Kingston's 2023 [Strategic Housing Land Availability Assessment (SHLAA)](https://www.kingston.gov.uk/downloads/file/2187/strategic-housing-land-availability-assessment) at the Sheephouse Way estate in New Malden.

The estate has been identified as a potential site(CH03) for redevelopment and provision of increased density housing given its strategic location next to Norbiton train station.

![Sheephouse Way estate image](src/images/sheephousewaysite.png)

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