---
name: Coopers Road estate 
borough: Southwark
image: estates/src/images/marchantyeomancourts.jpg
location: '[51.487344, -0.071991]'
landlord: Southwark Council
developer: Vistry Countryside
itla:
total: 196
ballot: 
planning: Demolished
---
![Coopers Road estate](../estates/src/images/marchantyeomancourts.jpg)

In 2006, demolition started on the Coopers Road estate off Old Kent Rd.  It comprised 196 council homes in five blocks - two 15-storey tower blocks (Yeoman Court & Marchant Court) and three lower level maisonette blocks. The final phase of the four-phase development was completed in 2015.

The estate's land was sold by Southwark to Countryside Properties and Peabody housing association for a total of £4.09m. They built 247 new homes of which 107 were approved as social rent. However, data from the Greater London Authority (GLA) [shows that](https://35percent.org/redefining-social-rent) have instead been delivered as affordable rent - i.e. up to 80% market rent.

Read more about the redevelopment of the Coopers Road estate here:

[www.35percent.org/coopers-road-estate](https://35percent.org/coopers-road-estate)

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