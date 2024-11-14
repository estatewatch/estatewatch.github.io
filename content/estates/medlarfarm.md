---
name: Medlar Farm estate
borough: ealing
tags: ealing
location: '[51.535476,-0.389080]'
landlord: LB Ealing
developer:
itla:
total: 500
ballot: 
planning: 
architect:
image: estates/src/images/medlarfarm.png
---
![Medlar Farm estate image](src/images/medlarfarm.png)

Circa 500 homes at the Medlar Farm estate in Northolt have been earmarked for potential redevelopment in Ealing's [2024 Local Plan](https://www.ealing.gov.uk/download/downloads/id/19587/appendix_e_-_results.pdf).

![Medlar Farm estate image](src/images/medlarfarmsite.png)

It is not known if residents have been made aware of the designation. The site allocation states that it is expected to come forward in the next 6-15 years.


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