---
name: Dean Court 
borough: ealing
tags: ealing
location: '[51.517792,-0.263030]'
landlord: Housing Association?
developer:
itla:
total: 50
ballot: 
planning: 
architect:
image: estates/src/images/deancourt.png
---
![Dean Court estate image](src/images/deancourt.png)

Circa 50 homes at Dean Court in Acton have been earmarked for demolition in Ealing's [2024 Local Plan](https://www.ealing.gov.uk/download/downloads/id/19587/appendix_e_-_results.pdf).

![Dean Court estate image](src/images/deancourtsite.png)

The Local Plan's site allocation states that _"The site is in single ownership and was submitted through Call for Sites by the Housing Association, who are keen to see it regenerated and the site optimised."_

It is not known if residents have been made aware of the proposals.

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