---
name: Barnsbury estate 
borough: islington
tags: islington
location: '[51.536269,-0.114844]'
landlord: Newlon Housing Association
developer: Mount Anvil
itla:
total: 371
ballot: Approved
planning: Approved
image: estates/src/images/barnsbury1.png
---
![Barnsbury estate image](src/images/barnsbury1.png)

371 homes are under threat of demolition on Islington's Barnsbury estate.

The former Council estate was transferred to Newlon Housing association in 1999 under Islington's stock transfer policy.

In a joint venture with developer Mount Anvil, Newlon plans to demolish the 1970s blocks on the estate between Charlotte Terrace and Caledonian Road, including the two blocks next to the canal on Carnegie Street.

In March 2021, a residents ballot was held in which 73% of those who voted supported the proposals on a 79% turnout.

Newlon's formal [Landlord Offer](/images/BarnsburyOffer.pdf) made it clear that if residents voted against redevelopment then it wouldn't tackle the ongoing symptoms of the estate's neglect. 

![Barkantine estate image](src/images/BarnsburyNo.png)

This is an a recurring element in resident ballots, where residents are forced to choose between redevelopment or ongoing neglect. More examples can be found [here](/ballots).

In 2018, residents [accused](https://www.islingtongazette.co.uk/news/has-newlon-housing-trust-left-barnsbury-estate-to-rot-3795818) Newlon of neglecting the estate and _'running it into the ground'_.

Planning permission was granted in 2022 for 950 new homes of which 50% affordable.

---

__Links:__  

Newlon's website for the scheme: [https://betterbarnsbury.org.uk](https://betterbarnsbury.org.uk)

Newlon's [Landlord Offer](/images/BansburyOffer.pdf)

GLA [planning report](https://planning.london.gov.uk/pr/s/planning-application/a0i4J000006ceumQAA/20220438?tabset-c2f3b=2)

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

![Barkantine estate image](src/images/barnsbury2.png)
![Barkantine estate image](src/images/barnsbury3.png)
![Barkantine estate image](src/images/barnsbury4.png)