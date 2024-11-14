---
name: Chiswick Road estate
borough: enfield
tags: enfield
location: '[51.627168,-0.057194]'
landlord: Enfield Council
developer: 
itla: 
total: 150
ballot: 
planning: 
architect:
image: estates/src/images/chiswickroad.png
---
![Chiswick road estate image](src/images/chiswickroad.png)

Circa 150 homes are under threat of demolition on the Chiswick Road estate in Enfield. The estate has been listed in Enfield's 2024 Local Plan [site allocations document](src/images/ELP-Appendix-C-Site-Allocations.pdf) as a potential site for redevelopment.

![Chiswick road estate image](src/images/chiswicksite.png)

Whilst the site allocation suggests that development could simply comprise infill, it also suggests the possibility of partial redevelopment of the estate: 

---

## Links
Enfield's 2024 Local Plan [site allocations document](src/images/ELP-Appendix-C-Site-Allocations.pdf)

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

