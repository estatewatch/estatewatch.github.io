---
name: Leabank View estate 
borough: haringey
tags: haringey
location: '[51.578949,-0.062836]'
landlord: Haringey Council
developer:
itla:
total: 60
ballot:
planning: Pending
image: estates/src/images/leabank.jpg
---
![Leabank View estate image](src/images/leabank.jpg)

The Leabank View estate comprises circa 60 council homes overlooking the river Lea. The estate have been designated for comprehensive redevelopment in the Council's [Estate Renewal Strategy](https://www.minutes.haringey.gov.uk/documents/s48324/Housing%20Investment%20and%20Estate%20Renewal%20Strategy%20-%20whole%20report%20-%20Paul%20Munday.pdf) and its [Local Plan site allocations DPD](https://www.haringey.gov.uk/sites/haringeygovuk/files/final_haringey_site_allocations_dtp_online.pdf) (site SA64).

![Leabank View estate image](src/images/leabanksa64.png)

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


