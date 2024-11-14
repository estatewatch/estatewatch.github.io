---
name: Fred Wigg and John Walsh Towers
borough: walthamforest
tags: walthamforest
location: '[51.560912,-0.013773]'
landlord: Waltham Forest Council
developer:
itla:
total: 200
ballot:
planning:
image: estates/src/images/FW_JW5.jpg
---
![Montague Rd estate image](src/images/FW_JW5.jpg)

Circa 200 homes in two towers on the Montague road estate have been earmarked for redevelopment.

The estate was initially one of 11 estates [identified](https://democracy.walthamforest.gov.uk/documents/s10654/4.2.%20LSP%20report%20-%20Estates%20Review.pdf) for possible redevelopment in a 2010 Estates Capacity Study.

![image of estates study](src/images/11estates.png)

Two tower blocks (Fred Wigg and John Walsh Towers) were earmarked for possible demolition in the capacity study.
However, in 2018 it was decided to refurbish instead of redevelop the two towers, but the botched commencement of refurbishment works has led the Council to re-consider demolition.

In 2023, Waltham Forest Council came forward with new proposals for redevelopment. Its latest proposals claimed that continuing refurbishment would cost £35-42m, while redevelopment would cost £250m.

The new redevelopment option would involve building circa 450-500 new homes which would be all be “affordable”, split 50:50 between social rent and shared ownership.

The redevelopment plans have been included within the borough's [Local Plan](https://www.walthamforest.gov.uk/sites/default/files/2024-08/Montague%20Road%20Estate%20%28R19116%29_0.pdf) before being subject to consultation and a resident ballot.

---

__Links:__

[https://walthamforestecho.co.uk/2023/07/28/council-confirms-plans-for-comprehensive-redevelopment-of-leytonstone-estate/](https://walthamforestecho.co.uk/2023/07/28/council-confirms-plans-for-comprehensive-redevelopment-of-leytonstone-estate/)

[Local Plan site allocation - 2024](https://www.walthamforest.gov.uk/sites/default/files/2024-08/Montague%20Road%20Estate%20%28R19116%29_0.pdf) 


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