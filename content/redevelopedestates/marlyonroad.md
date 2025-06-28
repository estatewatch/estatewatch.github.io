---
name: Marlyon Road estate
borough: redbridge
location: '[51.611731,0.121567]'
image: estates/src/images/marlyonroad2.jpg
landlord: Redbridge Council
developer:
itla:
total: 36
ballot: Exempt
planning: Approved
---
![Marlyon road estate](../estates/src/images/marlyonroad2.jpg)

36 homes on Redbridge's Marlyon road estate have been demolished in in a joint venture with Engie Regeneration Ltd. 

A [November 2019 newsletter](https://www.redbridge.gov.uk/media/7409/marlyon-road-newsletter-november-2019.pdf) gives further details of the scheme - and describes the replacement homes as 'affordable rent' tenure (i.e. up to 80% market rent).

![Marlyon road estate](../estates/src/images/marlyonar.png)

---

  ![Marlyon road estate](../estates/src/images/marlyonroad.png)
  ![Marlyon road estate](../estates/src/images/marlyon3.png)

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