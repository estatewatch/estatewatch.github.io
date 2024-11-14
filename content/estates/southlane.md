---
name: South Lane estate
borough: kingston
tags: kingston
location: '[51.386237, -0.256749]'
ballot: Exempt
landlord: RB Kingston
developer: 
itla: 
total: 130
planning:
image: estates/src/images/southlane.png
---
![South Lane estate image](src/images/southlane.png)

Circa 130 homes have been earmarked for demolition in Kingston's 2023 [Strategic Housing Land Availability Assessment (SHLAA)](https://www.kingston.gov.uk/downloads/file/2187/strategic-housing-land-availability-assessment) at the South Lane estate in Malden.

The estate has been identified as a potential site(CH04) for redevelopment and provision of increased density housing given its strategic location next to Norbiton train station.

![South Lane estate image](src/images/southlanesite.png)

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