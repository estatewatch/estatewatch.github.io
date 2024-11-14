---
name: Morden Regeneration Zone
borough: merton
tags: merton
location: '[51.402088, -0.192285]'
landlord: LB Merton
developer:
itla:
total: 200
ballot: Exempt?
planning:
image: estates/src/images/mordenregenerationzone.png 
---
![Morden Regen estate image](src/images/mordenregenerationzone.png)

Circa 200 homes have been identified for redevelopment in Merton's draft [2024 Local Plan](https://www.merton.gov.uk/system/files/lbm31_mertons_local_plan_incorporating_proposed_modifications_feb24_final.pdf)

![Morden Regen estate image](src/images/mordenregenerationzonesite.png)

Given that whilst many but not all of the homes involved in this scheme are in council ownership but this is not technically a housing estate, it is unclear whether the Mayor's policies on resident ballots and estate regeneration will apply to this scheme.


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


![Morden Regen estate image](src/images/mordenregenzone.png", "morden regen zone" %}