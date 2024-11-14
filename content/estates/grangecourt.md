---
name: Grange Court estate
borough: ealing
tags: ealing
location: '[51.537050,-0.397191]'
landlord: LB Ealing
developer:
itla:
total: 150
ballot: 
planning: 
architect:
image: estates/src/images/grangecourt.png
---
![Grange Court estate image](src/images/grangecourt.png)

Circa 150 homes at the Grange Court estate in Northolt have been earmarked for potential redevelopment in Ealing's [2024 Local Plan](https://www.ealing.gov.uk/download/downloads/id/19587/appendix_e_-_results.pdf).

![Grange Court estate image](src/images/grangecourtsite.png)

It is not known if residents have been made aware of the designation. The site allocation states: _"The site is owned by the council who are looking to optimise the site. It is not being actively marketed at the moment. The site should come forward for development within 6-15 years."_

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