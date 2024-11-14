---
name: Northumberland Park estates
borough: haringey
tags: haringey
location: '[51.604419,-0.058280]'
landlord: Haringey Council
developer:
itla: PPCR
total: 1027
ballot: Required
planning: Pending
image: estates/src/images/northumberland2.jpg
---
![Northumberland Park estate image](src/images/northumberland2.jpg)

1027 Council homes on Haringey's Northumberland Park estates have been earmarked for redevelopment in Tottenham.

They have been identified for redevelopment in Haringey's [Tottenham Area Action Plan](https://www.haringey.gov.uk/sites/haringeygovuk/files/final_haringey_tottenham_aap_dtp_online.pdf) (site NT4). 

![Northumberland Park estate image](src/images/northumberland.png)

Haringey Council's [dedicated website](https://tottenham.london/NP) provides further details of the scheme.

This recent interview with a resident from one of the Northumberland Park estates highlights the anguish caused by the proposals:

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/images/northumberlandpark.mp4" allowfullscreen></iframe>
</div>

---

__Links:__
Haringey Council's website for Northumberland Park regeneration: [https://www.haringey.gov.uk/regeneration/tottenham/northumberland-park](https://www.haringey.gov.uk/regeneration/tottenham/northumberland-park)

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
