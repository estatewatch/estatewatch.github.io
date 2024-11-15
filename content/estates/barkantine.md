---
name: Barkantine estate
borough: towerhamlets
tags: towerhamlets
location: '[51.498528,-0.024181]'
ballot: Approved 
landlord: One Housing Group
developer: Mount Anvil
itla: Open Communities
total: 72
planning: Pending
image: estates/src/images/kedge.png
---
![Barkantine estate image](src/images/kedge.png)

72 homes are under threat in Kedge House, Starboard Way and Winch House on the Barkantine estate in Tower Hamlets. 

As a result of stock transfer in 2005, [One Housing Group](https://onehousing.co.uk) currently owns 2,027 former council homes across four estates on the Isle of Dogs. 

In 2014 OHG produced a [52 page report - ‘Project Stone’](/images/ProjectStone.pdf) setting out proposals to replace all four of its Isle of Dogs estates in a joint venture with developer Argent:  

 * Barkantine estate - 769 homes.
 * [St John’s estate](/estates/towerhamlets/stjohns/) - 607 homes.
 * [Samuda estate](/estates/towerhamlets/samuda/) - 517 homes.
 * [Kingsbridge estate](/estates/towerhamlets/kingsbridge/) - 134 homes.

Project Stone proposed just 30% of the redeveloped properties as affordable housing. Of these, 17% would have been shared ownership and 13% would have been affordable rented. 

![Barkantine estate image](src/images/pstone.png)

The plans met with [organised opposition](http://www.4estatesforum.org.uk) from residents on the four estates who had not been consulted and after the Mayor of Tower Hamlets intervened, OHG scrapped its masterplan and agreed that proposals would only be pursued after a 'conversation' with residents.

In May 2017, OHG applied to the Mayor in a bid for funding for the redevelopment of the Barkantine estate and has now started 'conversations' with residents in specific blocks of three of the four estates (Samuda estate excluded): 

![Barkantine estate image](src/images/ohgconversations.png)

The Mayor has designated the Isle of Dogs as an 'opportunity area' and his [planning framework](https://airdrive-secure.s3-eu-west-1.amazonaws.com/london/dataset/isle-of-dogs-and-south-poplar-opportunity-area-planning-framework/2019-10-18T14%3A33%3A23/Appendix%20A%20Isle%20of%20Dogs%20and%20South%20Poplar%20OAPF.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJJDIMAIVZJDICKHA%2F20200603%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200603T161828Z&X-Amz-Expires=300&X-Amz-Signature=e9f1e1b74bfcd4ea3f185de6fa62ea24ad89c7701eee317bad9d78024ba5474f&X-Amz-SignedHeaders=host) for the area envisages 49,000 new homes some of which provided through the regeneration of existing housing estates:

![Barkantine estate image](src/images/isleofdogsoapf.png)

In 2019, One Housing created a steering group to work with residents of 72 homes in Kedge House, Starboard Way and Winch House on the Barkantine Estate, in order to consider different options for the future of these blocks.

![Barkantine estate image](src/images/bktine.png)

In April 2021, One Housing published its [Landlord Offer](https://www.onehousing.co.uk/__data/assets/pdf_file/0011/26300/Kedge-House,-Starboard-Way-and-Winch-House-Our-offer-to-residents.pdf) for tenants and leaseholders and held a ballot. The ballot resulted in 87% of residents voting in favour of the scheme on a 93% turnout. 

The Landlord offer proposes a total of 280 new homes, of which 72 are supposedly replacements for those residents who wish to return, 32 social rent, 39 shared ownership and 137 for private sale.

The scheme is now in design stage ahead of a planning application being submitted in late 2024.

---

__Links:__  
One Housing's Landlord Offer - [https://www.onehousing.co.uk/__data/assets/pdf_file/0011/26300/Kedge-House,-Starboard-Way-and-Winch-House-Our-offer-to-residents.pdf](https://www.onehousing.co.uk/__data/assets/pdf_file/0011/26300/Kedge-House,-Starboard-Way-and-Winch-House-Our-offer-to-residents.pdf)

One Housing's website - [https://onehousing.co.uk/about-us/what-we-do/development-and-regeneration/isle-of-dogs](https://onehousing.co.uk/about-us/what-we-do/development-and-regeneration/isle-of-dogs)

The [4 Estates Forum](http://4estatesforum.org.uk)

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

![Barkantine estate image](src/images/barkantine3.png)

![Barkantine estate image](src/images/barkantine2.png)



