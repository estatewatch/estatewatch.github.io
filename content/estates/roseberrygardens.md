---
name: Roseberry Gardens estate 
borough: sutton
tags: sutton
location: '[51.3679,-0.1929]'
landlord: Sutton Council
developer:
itla:
total: 150
ballot: Required
planning:
image: estates/src/images/roseberry3.jpg
---
![Roseberry Gardens estate image](src/images/roseberry3.jpg)

Circa 150 homes have been earmarked for demolition on Sutton's Roseberry Gardens estate.

The Roseberry Gardens estate is one of seven estates listed in [Sutton's Local Plan (2018)](https://drive.google.com/file/d/1MdX6GlaHDoBdG6CTsvjFaIuPtIa9id5O/view) for potential redevelopment:

![Roseberry Gardens estate image](src/images/suttonplan.png)

The estate is also clearly marked in Sutton's [Policy Map](http://sutton.addresscafe.com/app/exploreit/) as a potential renewal area:

![Roseberry Gardens estate image](src/images/suttonpolicymap.png)

The estate comprises around a dozen blocks of 2-3 storey maisonettes and around a dozen rows of 2-storey terraced homes. It is located directly adjacent to the [Benhill estate](/estates/sutton/benhillestate/) which is a much larger estate, and also earmarked for redevelopment in the local plan. 

The estate remains earmarked as a potential development site in Sutton's [2024 Local Plan](https://www.sutton.gov.uk/documents/d/guest/local-plan-issues-and-preferred-options-2024-).

![2024 local plan site allocation](src/images/2024lp.png)

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

