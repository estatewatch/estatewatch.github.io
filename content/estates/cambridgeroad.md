---
name: Cambridge Road estate
borough: kingston
tags: kingston
location: '[51.408046,-0.287284]'
ballot: Approved
landlord: RB Kingston
developer: Countryside Properties
architect: Patel Taylor
itla: PPCR
total: 820
planning: Approved
image: estates/src/images/cambridge3.jpg
---
![Cambridge road estate image](src/images/cambridge3.jpg)

820 homes have been earmarked for demoliton on Kingston's Cambridge Road estate. 
In October 2016, Kingston published a [Direction of Travel document](https://www.kingston.gov.uk/downloads/download/611/direction_of_travel_for_kingston), prepared by Kingston Council in collaboration with the Mayor of London, which identified potential opportunities for growth, infrastructure and investment in the borough. The Cambridge Road estate was one of the sites identified for potential redevelopment.

In November 2019, Kingston signed a development agreement with developer Countryside Properties for the redevelopment of the estate.

In March 2020, residents were balloted on the redevelopment proposals with the majority of residents voting in favour of redevelopment.

This was perhaps the result of Kingston's ['Landlord offer'](/images/cambridgeroadoffer.pdf) to residents ahead of the ballot, which told them that if they voted against demolition then they would only see essential maintenance to their estate and repairs as reported. 

![Cambridge road estate image](src/images/cambridgeroadoffer.png)

In November 2020, the developer submitted a [planning application](https://publicaccess.kingston.gov.uk/online-applications/applicationDetails.do?activeTab=documents&keyVal=QK385KNH00H00) seeking approval for demolition of the estate's 832 existing homes and their replacement by 2,170 homes of which just 33.5% affordable housing.

This is in contradiction to the Council's own policy and Mayor's policy which both require a minimum of 50% affordable housing on public-owned land. The Mayor's [stage 1 report](https://gla.force.com/pr/s/planning-application/a0i4J000002UOhyQAG/20206860?tabset-c2f3b=2) for the planning application says nothing about his 50% affordable housing requirement or the fact that the application falls short of it.

The planning application says that 767 of the 2,170 new homes will be social rent but these will be predominantly smaller flats (531 of the social rented homes will be 1 or 2-beds). It says that in addition, approximately 100 new homes will be earmarked as shared equity homes for the estate's leaseholders - depending on take up.

The application also proposes 848 new parking spaces despite Norbiton train station being located just 400m to the north of the estate.

The [viability appraisal](https://publicaccess.kingston.gov.uk/online-applications/files/B700018DECE543EDE307FE31F2767E57/pdf/20_02942_FUL-FINANCIAL_VIABILITY_APPRAISAL_-DEC._2020-4589185.pdf) submitted with the planning application discloses some interesting information about the financing of the scheme.

Kingston Council is stumping up nearly £200M to see this scheme through. This includes:

* £80M in leaseholder buyback costs
* £11.2M in planning costs
* £130M for the social rented units of which £60M grant funding.
* £29M for the shared equity units for leaseholders

Combined with £60M funding agreed by the Mayor, that's £250M of public money to replace a Council estate of 832 homes - more than £300k is being spent demolishing and replacing each home.

Despite it being one of the Mayor's requirements for estate redevelopments, the application provides no cost/benefit analysis of refurbishment vs demolition. So it is impossible to say whether these public funds could be better spent exploring the [environmental, social and economic benefits of refurbishment](http://estatewatch.london/refurbishment). Neither does the application say anything about the Mayor's requirement that demolition is pursued as a last resort. The Mayor's [stage 1 report](https://gla.force.com/pr/s/planning-application/a0i4J000002UOhyQAG/20206860?tabset-c2f3b=2) for the scheme simply says this:

![Cambridge road estate image](src/images/screenshot-2021-08-26-at-18-07-29-pdu-case-report-xxxx-yy-date-gla-6860-stage-1-report-28-02-21-pdf.png)

Another interesting point noted from the planning application is that the developer is going to pay £1.8M in carbon offset payments, because the new homes won't be as energy efficient as the Mayor's zero carbon planning policies require.

The planning application's [Energy Statement](https://publicaccess.kingston.gov.uk/online-applications/files/7E2224EA3ACA29219051C7CA067126FF/pdf/20_02942_FUL-CRE_-_ENERGY_STATEMENT_PART_1-4584307.pdf) acknowledges that the development will result in over 55,000 tonnes of CO2 emissions in the construction of the new homes alone.

The planning application was approved in January 2022. I Autumn 2022, Kingston served a Compulsory Purchase Order on the estate. Its [Statement of Reasons for the CPO](https://www.cambridgeroadestate.com/assets/pdf/FINAL_Statement_of_Reasons_updated.pdf) gives the following reasons justifying the estate's redevelopment:

> "The Estate suffers from significant condition issues but also fundamental design flaws that would make it impossible to deliver modern day ‘secure by design’ (including designing out crime and improving accessibility standards) through refurbishment due to layout and changes of levels across the site." (Para 4.16)

> "The layout of the Estate makes it easier for criminals to 'ply their trade'. Dark stairwells, alleyways and obscure hotspots mean the area is difficult to police. Through regeneration there is an opportunity to design out crime as the layout of the scheme will be open and accessible, thus reducing the opportunity for crime to be as prevalent as it is today." (Para 4.22)

The Statement also confirms that (like many other schemes) Kingston's offer of a 'shared equity' home to leaseholders is gatekept behind a 'shared ownership' scheme in which rent must be paid on the unowned equity: 

> "If a resident owner does not have the required equity or enough funds to buy a new home outright, the Council provide help through shared equity or shared ownership (depending on circumstances)." (Para 8.11)

Only 4 of the estate's 42 leaseholders who have relocated to date, have applied for and received an offer of a shared equity home. (Para 8.10)

---

__Links:__

You can view the planning application documents on Kingston's planning portal [here (ref:20/02942)](https://publicaccess.kingston.gov.uk/online-applications/applicationDetails.do?activeTab=documents&keyVal=QK385KNH00H00).

The Mayor's stage 1 report is available [here.](https://gla.force.com/pr/s/planning-application/a0i4J000002UOhyQAG/20206860?tabset-c2f3b=2)

The scheme has its own website here: [https://cambridgeroadestate.com](https://www.cambridgeroadestate.com)

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

![Cambridge road estate image](src/images/cambridge4.jpg)
![Cambridge road estate image](src/images/croadaerial.png)