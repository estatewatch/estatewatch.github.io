---
name: Saltford Close estate 
borough: bexley
tags: bexley
location: '[51.481231, 0.178457]'
landlord:
developer:
itla:
total: 150
ballot: Required?
planning: Masterplan pending
image: estates/src/images/saltfordclose.png
---
![Saltford Rd estate image](src/images/saltfordclose.png)

Circa 150 homes on Erith's Saltford Close estate in Belvedere have been earmarked for redevelopment in Bexley's [Local Plan](https://www.bexley.gov.uk/sites/default/files/2023-07/bexley-local-plan-adopted-26-april-2023.pdf) - (site ERI01: 'Erith Western Gateway'). 

![Saltford Rd estate image](src/images/saltfordclosesite.png)

The estate is relatively small, comprising around a dozen 4-storey blocks of maisonettes plus two 14-storey tower blocks and is situated within close proximity of Erith Town Centre.

The estate is owned by Orbit Housing Association, which was the recipient of Bexley's stock transfer deal circa 2003. Orbit has recently demolished its nearby Arthur Street estate and also Larner Road estates, now re-branded as Erith Park. 

A masterplan for the redevelopment of the estate and Erith Town Centre is yet to be drawn up.

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
