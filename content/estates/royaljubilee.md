---
name: Royal Jubilee Court 
borough: havering
tags: havering
location: '[51.585675,0.193341]'
landlord: Havering Council
developer: Wates
itla: TPAS
total: 52
ballot:
planning:
image: estates/src/images/royaljubileeaerial.jpg
---
![Royal Jubilee Court estate image](src/images/royaljubileeaerial.jpg)

52 homes are under threat of demolition on Havering's Royal Jubilee Court.

The estate has been earmarked for redevelopment as part of Havering's [£1bn joint venture with developer Wates Residential](https://www.wates.co.uk/articles/case-study/borough-of-havering-housing-redevelopment/) which will see 12 of the borough's estates redeveloped.

As of September 2024, Havering's [website](https://www.havering.gov.uk/building-new-homes-havering-1) says that the scheme is under review.

The blocks were originally sheltered housing but are now being used as temporary accommodation for families on Havering's housing waiting list. 

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

