---
name: Heathside and Lethbridge estate 
borough: lewisham
image: estates/src/images/lbridge1.png
location: '[51.471971,-0.013962]'
landlord: Lewisham Council
developer:
itla:
total: 366
ballot:
planning: Demolished
---
![Lethbridge estate](../estates/src/images/lbridge1.png)

366 Homes were demolished on Lewisham's Lethbridge and Heathside estates.
The scheme completed in 2022.

https://lewisham.gov.uk/inmyarea/regeneration/lewishamtowncentre/heathside-and-lethbridge

---

  ![Lethbridge estate](../estates/src/images/lbridge2.png)
  ![Lethbridge estate](../estates/src/images/lbridge3.png)
  ![Lethbridge estate](../estates/src/images/lbridge4.png)
  ![Lethbridge estate](../estates/src/images/lbridge5.png)
  ![Lethbridge estate](../estates/src/images/lbridge6.png)
  ![Lethbridge estate](../estates/src/images/lbridge7.jpg)
  ![Lethbridge estate](../estates/src/images/lbridge8.jpg)
  ![Lethbridge estate](../estates/src/images/lbridge9.jpg)

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