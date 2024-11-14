---
name: Harts Lane estate
borough: barkinganddagenham
tags: barkinganddagenham
landlord: Barking and Dagenham Council
developer: 
itla:
location: '[51.541150, 0.071866]'
total: 500
ballot: 
planning: 
architect:
image: estates/src/images/hartslane.png
---
![Harts Lane estate image](src/images/hartslane.png)

Circa 500 homes have been earmarked for potential redevelopment on Barking's Harts Lane estate.

The estate has been listed as a potential development site with capacity for 1,300 new homes in LBBD's new [2024 Local Plan](https://www.lbbd.gov.uk/sites/default/files/2024-10/Barking%20and%20Dagenham%20Local%20Plan%202037%20Appendix%202%20Site%20Allocation%20Proformas.pdf):

![Harts Lane estate image](src/images/hartslanesite.png)

It is not known if residents have been made aware of the listing.

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