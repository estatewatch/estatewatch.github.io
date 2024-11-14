---
name: Walbrook House
borough: enfield
tags: enfield
location: '[51.628832,-0.045066]'
ballot: 
landlord: LB Enfield
developer: 
itla: 
total: 126
planning: 
architect:
image: estates/src/images/walbrook.png
---
![Walbrook house image](src/images/walbrook.png)

126 council homes are under threat of demolition at Walbrook House in Enfield.

An April 2023 [council report](https://governance.enfield.gov.uk/documents/s97590/HRD2324_007%20Walbrook%20House%20Part%201%20-%2018%20April%2023.pdf) claims that the block requires refurbishment to meet decent homes standard.

The cost of this refurbishment was originally estimated as £14m in 2020 but the report explains that because of external factors this estimate has now risen to £30m.

The report refers to an options appraisal assessment undertaken by Savills, which summarises that _"refurbishment of the tower to re-let at social rent tenure ... is unviable particularly when compared to the other options."_.

Enfield council is underway with decanting tenants from the block and as at 2023, only 20 homes remained occupied.

---

__Links:__

April 2023 [council report](https://governance.enfield.gov.uk/documents/s97590/HRD2324_007%20Walbrook%20House%20Part%201%20-%2018%20April%2023.pdf)

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

