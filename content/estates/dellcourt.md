---
name: Dell Court 
borough: havering
tags: havering
location: '[51.557480,0.225340]'
landlord: Havering Council
developer: Wates
itla: TPAS
total: 29
ballot: Exempt
planning: Pending
image: estates/src/images/dell1.jpg
---
![Dell Court estate image](src/images/dell1.jpg)

29 homes are under threat of demolition at Havering's Dell Court in Hornchurch.

The estate has been earmarked for redevelopment as part of Havering's [£1bn joint venture with developer Wates Residential](https://www.wates.co.uk/articles/case-study/borough-of-havering-housing-redevelopment/) which will see 12 of the borough's estates redeveloped.

It is unclear whether Havering intends to ballot residents at this stage.

Havering's [investment prospectus](https://www.investinhavering.co.uk/wp-content/uploads/2017/03/Vision-interactive-map.pdf) provides further details of the scheme.

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

![Dell Court estate image](src/images/dell2.png", "Dell court" %}
![Dell Court estate image](src/images/dell3.png", "Dell court" %}
![Dell Court estate image](src/images/dellaerial.png", "Dell court" %}
