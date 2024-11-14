---
name: RAF Uxbridge estate
borough: hillingdon
tags: hillingdon
location: '[51.545461, -0.470859]'
landlord: Hillingdon Council
developer: 
itla: 
total: 89
ballot: Exempt
planning: 
architect:
image: estates/src/images/rafuxbridge.png 
---
![RAF Uxbridge estate image](src/images/rafuxbridge.png)

89 homes are earmarked for demolition on the former RAF Uxbridge estate.

The former MOD-owned living accommodation at the former RAF Uxbridge base is now derelict and in ownership of Hillingdon Council.

Hillingdon Council [says](https://www.hillingdon.gov.uk/article/13255/Council-to-bring-historic-former-RAF-site-back-to-life-to-meet-housing-demand) the site will _"provide new affordable homes ranging from one-bedroom properties to large family sized homes, subject to planning permission. Some will be available on the open market while the rest will be rented at London affordable rent."_

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

