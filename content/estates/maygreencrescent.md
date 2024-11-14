---
name: Maygreen Crescent estate 
borough: havering
tags: havering
location: '[51.566629,0.193681]'
landlord: Havering Council
developer: Wates
itla: TPAS
total: 150
ballot: Required
planning: Pending
image: estates/src/images/mg1.jpg
---
![Maygreen Crescent estate image](src/images/mg1.jpg)

Circa 150 homes are under threat of demolition on Havering's Maygreen Crescent estate in Hornchurch.

The estate has been earmarked for redevelopment as part of Havering's [£1bn joint venture with developer Wates Residential](https://www.wates.co.uk/articles/case-study/borough-of-havering-housing-redevelopment/) which will see 12 of the borough's estates redeveloped.

The scheme has not yet applied for [funding](/approved/funding) from the Mayor or been exempted from his [requirement](/approved/ballotexemptions) to ballot residents on the demolition of their homes. It is unclear whether Havering intends to ballot residents at this stage.

![Maygreen Crescent estate image](src/images/maygreenaerial.png)


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

