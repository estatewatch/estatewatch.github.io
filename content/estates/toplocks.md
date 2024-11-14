---
name: Toplocks estate
borough: ealing
tags: ealing
location: '[51.501843,-0.364982]'
landlord: Unknown RSL
developer:
itla:
total: 150
ballot: 
planning: 
architect:
image: estates/src/images/toplocks.png 
---
![Toplocks estate image](src/images/toplocks.png)

Circa 150 homes at the Toplocks estate in Southall have been earmarked for potential redevelopment in Ealing's [2024 Local Plan](https://www.ealing.gov.uk/download/downloads/id/19587/appendix_e_-_results.pdf).

![Toplocks estate image](src/images/toplockssite.png)

The site allocation states that the site was _"submitted through the Call for Sites exercise the regeneration of this site is supported by its (RSL) owner. The site is not currently being marketed. Development is expected to come forward within 6-10 years."_

It is not known if residents have been made aware of the designation. 

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