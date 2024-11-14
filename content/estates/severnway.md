---
name: Severn Way
borough: brent
tags: brent
location: '[51.552401,-0.246721]'
landlord: Brent Council
developer:
itla:
total: 50
ballot: Exempt
planning: Pending
image: estates/src/images/Severn_way3LS.jpg
---
![Severn Way estate image](src/images/Severn_way3LS.jpg)

Circa 50 homes on Severn Way Crescent in Brent are under threat of demolition.

The crescent comprises two dozen post-war terraced Council homes which have been earmarked for redevelopment under the NEASDEN STATIONS GROWTH AREA development site in Brent's [Local plan.](https://www.brent.gov.uk/media/16411848/draft-local-plan-east.pdf)

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
