---
name: Clichy estate 
borough: towerhamlets 
tags: towerhamlets
location: '[51.516104,-0.048942]'
landlord: LB Tower Hamlets
developer: Countryside
architect: PRP
itla: PPCR
total: 100
ballot: Approved
planning: Approved
image: estates/src/images/clichyestate.jpg
---
![Clichy estate image](src/images/clichyestate.jpg)

Circa 100 homes on Stepney's Clichy estate have been [earmarked for demolition earmarked for redevelopment](https://www.towerhamlets.gov.uk/lgnl/council_and_democracy/consultations/Housing-consultations/HAP_Houses.aspx) by Tower Hamlets Council.

In April 2020, the ballot of 'eligible' residents on Stepney's [Clichy estate](https://estatewatch.github.io/estates/towerhamlets/clichyestate/) went ahead despite [consultation sessions being cancelled due to the Coronavirus](https://www.towerhamlets.gov.uk/lgnl/council_and_democracy/consultations/Housing-consultations/HAP_Houses.aspx) and resulted in a 98% vote in favour of redevelopment on a [90% turnout](https://www.housingtoday.co.uk/news/tower-hamlets-estate-regeneration-plan-wins-resident-approval/5105879.article).

Residents had previously been consulted on an 'infill' option as well as full redevelopment. But the [info pack](https://www.whatdotheyknow.com/request/clichy_estate_ballot_paper_accom?nocache=incoming-1565802#incoming-1565802) sent to residents with the ballot papers asked only whether they wanted full redevelopment or not. Leaseholders were [told](https://www.whatdotheyknow.com/request/658746/response/1565802/attach/4/Ballot%20information%20requested%201.pdf) if they voted against redevelopment then they would be faced with major bills. Residents were told that if they don't vote for full redevelopment then they will likely be faced with the infill option anyway:  

![Clichy estate image](src/images/clichyballot.png)*Extract from the <a href="https://www.whatdotheyknow.com/request/658746/response/1565802/attach/4/Ballot%20information%20requested%201.pdf">info-pack</a> sent to residents with the ballot paper.*

The appointed architects <a href="https://www.prp-co.uk/">PRP</a> drew up plans for the redevelopment, which were approved by the Council's planning committee in April 2022.

The Mayor's [stage 2 report](https://planapps.london.gov.uk/planningapps/PA-21-02703) confirms that of the 412 new homes approved, only 36 will be social rent. A further 90 will be affordable rent up to Tower Hamlets Living Rent levels (around twice as much as social rent), 20 will be shared ownership and the remainder private for sale homes.

![Clichy estate tenure mix](src/images/clichytenuremix.png)

In December 2024, Tower Hamlets [signed](https://www.towerhamlets.gov.uk/News_events/2024/December/Countryside-Partnerships-named-preferred-partner-for-initial-works-on-407-home-Tower-Hamlets-estate-regeneration.aspx) a development partnership agreement with developer Countryside Properties.
---

__Links:__
GLA Stage 1 report:
[https://gla.force.com/pr/s/planning-application/a0i4J000006cArbQAE/20211263?tabset-c2f3b=2](https://gla.force.com/pr/s/planning-application/a0i4J000006cArbQAE/20211263?tabset-c2f3b=2)

The Mayor's [stage 2 planning report](https://planapps.london.gov.uk/planningapps/PA-21-02703)

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

![Clichy estate image](src/images/clichyestate2.png)

