---
name: Shires estate 
borough: enfield 
tags: enfield
location: '[51.61517,-0.05349]'
landlord: Enfield Council 
developer:
itla: 
total: 200
ballot:
planning:
image: estates/src/images/shropshire.png
---
![Shires estate image](src/images/shropshire.png)

Circa 200 homes are earmarked for potential demolition on Enfield's Shires estate in Edmonton.

Two 18 storey blocks (Shropshire House and Cheshire House) have been earmarked for potential redevelopment by Enfield Council.

![Shires estate image](src/images/cheshire.jpg)

Enfield Council says: _“A hugely expensive and massively disruptive repairs programme - to the tune of £53 million - would be required to bring these blocks up to standard in the short term .. A decision on how to move forward will be made by the Summer of 2023."_

In February 2025, the Enfield Dispatch [reported](https://enfielddispatch.co.uk/final-council-tenants-set-to-leave-unsafe-edmonton-tower-blocks/) that the final three tenants were due to move out within the following month and that eighteen leaseholders remain in the towers. 

---

__Links:__  
[https://www.enfield.gov.uk/news-and-events/2023/02/the-future-of-cheshire-house-and-shropshire-house](https://www.enfield.gov.uk/news-and-events/2023/02/the-future-of-cheshire-house-and-shropshire-house)

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

