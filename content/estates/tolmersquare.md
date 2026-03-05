---
name: Tolmers Square estate 
borough: camden
tags: camden
location: '[51.526033, -0.137517]'
landlord: Camden Council
developer:
itla: 
total: 50
ballot: Exempt
planning:
image: estates/src/images/tolmerscreenshot.png
---
![Clockhouse estate image](src/images/tolmerscreenshot.png)

Circa 50 council homes have been earmarked for potential redevelopment on the Tolmers Square estate near Euston.

Part of the estate has been identified in Camden's [Euston Area Plan](https://consultations.wearecamden.org/supporting-communities/eap-update/user_uploads/eap_2026-version_130126-1.pdf) as a potential site for redevelopment.

![Tolmers estate allocation image](src/images/tolmer.png)

Residents have launched a campaign to oppose demolition according to an [article](https://www.bbc.co.uk/news/articles/cq8g3zyj92go) by the BBC:

![BBC article](src/images/tolmersbbc.png)

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