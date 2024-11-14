---
name: Ladderswood estate 
borough: enfield
tags: enfield
location: '[51.613312,-0.137395]'
landlord: Enfield Council
developer: Mulalley/One Housing Group
itla:
total: 100
ballot: Exempt
planning: Approved
architect: VZDV
image: estates/src/images/lwood3.png
---
![Ladderswood estate image](src/images/lwood3.png)

Circa 100 homes remain earmarked for demolition on Enfield's Ladderswood estate. 

Around 60 homes have already been demolished in phase one of the scheme which is nearing completion.

The scheme is being progressed in a joint venture between Enfield Council, developer Mulalley and housing association One Housing.

The redeveloped estate will comprise 517 new homes of which 29% 'affordable'. The Mayor's [planning report](https://www.london.gov.uk/sites/default/files/public%3A//public%3A//PAWS/media_id_205193///ladderswood_estate_report.pdf) confirms that the replacement 'social' housing will be affordable rent:

![Ladderswood estate image](src/images/ladderswoodlr.png)

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

