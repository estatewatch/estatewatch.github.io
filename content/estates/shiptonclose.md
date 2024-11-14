---
name: Shipton Close estate 
borough: barkinganddagenham
tags: barkinganddagenham
location: '[51.55621041452271, 0.1287404051072312]'
landlord: Barking and Dagenham Council
developer: BeFirst?
total: 60
ballot: Exempt?
planning:
itla:
image: estates/src/images/shiptonclose.png
---
![Shipton Close estate image](src/images/shiptonclose.png)

Circa 60 council homes have been earmarked for potential redevelopment on the Shipton Close estate in Dagenham.

The estate has been identified in LBBD's new [Local Plan](https://www.lbbd.gov.uk/sites/default/files/2024-10/Barking%20and%20Dagenham%20Local%20Plan%202037%20Appendix%202%20Site%20Allocation%20Proformas.pdf) as a potential site for redevelopment with capacity for 831 new homes (see site XE):

![Shipton Close estate image](src/images/shiptonclosesite.png)

Like most of the borough's other estate renewal schemes, it is likely to be progressed by the Council in conjunction with its subsidiary affordable housing company [Reside](https://www.lbbd.gov.uk/affordable-rents-reside-housing) which provides intermediate rented housing _"to people who are in employment, but can’t afford to buy or rent privately and have limited access to social housing"_


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
