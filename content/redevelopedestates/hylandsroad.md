---
name: Hylands Road estate
borough: walthamforest
location: '[51.592118,-0.004060]'
image: estates/src/images/hylandsroad.jpg
landlord: Waltham Forest Council
developer:
itla:
total: 120
ballot: Exempt
planning: Demolished 
---
![Hylands road estate](../estates/src/images/hylandsroad.jpg)

Approximately 120 council homes have been demolished on the Hylands Road regeneration in Walthamstow.

The estate was one of 11 estates [identified](https://democracy.walthamforest.gov.uk/documents/s10654/4.2.%20LSP%20report%20-%20Estates%20Review.pdf) for possible redevelopment in a 2010 Estates Capacity Study.

![Hylands rd estate](../estates/src/images/11estates.png)

According to [this April 2019 Cabinet report](https://democracy.walthamforest.gov.uk/ieDecisionDetails.aspx?ID=3213) two of the 50 homes are owned by leaseholders. Planning permission was [approved](https://www.guardian-series.co.uk/news/18085677.plans-knock-hylands-road-council-housing-build-120-new-homes-approved/) in December 2019.

According to the above report, the estate is one of the 'emerging priority estates' earmarked for redevelopment in the Council's 'Estates Capacity Study' carried out by consultants Aecom in 2010 (para 3.3). 

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