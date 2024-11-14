---
name: Islip Manor estate
borough: ealing
tags: ealing
location: '[51.547140,-0.381975]'
landlord: LB Ealing
developer:
itla:
total: 300
ballot: 
planning: 
architect:
image: estates/src/images/islipmanor.png
---
![Islip Manor estate image](src/images/islipmanor.png)

Circa 300 homes at the Islip Manor estate in Northolt have been earmarked for potential redevelopment in Ealing's [2024 Local Plan](https://www.ealing.gov.uk/download/downloads/id/19587/appendix_e_-_results.pdf).

![Islip Manor estate image](src/images/islipmanorsite.png)

The site allocation states that despite its development potential, _"necessary feasibility work and optioneering has not yet been undertaken"_.

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