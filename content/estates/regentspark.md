---
name: Regents Park estate 
borough: Camden
tags: camden
location: '[51.529042, -0.142059]'
landlord: Camden Council
developer: 
itla: 
total: 188
ballot: 
planning: 
architect: 
image: estates/src/images/regentspark.png
---
![Regents Park estate image](src/images/regentspark.png)

188 homes are earmarked for potential demolition on Camden's Church Way estate near Euston Station.

The estate has been vacated because of its proximity to the HS2 works being carried out at Euston Station and association noise/disturbance.

It was anticipated that the estate might be refurbished once the works are complete but now Camden's preferred option is wholesale redevelopment.

The estate's current situation is described in Camden's [2025 draft Euston Area Plan](https://camden.moderngov.co.uk/mgConvert2PDF.aspx?ID=128529).

_"In 2023, the Council entered into an agreement with HS2 whereby the Council committed to securing vacant possession of Cartmel, Coniston and Langdale blocks in the North area of Regents Park Estate. Cartmel, Coniston and Langdale are now immediately affected by the HS2 construction site in terms of unacceptable living conditions and daily construction disruption. The Council has received is considering seeking appropriate mitigation through the HS2 Settlement Agreement and is looking at options on how to proceed with the mostly vacated buildings. The Council’s preferred option is to replace the current buildings plus Stanhope Parade and the Children’s Centre with brand new high quality homes."_



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