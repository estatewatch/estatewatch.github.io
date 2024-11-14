---
name: Eros House
borough: lewisham
tags: lewisham
location: '[51.445520, -0.018815]'
landlord: District Homes (RSL)
developer: 
itla:
total: 60
ballot: 
planning: 
architect:
image: estates/src/images/eroshouse.png
---
![Eros House image](src/images/eroshouse.png)

60 homes have been earmarked for potential redevelopment at Eros House in Catford.

The block is currently being used as temporary accommodation for families on Lewisham's housing waiting list and is managed by District Homes.

The block has been earmarked for potential redevelopment in Lewisham's [Local Plan](https://s3-eu-west-2.amazonaws.com/commonplace-customer-assets/lewishamlocalplan/Central%20Jan%202021%20LEWISHAM%20LOCAL%20PLAN_accessible.pdf) (site 20 - Plassy Island)

![Eros House image](src/images/eroshousesite.png)

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