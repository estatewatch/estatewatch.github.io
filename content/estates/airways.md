---
name: Airways estate
borough: ealing
tags: ealing
location: '[51.536168,-0.370230]'
landlord: Unknown RSL
developer:
itla:
total: 150
ballot: 
planning: 
architect:
image: estates/src/images/airwaysestate.png
---
![airways estate image](src/images/airwaysestate.png)

Circa 150 homes at the Airways estate in Northolt have been earmarked for potential redevelopment in Ealing's [2024 Local Plan](https://www.ealing.gov.uk/download/downloads/id/19587/appendix_e_-_results.pdf).

![airways estate image](src/images/airwayssite.png)

The site allocation states: _"The site was submitted through the Call for Sites, is in single ownership (Housing Association). Proposals are for a comprehensive estate regeneration. Development should come forward within 6-15 years."_

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

---