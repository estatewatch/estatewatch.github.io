---
name: North Peckham estate 
borough: Southwark
image: estates/src/images/northpeckhamaerial.jpg
location: '[51.477372,-0.078713]'
landlord: Southwark Council
developer:
itla:
total: 3203
ballot:
planning: Approved
---
![North Peckham estate](../estates/src/images/northpeckhamaerial.jpg)

North Peckham estate regeneration was Southwark's first regeneration scheme and was initially put together in the mid 1990's, for the purposes of securing redevelopment funds from the government's Single Regeneration Budget (SRB). It entailed the complete demolition of the 40-acre North Peckham estate of 1,444 council homes and included four adjacent estates, the Sumner, Willowbrook and Gloucester Grove and Camden estates.

According to the GLA's [planning report](https://www.35percent.org/img/five_estates_peckham_report.pdf) for the scheme, a total of 3203 council homes were demolished.

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