---
name: Excalibur estate 
borough: Lewisham
tags: lewisham
location: '[51.435624,-0.003185]'
landlord: Lewisham Council
developer: London and Quadrant
itla: Solon and PPCR
total: 100
ballot: Exempt
planning: Approved
architect: Hunters
image: estates/src/images/excalibur.jpg
---
![Excalibur estate image](src/images/excalibur.jpg)

Circa 100 homes remain earmarked for demolition in phases 3 and 4 of Lewisham's redevelopment of the Excalibur estate in Catford.

The estate's initial 189 homes are being redeveloped by housing association L&Q in conjunction with Lewisham Council.

Permission was granted in 2013 for 362 new homes of which 166 social/affordable rent.

The third phase of the scheme was [completed](https://londonnewsonline.co.uk/news/regeneration-of-catfords-post-war-prefabs-nears-completion/) in February 2025. The fourth and final phase of the scheme has still not been progressed some 20 years since the regeneration of the estate commenced.

According to a [Nov 2025 report](https://www.londoncouncils.gov.uk/news-and-press-releases/2025/decade-renewal-contribution-london-estate-regeneration) by London Councils, the scheme has stalled.

The report says: _"The delay with the delivery of Phase 3 has had a knock-on effect on the completion of the scheme with delivery of Phase 4. The outline planning permission granted has now expired. The period of delivery of Phase 3 has coincided with the well documented issues around build cost inflation, labour shortages and stagnating property values."_

---

__Links:__

GLA reports: <https://www.london.gov.uk/sites/default/files/PAWS/media_id_108382/excalibur_estate_report.pdf>

Lewisham planning docs [(ref:DC/13/084180)](https://planning.lewisham.gov.uk/online-applications/propertyDetails.do?previousCaseType=Application&keyVal=_LEWIS_PROPLPI_322215_1&previousCaseNumber=DC%2F13%2F084180&activeTab=summary&previousKeyVal=_LEWIS_DCAPR_70779)

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
