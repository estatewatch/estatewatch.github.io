---
name: Kings Crescent estate 
borough: Hackney 
image: estates/src/images/kingscrescent.jpg
location: '[-0.092488,51.562183]'
landlord: Hackney Council
developer:
itla:
total: 357
ballot:
planning: demolished
---
![Kings Crescent estate](../estates/src/images/kingscrescent.jpg)

357 homes in two tower blocks have been demolished on Hackney's Kings Crescent estate in a scheme which left some of the low-rise blocks on the estate intact and due to be refurbished. 

Permission was given for 491 new homes built, including 107 council homes for social rent, 143 homes for shared ownership, with the remainder for outright sale.

Phases 1 and 2 of the project were completed in 2017 and included 273 new homes and 101 refurbished homes.

According to a [Nov 2025 report](https://www.londoncouncils.gov.uk/news-and-press-releases/2025/decade-renewal-contribution-london-estate-regeneration) by London Councils, the scheme has stalled.

It says that phases 3 and 4 were tendered during 2020/21 but a period of significant tender price and construction price inflation has resulted in a price 30% above budget.

It also says _"The introduction of secondary staircases has resulted in a significant reduction in residential floorspace, particularly within the outright sale
tenure, meaning that gross development value for the scheme has been greatly reduced, further exacerbating viability challenges."_

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