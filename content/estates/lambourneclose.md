---
name: Lambourne Close estate
borough: ealing
tags: ealing
location: '[51.503159,-0.335400]'
landlord: LB Ealing
developer:
itla:
total: 100
ballot: 
planning: 
architect:
image: estates/src/images/lambourneclose.png 
---
![Lambourne Close estate image](src/images/lambourneclose.png)

Circa 100 homes at the Lambourne Close estate in Hanwell have been earmarked for potential redevelopment in Ealing's [2024 Local Plan](https://www.ealing.gov.uk/download/downloads/id/19587/appendix_e_-_results.pdf).

![Lambourne Close estate image](src/images/lambourneclosesite.png)

It is not known if residents have been made aware of the proposals.

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