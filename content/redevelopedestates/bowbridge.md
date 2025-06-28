---
name: Bow Bridge estate 
borough: towerhamlets 
image: estates/src/images/warren.jpg
location: '[51.527082,-0.016940]'
landlord: Poplar HARCA
developer: Muse
itla:
total: 52
ballot: Exempt
planning: Approved
---
![bow bridge estate](../estates/src/images/warren.jpg)

52 homes have been demolished on the Bow Bridge estate in Tower Hamlets.

The estate was transferred to housing association Poplar HARCA on 27th November 2006 under the borough's stock transfer policy, with the specific intention of securing significant improvement to the quality of the homes and environment.

In 2022, Poplar HARCA demolished an 11 storey tower (Warren House), a row of shops with dwellings above, and a GP surgery at Stroudley Walk on the estate.

The scheme has been [granted an exemption](/approved/ballotexemptions) from the Mayor's requirement to ballot residents on the demolition of their homes and has been awarded Mayoral grant funding.

In 2015 Poplar HARCA secured planning permission for the redevelopment of the Site to provide 153 residential units, with community and retail floorspace. The planning applications (outline and phase one detailed) have subsequently lapsed (LPA ref: PA/10/00373 and PA/10/00374). 

A Compulsory Purchase Order was submitted in 2017 to remove the removing leaseholders and shopkeepers.

After entering into a joint-venture agreement with developer MUSE, a new planning application was submitted and approved in 2020, for the demolition of the existing homes and replacement with 274 new homes of which 115 'affordable'. Of the affordable housing 82 homes will be London Affordable Rent and 33 shared ownership.

The section 106 agreement has not been made public so it is impossible to know whether the approved tenures have been legally secured.
 
---

__Links:__  
Planning application documents - [https://development.towerhamlets.gov.uk/online-applications/applicationDetails.do?activeTab=documents&keyVal=DCAPR_132751&documentOrdering.orderBy=date&documentOrdering.orderDirection=descending](https://development.towerhamlets.gov.uk/online-applications/applicationDetails.do?activeTab=documents&keyVal=DCAPR_132751&documentOrdering.orderBy=date&documentOrdering.orderDirection=descending)

Mayor's stage 1 report - [https://gla.force.com/pr/s/planning-application/a0i4J000002SXTCQA4/20206398?tabset-c2f3b=2](https://gla.force.com/pr/s/planning-application/a0i4J000002SXTCQA4/20206398?tabset-c2f3b=2)

2017 Compulsory Purchase Order - [https://www.towerhamlets.gov.uk/Documents/Planning-and-building-control/Strategic-Planning/Consultation-and-engagement/FINAL_VERSION_Bow_Bridge_SoR_MSU_280317.pdf](https://www.towerhamlets.gov.uk/Documents/Planning-and-building-control/Strategic-Planning/Consultation-and-engagement/FINAL_VERSION_Bow_Bridge_SoR_MSU_280317.pdf)

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


