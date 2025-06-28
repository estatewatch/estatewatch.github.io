---
name: Pepys estate 
borough: Lewisham
image: estates/src/images/Lor_pepys1.jpg
location: '[51.48873,-0.0334]'
landlord: Lewisham Council
developer:
itla:
total: 366
ballot:
planning: Demolished
---
![Pepys estate](../estates/src/images/Lor_pepys1.jpg)

Completed in 1973, Pepys Estate originally had 1,324 homes across three 24-storey tower blocks and ten 8-storey blocks. The estate has seen several different programmes of funding for its regeneration, including Estate Action funding in the 1990s. In 2002, five of the mid-rise housing blocks on the estate were demolished and replaced with seven housing blocks managed by a social landlord. Completed in 2008, this scheme was criticised for not consulting residents and for the displacement of 222 council tenants from the original buildings who were not offered the right to return. Additionally, the estate lost council homes due to the sale of one of its tallest housing blocks (Aragon Tower) in 2002 to a private developer.

---

  ![Pepys estate](../estates/src/images/Lor_pepys2.jpg)
  ![Pepys estate](../estates/src/images/Lor_pepys3.jpg)
  ![Pepys estate](../estates/src/images/Lor_pepys4.jpg)
  ![Pepys estate](../estates/src/images/Lor_pepys5.jpg)
  ![Pepys estate](../estates/src/images/Lor_pepys6.jpg)
  ![Pepys estate](../estates/src/images/Lor_pepys7.jpg)
  ![Pepys estate](../estates/src/images/Lor_pepys8.jpg)
  ![Pepys estate](../estates/src/images/Lor_pepys9.jpg)
  ![Pepys estate](../estates/src/images/Lor_pepys10.jpg)
  ![Pepys estate](../estates/src/images/Lor_pepys11.jpg)
  ![Pepys estate](../estates/src/images/Lor_pepys12.jpg)
  ![Pepys estate](../estates/src/images/Lor_pepys13.jpg)
  ![Pepys estate](../estates/src/images/Lor_pepys14.jpg)
  ![Pepys estate](../estates/src/images/Lor_pepys15.jpg)

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