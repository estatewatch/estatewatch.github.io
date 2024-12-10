---
name: Sutton Court estate 
borough: sutton
tags: sutton
location: '[51.3577,-0.1901]'
landlord: Sutton Council
developer:
itla:
total: 150
ballot:
planning:
image: estates/src/images/suttoncourt.jpg
---
![Sutton Court estate image](src/images/suttoncourt.jpg)

Circa 150 homes have been earmarked for potential demolition at the Sutton Court estate.

The Sutton Court estate is one of seven estates listed in [Sutton's Local Plan (2018)](https://drive.google.com/file/d/1MdX6GlaHDoBdG6CTsvjFaIuPtIa9id5O/view) for potential redevelopment:

![Sutton Court estate image](src/images/suttonplan.png)

It is also earmarked in Sutton's [Policy Map](http://sutton.addresscafe.com/app/exploreit/) as a potential renewal area:

![Sutton Court estate image](src/images/suttonpolicymap.png)

The estate is close to the train station and comprises six 3-storey blocks and two 7-storey blocks of flats set around generous areas of green space, trees and a games court. 

The estate remains identified in Sutton's [draft 2024 Local Plan](https://www.sutton.gov.uk/documents/d/guest/local-plan-issues-and-preferred-options-2024-) as a site for redevelopment.

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
 
  ![Sutton Court estate image](src/images/suttoncourt2.jpg)
  ![Sutton Court estate image](src/images/suttoncourt3.jpg)
  ![Sutton Court estate image](src/images/suttoncourt4.jpg)
  ![Sutton Court estate image](src/images/suttoncourt5.jpg)
  ![Sutton Court estate image](src/images/suttoncourt6.jpg)
  ![Sutton Court estate image](src/images/suttoncourt7.jpg)
  ![Sutton Court estate image](src/images/suttoncourt8.jpg)

