---
name: Marks Gate estate 
borough: barkinganddagenham
tags: barkinganddagenham
landlord: Barking and Dagenham Council
developer: BeFirst
itla:
total: 500
location: '[51.581715,0.138200]'
ballot: Required
planning: Pending
image: estates/src/images/padnall.png
---
![Marks Gate estate image](src/images/padnall.png)

Circa 500 homes have been earmarked for potential demolition by Barking and Dagenham Council.

Barking and Dagenham's [draft Local Plan 2019-34](https://www.lbbd.gov.uk/sites/default/files/attachments/LBBD-Draft-Local-Plan-Reg-18-Consultation-version_211119.pdf) has singled out the Marks Gate estate and neighbouring Chadwell Heath industrial estate area for comprehensive redevelopment on the basis that it will soon benefit from a new Crossrail station.

![Marks Gate estate image](src/images/mglp2.png)

It says that detailed proposals will be drawn up in a masterplan and presented in a Supplementary Planning Document.

![Marks Gate estate image](src/images/mglp1.png)

In the meantime, 53 homes on the estate have been earmarked for immediate redevelopment by the Council in Padnall and Reynolds Courts.

Barking and Dagenham's [options appraisal report](https://modgov.lbbd.gov.uk/internet/documents/s87069/Estate%20Renewal%20Programme%20Report%20-%20App.%201%20Options%20Appraisal.pdf) claims that residents in these blocks have reported damp and condensation issues and that the homes on this site don't maximise their economic potential.

![Marks Gate estate image](src/images/padnalleconomic.png)

The scheme is being progressed by the Council in conjunction with its subsidiary affordable housing company [Reside](https://www.lbbd.gov.uk/affordable-rents-reside-housing) which provides intermediate rented housing _"to people who are in employment, but can’t afford to buy or rent privately and have limited access to social housing"_

---

__Links:__

BeFirst's dedicated website for the scheme: <https://yourcall.befirst.london/hub-page/marks-gate-matters>

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

![Marks Gate estate image](src/images/mgtower.png)
![Marks Gate estate image](src/images/mgaerialwhole.png)
