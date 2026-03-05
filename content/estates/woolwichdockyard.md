---
name: Woolwich Dockyard estates
borough: greenwich
tags: greenwich
location: '[51.493426, 0.054357]'
landlord: Greenwich Council
developer:
itla: 
total: 670
ballot:
planning:
image: estates/src/images/woolwichdockyard.png
---
![Woolwich Dockyard estates image](src/images/woolwichdockyard.png)

670 council homes have been earmarked for potential redevelopment on the Woolwich Dockyard estate and neighbouring St. Mary's estate in Woolwich.

These been identified for comprehensive redevelopment in Greenwich's [2026 Local Plan](https://committees.royalgreenwich.gov.uk/documents/s17183/12.3%20Appendix%20A%20Part%203.pdf) with the potential to provide 1,700 new homes.

![Woolwich dockyard estate allocation image](src/images/woolwichdockyardallocation.png)

It is not known whether residents have yet been consulted on the plans.

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