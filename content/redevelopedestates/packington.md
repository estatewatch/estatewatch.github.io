---
name: Packington estate 
borough: Islington
image: estates/src/images/packington.jpg
location: '[51.534709, -0.095709]'
landlord: Islington Council
developer: Rydon
architect: Pollard Thomas Edwards
itla:
total: 538
ballot: 
planning: Demolished
---
![Packington estate](../estates/src/images/packington.jpg)

The redevelopment of the Packington estate commenced in 2007 and was completed in 2019.

790 homes have been built on the new estate. These include 300 for private sale and 490 for social rent, meaning the refurbishment has resulted in the loss of 48 social rented homes.

The scheme received an upfront government grant of £33m, which paid outright for the social housing in the first phase.

Read more about the redevelopment of the Packington estate here:

[https://www.insidehousing.co.uk/insight/packington-estate-is-this-the-model-for-regeneration-61670](https://www.insidehousing.co.uk/insight/packington-estate-is-this-the-model-for-regeneration-61670)

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