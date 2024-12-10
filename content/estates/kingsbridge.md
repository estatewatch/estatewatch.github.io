---
name: Kingsbridge estate
borough: towerhamlets
tags: towerhamlets
location: '[51.493200,-0.025874]'
landlord: One Housing Group
developer:
architect: Howarth Tompkins
itla: Mike Tyrell
total: 134
ballot: Approved
planning: Pending
image: estates/src/images/kbridge.jpg
---
![Kingsbridge estate image](src/images/kbridge.jpg)

134 homes are under threat on the Kingsbridge estate in Tower Hamlets.

As a result of stock transfer in 2005, [One Housing Group](https://onehousing.co.uk) currently owns 2,027 former council homes across four estates on the Isle of Dogs.

In 2014 OHG produced a [52 page report - ‘Project Stone’](/images/ProjectStone.pdf) setting out proposals to replace all four of its Isle of Dogs estates in a joint venture with developer Argent:  

 * Barkantine estate - 769 homes.
 * [St John’s estate](/estates/towerhamlets/stjohns/) - 607 homes.
 * [Samuda estate](/estates/towerhamlets/samuda/) - 517 homes.
 * [Kingsbridge estate](/estates/towerhamlets/kingsbridge/) - 134 homes.

Project Stone proposed just 30% of the redeveloped properties as affordable housing. Of these, 17% would have been shared ownership and 13% would have been affordable rented. 

![Kingsbridge estate image](src/images/pstone.png)

The plans met with [organised opposition](http://www.4estatesforum.org.uk) from residents on the four estates who had not been consulted and after the Mayor of Tower Hamlets intervened, OHG scrapped its masterplan and agreed that proposals would only be pursued after a 'conversation' with residents.

In May 2017, OHG applied to the Mayor in a bid for funding for the redevelopment of the Kingsbridge estate and has now started 'conversations' with residents in specific blocks of three of the four estates (Samuda estate excluded): 

![Kingsbridge estate image](src/images/ohgconversations.png)

The Mayor has designated the Isle of Dogs as an 'opportunity area' and his [planning framework](https://airdrive-secure.s3-eu-west-1.amazonaws.com/london/dataset/isle-of-dogs-and-south-poplar-opportunity-area-planning-framework/2019-10-18T14%3A33%3A23/Appendix%20A%20Isle%20of%20Dogs%20and%20South%20Poplar%20OAPF.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJJDIMAIVZJDICKHA%2F20200603%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200603T161828Z&X-Amz-Expires=300&X-Amz-Signature=e9f1e1b74bfcd4ea3f185de6fa62ea24ad89c7701eee317bad9d78024ba5474f&X-Amz-SignedHeaders=host) for the area envisages 49,000 new homes some of which provided through the regeneration of existing housing estates:

![Kingsbridge estate image](src/images/isleofdogsoapf.png)

In 2019, One Housing Group created a residents steering group on the Kingsbridge estate to consider different options for the possible regeneration of 134 homes in Michigan House, Montrose House and Montcalm House.

In December 2022, a ballot was held for residents to vote if the regeneration proposals to demolish the existing blocks and build new homes should go ahead. A turnout of 75.6% of eligible voters took part in the ballot, of which 85.4% voted ‘yes’ and 14.6% voted ‘no’.

---

__Links:__  
Feb 2020 newsletter from One Housing - [https://www.onehousing.co.uk/__data/assets/pdf_file/0019/17731/New-Mill-Newsletter-February-2020.pdf](https://www.onehousing.co.uk/__data/assets/pdf_file/0019/17731/New-Mill-Newsletter-February-2020.pdf)

One Housing Group's website - [https://www.onehousing.co.uk/about-us/what-we-do/development-and-regeneration/isle-of-dogs](https://www.onehousing.co.uk/about-us/what-we-do/development-and-regeneration/isle-of-dogs)

The [4 Estates Forum](http://4estatesforum.org.uk)

[Press article about the regeneration (poplarlondon.co.uk)](https://poplarlondon.co.uk/isle-of-dogs-residents-fight-to-remain-in-canary-wharf-housing-revolution/)

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

![Kingsbridge estate image](src/images/kingsbridge2.png)
![Kingsbridge estate image](src/images/kingsbridge3.png)
