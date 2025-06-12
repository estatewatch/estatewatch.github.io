---
name: West Hendon estate 
borough: Barnet
image: estates/src/images/westhendon.png
location: '[51.577059,-0.241227]'
landlord: Barnet Council
developer: Barrat Homes
itla:
total: 680
ballot: Exempt
planning: Approved
---
Around three quarters of a total of 680 homes have been demolished on the West Hendon estate in Barnet.

Phases 1-2 have of this six-phase scheme have been completed under earlier planning permissions (2007 and 2008). Phase 3 (with both outline and detailed elements in the hybrid) has been completed, and Phase 4 was commenced in 2023.

In 2017, detailed permission was granted for the final Phases 5 and 6 but appear to have since stalled. As of September 2024 these phases remain an empty building site.

![West hendon stalled phases](../estates/src/images/westhendon5and6.png)

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