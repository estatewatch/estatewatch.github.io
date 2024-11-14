---
name: Brook House
borough: ealing
tags: ealing
location: '[51.503540,-0.280070]'
landlord: RSL
developer:
itla:
total: 50
ballot: 
planning: 
architect:
image: estates/src/images/brookhouse.png
---
![Brook house image](src/images/brookhouse.png)

Circa 50 homes at Brook House on Gunnersbury Lane have been earmarked for potential redevelopment in Ealing's [2024 Local Plan](https://www.ealing.gov.uk/download/downloads/id/19587/appendix_e_-_results.pdf).

![Brook house image](src/images/brookhousesite.png)

The site was submitted in the Local Plan's 'call for sites' as a site for potential redevelopment by the housing association which owns it.

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