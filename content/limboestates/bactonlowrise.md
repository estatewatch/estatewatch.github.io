---
name: Bacton Low-rise estate 
borough: camden
image: estates/src/images/bactonestate.png
location: '[51.551467,-0.154145]'
landlord: Camden Council
developer: Mount Anvil
total: 150
ballot: Exempt
planning: Approved but under revision
---
![Bacton low rise](../estates/src/images/bactonestate.png)

Circa 150 homes have been demolished in the second part of Camden's redevelopment of the Bacton low-rise estate in Gospel Oak.
The estate was decanted in 2014/15 and demolished in 2017. 

The following photograph was taken of the empty site in 2022:

![Bacton low rise estate](../estates/src/images/bacton.jpg)

In May 2025, it was [reported](https://www.hamhigh.co.uk/news/25160747.bacton-estate-consultation-mount-anvil-26-storey-towers/) that the developer is consulting on plans to increase the density of its scheme.

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

