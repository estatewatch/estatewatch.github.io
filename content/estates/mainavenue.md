---
name: Main Avenue estate
borough: enfield
tags: enfield
location: '[51.646181,-0.065205]'
landlord: Enfield Council
developer: 
itla: 
total: 200
ballot: 
planning: 
architect:
image: estates/src/images/mainavenue.png
---
![Main Avenue estate image](src/images/mainavenue.png)

Circa 200 homes are under threat of demolition in Bush Hill Park. The Main Avenue estate has been listed in Enfield's 2024 Local Plan [site allocations document](src/images/ELP-Appendix-C-Site-Allocations.pdf) as a potential site for redevelopment.

![Main Avenue estate image](src/images/mainavenuesite.png)

Whilst the site allocation suggests that development could simply comprise infill, it also suggests the possibility of partial or full redevelopment of the estate: 

![Main Avenue estate image](src/images/mainavenuetext.png)

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

