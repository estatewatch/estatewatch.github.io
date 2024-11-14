---
name: Ledbury estate
borough: southwark
tags: southwark
location: '[51.481221,-0.061766]'
ballot: Approved
landlord: Southwark Council
developer: null
itla: Open Communities
total: 224
planning: Approved
architect: Karakusavic Carson
image: estates/src/images/ledbury3.jpg
---
![Ledbury estate image](src/images/ledbury3.jpg)

224 homes have been earmarked for demolition on Southwark's Ledbury estate off the Old Kent Road.

The estate was built between 1968 and 1970 using the Long Panel System (LPS) construction method.

The Ronan Point collapse in 1968 showed that some LPS systems were unsafe, but successive governments failed to ensure strengthening works were carried out. Investigations following the Grenfell Tower fire have resulted in several LPS buildings being deemed unsafe.

In April 2021, Southwark Council balloted residents on whether their homes should be demolished or remediation works commissioned. 56% of eligible residents took part and 86% of these voted for demolition.

[Council briefing papers](https://moderngov.southwark.gov.uk/documents/s100047/Report%20Ledbury%20Estate%20Towers.pdf) confirm that as of May 2021, of the 224 homes on the estate, 23 secure tenants remain, 18 are being occupied by those with leasehold interests and 103 are being used as temporary accommodation.

The same report confirms that the Mayor has allocated £27m funding towards the redevelopment of the estate. 

Planning was approved in 2022 for the construction of 340 new homes, of which 260 social rent.

---

__Links:__
[https://www.ledburyestate.com/](https://www.ledburyestate.com/)

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


