---
name: Stellar House & Atlair Close 
borough: haringey
tags: haringey
location: '[51.608284,-0.066563]'
landlord: Haringey Council
developer:
itla:
total: 300
ballot: Required
planning: Pending
image: estates/src/images/stellar.png
---
![Stellar house estate image](src/images/stellar.png)

Circa 300 homes at Atlair Close including Stellar House have been earmarked for redevelopment in Tottenham.

They have been identified for redevelopment in Haringey's [Tottenham Area Action Plan](https://www.haringey.gov.uk/sites/haringeygovuk/files/final_haringey_tottenham_aap_dtp_online.pdf) (site NT3). 

![Stellar house estate image](src/images/stellar2.png)

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

