---
name: Regina Road estate 
borough: croydon
tags: croydon
location: '[51.400864,-0.069866]'
landlord: Croydon Council
developer:
itla:
total: 191
ballot: Pending
planning: Pending
image: estates/src/images/reginaroad.jpg
---
![Regina Rd estate image](src/images/reginaroad.jpg)

191 homes have been earmarked for demolition on Croydon's Regina Road estate.

The estate was earmarked for demolition in a [November 2022 Cabinet report](https://democracy.croydon.gov.uk/documents/s41429/12a%20Report%20-%20Regina%20Road.pdf) in which Croydon Council says it wants to demolish the three tower blocks on Regina Road that were at the centre of a scandal last year because of the appalling living conditions caused by leaks and damp.

The report also includes the low-rise maisonette blocks and two-storey blocks on the estate within the boundary of the potential redevelopment plans.

![Regina Rd estate image](src/images/reginaroadplan.jpg)

A budget of £103m for the demolition, construction and property purchases was authorised by Croydon's Cabinet on 22 March 2023 and 26 July 2023.

The Landlord Offer was put to Ballot on 22 May 2023. 81.7% of eligible voters voted 88.1% in favour of the Council’s Landlord offer to redevelop their homes

In June 2024, Croydon Council's Cabinet [agreed](https://democracy.croydon.gov.uk/documents/s59160/Regina%20Road%20Cabinet%20Report%20-%20Project%20Update%2015.07.24.pdf) to progress the scheme and split it into two phases. 

Phase 1 will comprise 225 new Council homes (minimum 200 social rented and up to 25 leaseholder/freeholder products) and a kindergarten/ community facility.  Phase 2 will comprise a minimum of 155 private homes.

Croydon was [awarded](https://insidecroydon.com/2024/07/13/regina-road-demolition-set-to-begin-thanks-to-54m-gla-grant/) a grant allocation of £53.8m for the scheme by the GLA in March 2024.

---

__Links:__

June 2024 [Cabinet report](https://democracy.croydon.gov.uk/documents/s59160/Regina%20Road%20Cabinet%20Report%20-%20Project%20Update%2015.07.24.pdf)

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

