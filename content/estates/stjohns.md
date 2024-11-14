---
name: St John's estate
borough: towerhamlets
tags: towerhamlets
location: '[51.499039,-0.008984]'
landlord: One Housing Group
developer:
itla: TPAS
total: 84
ballot: Approved
planning: Approved
image: estates/src/images/ashepherd.jpg
---
![St Johns estate image](src/images/ashepherd.jpg)

84 homes are under threat of demolition on the St John's estate in Tower Hamlets.

As a result of stock transfer in 2005, [One Housing Group](https://onehousing.co.uk) currently owns 2,027 former council homes across four estates on the Isle of Dogs.

In 2014 One Housing Group produced a [52 page report - ‘Project Stone’](/images/ProjectStone.pdf) setting out proposals to replace all four of its Isle of Dogs estates in a joint venture with developer Argent:  

 * Barkantine estate - 769 homes.
 * [St John’s estate](/estates/towerhamlets/stjohns/) - 607 homes.
 * [Samuda estate](/estates/towerhamlets/samuda/) - 517 homes.
 * [Kingsbridge estate](/estates/towerhamlets/kingsbridge/) - 134 homes.

Project Stone proposed just 30% of the redeveloped properties as affordable housing. Of these, 17% would have been shared ownership and 13% would have been affordable rented. 

![St Johns estate image](src/images/pstone.png)

The plans met with [organised opposition](http://www.4estatesforum.org.uk) from residents on the four estates who had not been consulted and after the Mayor of Tower Hamlets intervened, OHG scrapped its masterplan and agreed that proposals would only be pursued after a 'conversation' with residents.

In May 2017, One Housing Group applied to the Mayor in a bid for funding for the redevelopment of the St John's estate and has now started 'conversations' with residents in specific blocks of three of the four estates (Samuda estate excluded): 

![St Johns estate image](src/images/ohgconversations.png)

The Mayor has designated the Isle of Dogs as an 'opportunity area' and his [planning framework](https://airdrive-secure.s3-eu-west-1.amazonaws.com/london/dataset/isle-of-dogs-and-south-poplar-opportunity-area-planning-framework/2019-10-18T14%3A33%3A23/Appendix%20A%20Isle%20of%20Dogs%20and%20South%20Poplar%20OAPF.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJJDIMAIVZJDICKHA%2F20200603%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200603T161828Z&X-Amz-Expires=300&X-Amz-Signature=e9f1e1b74bfcd4ea3f185de6fa62ea24ad89c7701eee317bad9d78024ba5474f&X-Amz-SignedHeaders=host) for the area envisages 49,000 new homes some of which provided through the regeneration of existing housing estates:

![St Johns estate image](src/images/isleofdogsoapf.png)

80% of eligible residents voted in favour of demolition in a 2021 ballot and planning permission was granted in 2022 for 347 new homes on the site, of which 67 for social rent, 29 shared ownership and the remainder private.

![St Johns estate image](src/images/oakalice.png)

---

__Links:__  
One Housing Group's website - [https://www.onehousing.co.uk/about-us/what-we-do/development-and-regeneration/isle-of-dogs](https://www.onehousing.co.uk/about-us/what-we-do/development-and-regeneration/isle-of-dogs)

The [4 Estates Forum](http://4estatesforum.org.uk)

July 2021 Consultation Boards - [https://www.onehousing.co.uk/__data/assets/pdf_file/0021/27633/20210616_Consultation-Event-Boards-for-web.pdf](https://www.onehousing.co.uk/__data/assets/pdf_file/0021/27633/20210616_Consultation-Event-Boards-for-web.pdf)

[Landlord Offer](src/images/stjohnslandoffer.pdf)

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


![St Johns estate image](src/images/sjn12.jpg)
![St Johns estate image](src/images/oakhouse.png)
![St Johns estate image](src/images/sjn10.jpg)
![St Johns estate image](src/images/sjn9.jpg)
![St Johns estate image](src/images/stjohnsaerial.png)

_Image credits: Luka Zumbach_

