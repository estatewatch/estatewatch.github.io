---
name: Devons Road estate 
borough: towerhamlets 
tags: towerhamlets
location: '[51.522289,-0.019264]'
landlord: Poplar HARCA
developer:
itla: 
total: 300
ballot: 
planning:
image: estates/src/images/devonsroad.png
---
![Devons Road estate image](src/images/devonsroad.png)

Circa 300 homes have been earmarked for potential redevelopment at the Devons Road estate in Tower Hamlets.

The 11-hectare estate has been identified in Tower Hamlet's new [Local Plan](https://ehq-production-europe.s3.eu-west-1.amazonaws.com/d7aa04f5272beeade98508fa9ff67bd01b02d054/original/1726156503/cc728bc71cc00a623ecafcf84f41041d_SAE01_Tower_Hamlets_Site_Capacity_Study.pdf) as a site for redevelopment.

![Devons Road estate image](src/images/devonsroadsite.png)

The Local Plan's capacity study shows how the estate could look after redevelopment:

![Devons Road estate image](src/images/devonsroadmassing.png)

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

