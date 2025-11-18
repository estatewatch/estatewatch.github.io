---
name: Sceaux Gardens estate 
borough: Southwark
tags: southwark
location: '[51.475290, -0.081711]'
landlord: Southwark Council
developer: Southwark Council
itla: 
total: 180
ballot: 
planning: 
architect: 
image: estates/src/images/mariecurie.png
---
![Excalibur estate image](src/images/mariecurie.png)

180 council homes are earmarked for demolition on the Sceaux Gardens estate in Peckham. These comprise the Racine and Florian blocks as well as the Marie Curie house block.

Marie Curie House's sister block Lakanal House, was refurbished following the deadly 2009 fire which claimed the lives of six of its residents.

Southwark began emptying Marie Curie House in Spring 2025, when it was discovered that the block had failed fire safety tests.

An October 2025, [council report](https://moderngov.southwark.gov.uk/documents/s129363/Report%20Marie%20Curie%20-%20Recommendation%20to%20demolish%20subject%20to%20Cabinet%20Decision%20in%20December%202025.pdf) on Marie Curie House, revealed that whilst Southwark Council could carry out the necessary remedial works, it would _“still be required to undertake ongoing monitoring and maintenance to ensure the block does not fall into an 'intolerable' condition”_.

The report recommends the full redevelopment of the block on the basis that the costs to retrofit and refurbish the high-rise could total up to £23 million. 

A final decision is due to be taken in December 2025.

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
