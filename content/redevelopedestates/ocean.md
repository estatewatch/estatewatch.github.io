---
name: Ocean estate 
borough: Tower Hamlets
image: estates/src/images/ocean4.jpg
location: '[51.521884,-0.042882]'
landlord: Tower Hamlets
developer:
itla:
total: 1793
ballot:
planning: Demolished
---
![Ocean estate](../estates/src/images/ocean4.jpg)

The original Ocean Estate was built after WWII, with additions in 1964. The estate is one of the largest in London and in 2013 there were 7,459 people living in 2,574 households on the estate. The first phase of regeneration started in 1995 with funding from the Single Regeneration Budget (SRB), followed by the New Deal for Communities (NDC) programme in 2000. Both of these programmes saw decanting and demolition of original homes, with the replacement new homes owned and managed by social (not council) landlords. The most recent phases of demolition and rebuild were completed in May 2019, completing all the regeneration and development plans so far.

781 of the estate's homes have been retained with 1,793 demolished in total.

---

 ![Ocean estate](../estates/src/images/ocean1.jpg)
  ![Ocean estate](../estates/src/images/ocean2.jpg)
  ![Ocean estate](../estates/src/images/ocean3.jpg)
  ![Ocean estate](../estates/src/images/ocean4.jpg)
  ![Ocean estate](../estates/src/images/Nat_ocean.jpg)
  ![Ocean estate](../estates/src/images/Nat_ocean1.jpg)
  ![Ocean estate](../estates/src/images/Nat_ocean2.jpg)
  ![Ocean estate](../estates/src/images/Nat_ocean3.jpg)
  ![Ocean estate](../estates/src/images/Nat_ocean4.jpg)
  ![Ocean estate](../estates/src/images/Nat_ocean5.jpg)
  ![Ocean estate](../estates/src/images/Nat_ocean6.jpg)
  ![Ocean estate](../estates/src/images/Nat_ocean7.jpg)
  ![Ocean estate](../estates/src/images/Nat_ocean8.jpg)
  ![Ocean estate](../estates/src/images/Nat_ocean9.jpg)
  ![Ocean estate](../estates/src/images/Nat_ocean10.jpg)
  ![Ocean estate](../estates/src/images/Nat_ocean11.jpg)
  ![Ocean estate](../estates/src/images/Nat_ocean12.jpg)

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