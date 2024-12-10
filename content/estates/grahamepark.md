---
name: Grahame Park estate
borough: barnet
tags: barnet
location: '[51.602271,-0.244782]'
landlord: Barnet Council
developer: Notting Hill Genesis
itla:
total: 1314
ballot: Exempt
planning: Approved
architect: Mae
image: estates/src/images/grahamepark4.jpg
---
![Grahame Park estate image](src/images/grahamepark4.jpg)

1,314 homes are under threat of demolition at Barnet's Grahame Park Estate. The estate was constructed in the early 1970s by the GLC on the site of the former Hendon Aerodrome.

It and is Barnet’s largest housing estate with [1,777 homes](https://www.barnet.gov.uk/planning-and-building/planning-policies/local-plan/grahame-park-july-2016). Barnet Council appointed Notting Hill Genesis in 2002 to [redevelop](https://www.barnet.gov.uk/grahame-park) approximately three quarters of the estate (463 homes will be retained).

A small initial redevelopment phase was completed in 2012 (stage A). Notting Hill Genesis recently [received planning consent](https://www.insidehousing.co.uk/news/news/sadiq-khan-approves-housing-associations-2000-home-estate-regeneration-plan-66346) for the next phase (plots 10-12) after its application was initially refused due to the proposed net loss of social rented housing. This phase will provide 32 homes at 'target rents' to existing permanent tenants, 314 London Affordable Rented and 699 shared ownership homes.

![Grahame Park estate image](src/images/gparkphases.png)

A [GLA briefing paper](https://www.london.gov.uk/sites/default/files/gla_grahame_park_estate_fva_comments_march_2020_redacted.pdf) confirms that the land is being transferred to Notting Hill Genesis at no cost (para 4.2). This is also confirmed in section 6.2 of the [Financial Viability Assessment](https://www.london.gov.uk/sites/default/files/gp_stage_b_financial_viability_assessment_report_v4.0.pdf). 

The [Financial Viability Assessment](https://www.london.gov.uk/sites/default/files/gp_stage_b_financial_viability_assessment_report_v4.0.pdf) commissioned by Notting Hill Genesis and submitted to the GLA justifying the low levels of social rented housing, confirms that Notting Hill's target profit for this phase of the scheme is £105m and that current estimates say it will achieve £66m.

![Grahame Park estate image](src/images/gparkprofit.png)

The GLA's stage 1 report says that _"while Plots 13 to 16 are expected to come forward over the longer term; Plots 17 to 21 are not expected to come forward for development. "_

In May 2020, it was [reported](https://www.insidehousing.co.uk/news/news/sadiq-khan-approves-housing-associations-2000-home-estate-regeneration-plan-66346) that Barnet Council had agreed to spend £33m on repairs to the estate for maintenance upkeep whilst redevelopment is pending.

In December 2020, An [FOI request](https://www.whatdotheyknow.com/request/affordable_housing_funding_annua) has revealed that housing association [Notting Hill Genesis](https://www.nhg.org.uk) charged higher rents than it was supposed to for replacement social housing on the completed Phase A of the scheme - in breach of both funding conditions and the planning permission.

A compliance audit by the GLA found that on first let, Notting Hill had charged nearly £20 per week more than the Mayor's permitted benchmark levels for London Affordable Rent.

![Grahame Park estate image](https://35percent.org/img/gparkaudit2.png)

Whilst the GLA audit considered this a 'high breach' of funding conditions, it failed to impose any kind of penalty on Notting Hill Genesis.

The Mayor's audit also made no mention of the fact that the planning permission envisaged the tenure of these homes on Phase A to be social rent, which is even lower than the Mayor's London Affordable Rent benchmark levels.

This is because the [scope of the Mayor's audit](https://www.london.gov.uk/file/46480) is limited only to verifying that rents are in line with grant funding conditions on first let. The Mayor's audit is not concerned with rent levels on subsequent lets or whether the rents are in line with the tenure required by the planning consent.

![Grahame Park estate image](https://35percent.org/img/glachecklist.jpg)

Details of the planning consent for Phase A are available on Barnet's planning portal [here](https://publicaccess.barnet.gov.uk/online-applications/applicationDetails.do?activeTab=documents&keyVal=NEVAH5JIFWV00) and details of the Mayor's annual compliance audit are available on the GLA website [here](https://www.london.gov.uk/sites/default/files/11_gla_cfg_section_9._compliance_audit_-_august_2020.pdf).

The Grahame Park scheme is being funded by the Mayor and has been exempted from his requirement to ballot residents on the demolition of their homes. It is located directly adjacent to another large estate redevelopment scheme - the [Douglas Bader Park estate](https://estatewatch.london/estates/barnet/douglasbaderpark/).

Notting Hill Genesis's 2024 [Newsletter](https://www.nhg.org.uk/media/t1fnp3lj/grahame-park-regeneration-2024-updates.pdf) for residents, confirms that phase 1 of the scheme is nearing completion and demolition works are about to commence on phase 2. The final phase of the scheme is not expected to complete until Spring 2032.

---

__Links:__

[Mayor's Stage 2 planning report](https://gla.force.com/pr/s/planning-application/a0i4J0000003Tu8QAE/20200543hs2?tabset-c2f3b=2)

[Barnet Planning Portal - planning application supporting docs (ref:19/5493/OUT)](https://publicaccess.barnet.gov.uk/online-applications/applicationDetails.do?activeTab=documents&keyVal=PZ5MNBJI0I700)

Municipal Dreams website (history of the estate): <https://municipaldreams.wordpress.com/2024/10/15/grahame-park-barnet-part-i/>

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

![Grahame Park estate image](src/images/grahamepark.jpg)
