---
name: Parkhill and Sunrise estate 
borough: havering
tags: havering
location: '[51.556744,0.206760]'
landlord: Havering Council
developer: Wates
itla: TPAS
total: 100
ballot: Exempt
planning: Pending
image: estates/src/images/ss4.png
---
![Parkhill Sunrise estate image](src/images/ss4.png)

Circa 100 homes are under threat of demolition on Havering's Parkhill and Sunrise estate in Hornchurch.

Solar, Serena and Sunrise Courts have been earmarked for redevelopment as part of Havering's [£1bn joint venture with developer Wates Residential](https://www.wates.co.uk/articles/case-study/borough-of-havering-housing-redevelopment/) which will see 12 of the borough's estates redeveloped.

The scheme is being [funded](https://www.london.gov.uk/programmes-strategies/housing-and-land/homes-londoners/estate-regeneration/estate-regeneration-data) by the Mayor and has been exempted from his [requirement](/approved/ballotexemptions) to ballot residents on the demolition of their homes.

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

