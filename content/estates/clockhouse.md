---
name: Clockhouse estate 
borough: sutton
tags: sutton
location: '[51.326066,-0.155669]'
landlord: Sutton Council
developer:
itla: 
total: 50
ballot: Exempt
planning:
image: estates/src/images/clockhouse.png
---
![Clockhouse estate image](src/images/clockhouse.png)

Circa 50 council homes have been earmarked for potential redevelopment on Sutton's Clockhouse estate in Coulsdon.

The estate has been identified in Sutton's [draft 2024 Local Plan](https://www.sutton.gov.uk/documents/d/guest/local-plan-issues-and-preferred-options-2024-) as a potential site for redevelopment.

![Clockhouse estate image](src/images/clockhousesites.png)


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