---
name: Lisson Green estate
borough: westminster
tags: westminster
location: '[51.525955,-0.167721]'
landlord: Westminster Council
developer:
itla:
total: 500
ballot: Required
planning: Pending
image: estates/src/images/lissongreen3.jpg
---
![Lisson Green estate image](src/images/lissongreen3.jpg)

Circa 500 homes are under threat of potential demolition on Westminster's Lisson Green estate in Maida Vale.

The estate, which is situated beside the Regent's Canal and Regent's Park sits [within](https://lbhf.maps.arcgis.com/apps/webappviewer/index.html?id=7cab3cdf6e344a0fb24df59ed6b9bdc5) an area that has been designated a __Housing Renewal__ zone in Westminster's [draft 2019-2040 Local Plan](https://www.westminster.gov.uk/cityplan2040).

![Lisson Green estate image](src/images/renewalarea.png)

The estate is also inside the boundary of the __Edgeware Road Housing Zone__, one of [30 special housing zones](https://www.london.gov.uk/what-we-do/housing-and-land/increasing-housing-supply/housing-zones#acc-i-42741) designated by the Mayor to deliver accelerated housing development. The Edgeware Road zone is expected to deliver 1700 new homes.

 
In addition, the estate is within the boundary of the Church Street regeneration area. Whilst its redevelopment does not form part of the current Church Street proposals, the [Church Street masterplan](https://www.westminster.gov.uk/sites/default/files/ev_h_008_church_street_masterplan_wcc_2017.pdf) does consider the estate _'suitable for future development'_ and the Council _'intends to develop dialogue with residents .. to better understand how they would like their area to develop and be integrated within the wider regeneration opportunity.'_ 

![Lisson Green estate image](src/images/otheropportunities.png)

In 2021, two blocks on the Lisson Green estate were incorporated into the Church St regeneration plans and have been demolished.

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

  ![Lisson Green estate image](src/images/lg1.jpg)
  ![Lisson Green estate image](src/images/lg2.jpg)
  ![Lisson Green estate image](src/images/lg3.jpg)
  ![Lisson Green estate image](src/images/lg4.jpg)
  ![Lisson Green estate image](src/images/lg5.jpg)
  ![Lisson Green estate image](src/images/lg6.jpg)
  ![Lisson Green estate image](src/images/lg7.jpg)
  ![Lisson Green estate image](src/images/lg8.jpg)
  ![Lisson Green estate image](src/images/lg9.jpg)
  ![Lisson Green estate image](src/images/lg10.jpg)
  ![Lisson Green estate image](src/images/lg11.jpg)
  ![Lisson Green estate image](src/images/lg21.jpg)
  ![Lisson Green estate image](src/images/lg22.jpg)
