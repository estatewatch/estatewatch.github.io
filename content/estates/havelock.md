---
name: Havelock estate 
borough: ealing
tags: ealing
location: '[51.500392,-0.370627]'
landlord: Ealing Council
developer: Catalyst Group
itla:
total: 500
ballot: Required
planning: Approved
architect: Pollard Thomas Edwards
image: estates/src/images/havelock4.jpg
---
![Havelock estate image](src/images/havelock4.jpg)

Circa 500 homes of the 845 homes on Ealing's Havelock estate in Southall remain earmarked for demolition.

The Havelock Estate is located in Southall, just to the north of the Grand Union Canal, and just to the south of the railway line to London Paddington. The estate exists within the wider context of the Southall Opportunity Area, which has been designated as the Mayor for intensive redevelopment.

Ealing Council says that it is redeveloping the estate in a joint venture with Catalyst housing association over four phases, and that the redeveloped estate will provide affordable rented homes (i.e. up to 80% market rent).

![Havelock estate image](src/images/havelockscreenshot.png)

The replacement of the existing social rented homes with the affordable rent tenure is confirmed in the [Mayor's planning report](https://www.london.gov.uk/sites/default/files/public%3A//public%3A//PAWS/media_id_19485///1_havelock_estate_masterplan_report.pdf) for the scheme.

![Havelock estate image](src/images/havelockgla.png) 

In April 2019, Ealing Council [announced](https://www.ealing.gov.uk/info/201104/housing_regeneration/374/havelock_estate/3) that it had written to all residents advising that a review of the scheme would take place.

There is no information relating to a right to return for tenants or leaseholders already decanted from phase 1.

Phase 1 of the scheme is complete and phase 2 is underway and nearing completion. Homes are being marketed for sale in anticipation by Catalyst at [www.southallvillage.co.uk](http://www.southallvillage.co.uk).

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
