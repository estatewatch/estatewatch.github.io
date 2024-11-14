---
name: Mansell Street estate
borough: cityoflondon
tags: cityoflondon
location: '[51.512782,-0.073840]'
landlord: Guiness Housing Association
developer:
itla:
total: 249
ballot: Required
planning:
image: estates/src/images/mansell2.jpg
---
![Mansell Street estate image](src/images/mansell2.jpg)

249 homes are under threat of demolition by Guinness housing association on the Mansell Street estate in the City of London.

The estate is listed as a 'Key Area of Change' in the local plan: [https://www.cityoflondon.gov.uk/services/environment-and-planning/planning/planning-policy/local-plan/Documents/draft-city-plan-2036.pdf](https://www.cityoflondon.gov.uk/services/environment-and-planning/planning/planning-policy/local-plan/Documents/draft-city-plan-2036.pdf)

In 2016, Guiness submitted a planning application for redevelopment of the estate but this was subsequently withdrawn after protests from residents.

In June 2019, it was [reported](https://www.citymatters.london/mansell-street-estate-residents-must-final-say/) that the stalled previous plans were currently being reworked before being presented to residents once again.

The City of London's [draft 2024 Local Plan](https://www.cityoflondon.gov.uk/assets/Services-Environment/City-Plan-2040.pdf) lists the redevelopment of the Mansell Street estate as one of its key areas of change:

![Mansell Street estate image](src/images/mansell2024.png)

---

__Links:__  
[GLA stage 1 report for the withdrawn 2016 application](https://www.london.gov.uk/what-we-do/planning/planning-applications-and-decisions/planning-application-search/mansell-street-estate-haydon-sqaure)

[Guiness website FAQs on the Mansell Street scheme](https://www.guinnesspartnership.com/case-study/mansell-street-city-london/)

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

  ![Mansell Street estate image](src/images/mansell1.jpg)
 
  ![Mansell Street estate image](src/images/mansell3.jpg)
  ![Mansell Street estate image](src/images/mansell4.jpg)
  ![Mansell Street estate image](src/images/mansell5.jpg)
  ![Mansell Street estate image](src/images/mansell6.jpg)
  ![Mansell Street estate image](src/images/mansell7.jpg)
  ![Mansell Street estate image](src/images/mansell9.jpg)
  ![Mansell Street estate image](src/images/mansell10.jpg)
  ![Mansell Street estate image](src/images/mansell11.jpg)
  ![Mansell Street estate image](src/images/mansell12.jpg)


