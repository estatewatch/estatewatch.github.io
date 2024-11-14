---
name: Concorde Close
borough: hounslow
tags: hounslow
location: '[51.471914,-0.366567]'
ballot: Exempt
landlord: Home Group
developer: null
itla: null
total: 43
planning: Approved 
architect: Farrells
image: estates/src/images/cc3.png
---
![Concorde Close estate](src/images/cc3.png)

43 homes are under threat on the Concorde Close estate in Hounslow. The estate is owned and managed by housing association [Home Group](http://homegroup.org.uk).

Home Group applied to demolish and redevelop the estate in 2018. These plans were turned down by Hounslow's planning committee in January 2019 after residents [complained](https://democraticservices.hounslow.gov.uk/documents/s145242/CCRA_Forum_Presentation_30Aug2018.pdf) that they hadn't been consulted and that their estate was being run down deliberately to make the case for redevelopment.

![Concorde Close estate](src/images/screenshot-2021-08-30-at-08-26-54-powerpoint-presentation-open-forum-for-questions-from-the-public-maximum-of-30-minutes-...-.png)

Home Group now [claims](https://www.homegroup.org.uk/about-us/working-with-us/development-partners/regeneration/concorde-close/) that it is undertaking a full review of the scheme and revising its options as follows:

![Concorde Close estate](src/images/ccreview.png)

Home Group commissioned an [options appraisal study](/images/bnpp.pdf) for the estate by BNP Paribas, which claims that the homes on the estate have a negative NPV (Net Present Value) - i.e. the estimated cost of maintenance over the next 30 years exceeds the projected rental income.

![Concorde Close estate](src/images/concordenpv.png)

But the figure includes £2m of costs associated with a separate cost appraisal [report](/images/arcus.pdf) commissioned by Arcus and effectively double counts these costs in its own estimate (see appendix 7 of the BNP Paribas report).

---

__Links:__  
Home Group's website - [https://www.homegroup.org.uk/about-us/working-with-us/development-partners/regeneration/concorde-close/?](https://www.homegroup.org.uk/about-us/working-with-us/development-partners/regeneration/concorde-close/?) 

TRA website - [https://concordeclose.co.uk](https://concordeclose.co.uk)

2018 Planning Committee report: <https://democraticservices.hounslow.gov.uk/documents/s147678/Concorde%20Close-Final1.pdf>

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
