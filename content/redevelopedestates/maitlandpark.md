---
name: Aspen House (Maitland Park estate) 
borough: camden
image: estates/src/images/ap2.jpg
location: '[51.548572,-0.157043]'
landlord: Camden Council
developer:
itla:
total: 50
ballot: Exempt
planning: Demolished 
---
![Aspen hse](../estates/src/images/ap2.jpg)

Circa 50 Council homes have been demolished in Aspen House as part of Camden's [regeneration of Maitland Park estate](https://www.camden.gov.uk/maitland-park).

Camden started decanting tenants from Aspen House in 2013 and a planning application was approved in February 2015. Delays meant that the last secure tenants were moved out in September 2019 and the remaining flats have been [occupied by property guardians](https://uk.vps-guardians.com/bookonline/locations-building.jsp?id=-7814773019304955797). In February 2020 it was [reported](http://camdennewjournal.com/article/mystery-of-fire-death-of-man-in-demolition-council-block) that a man had died in a blaze in one of the flats.

The [Camden Journal article](http://camdennewjournal.com/article/mystery-of-fire-death-of-man-in-demolition-council-block) also hears from former tenant Kristian Lawton, a former Aspen House tenant, who said: _“I was told I could move back when the new block is built – that was in April 2017. I haven’t heard anything since from the council and this is the first I have heard that the block is actually being demolished. We were promised that the new block would be finished within two years.”_

---

![Aspen house](../estates/src/images/aspen.png)
![Aspen house](../estates/src/images/ap1.jpg)

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