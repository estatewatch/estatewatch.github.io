---
name: Brookhill Close estate 
borough: greenwich
tags: greenwich
location: '[51.483649,0.065543]'
landlord: Hyde Housing Association
developer:
itla:
total: 80
ballot: Approved
planning: Approved
image: estates/src/images/bhill2.png
---
![Brookhill close estate image](src/images/bhill2.png)

80 homes have been approved for demolition on Greenwich's Brookhill Close estate.

A ballot was approved in May 2019 and plans are now being drawn up in a preliminary design stage before going out to consultation. Hyde Housing Association, which owns the estate, [says that the plans will](https://www.hyde-housing.co.uk/news/estate-regeneration/putting-resident-engagement-at-the-heart-of-regeneration/) provide 272 new flats and houses with _"76 social rented homes for existing residents and London Affordable Rent homes for new tenants"_. There will also be 64 homes for shared ownership and a further 132 for private sale.

A planning application for 254 new homes was [approved](https://committees.royalgreenwich.gov.uk/Data/Planning%20Board/202302211830/Agenda/4.0%20-%20Brookhill%20Close%20Report.pdf) in February 2023. 50% of which will be London Affordable Rent and the remainder shared ownership.

Leaseholders and freeholders on the estate are being offered a direct home swap for a new home on the redeveloped estate at no cost.

---

__Links:__ 
GLA [planning reports](https://planning.london.gov.uk/pr/s/planning-application/a0i4J000006cabPQAQ/20220377?tabset-c2f3b=2)

LB Greenwich planning committee report: <https://committees.royalgreenwich.gov.uk/Data/Planning%20Board/202302211830/Agenda/4.0%20-%20Brookhill%20Close%20Report.pdf>

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

![Brookhill close estate image](src/images/bhill1.png", "Brookhill" %}
![Brookhill close estate image](src/images/brookhillaerial.png", "Brookhill Close estate" %}
