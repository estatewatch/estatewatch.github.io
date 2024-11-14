---
name: Excalibur estate 
borough: Lewisham
tags: lewisham
location: '[51.435624,-0.003185]'
landlord: Lewisham Council
developer: London and Quadrant
itla:
total: 100
ballot: Exempt
planning: Approved
architect: Hunters
image: estates/src/images/excalibur.jpg
---
![Excalibur estate image](src/images/excalibur.jpg)

Circa 100 homes remain earmarked for demolition in phases 3 and 4 of Lewisham's redevelopment of the Excalibur estate in Catford.

Phases 1 and 2 of the scheme are nearing completion but it would appear that phases 3 and 4 have stalled.

The estate's initial 189 homes are being redeveloped by housing association L&Q in conjunction with Lewisham Council.

Permission was granted in 2013 for 362 new homes of which 166 social/affordable rent.

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
