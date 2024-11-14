---
name: Samuda estate
borough: towerhamlets 
tags: towerhamlets
location: '[51.496571,-0.008458]'
landlord: One Housing Group
developer:
itla: Open Communities
total: 317
ballot: pending
planning: pending
image: estates/src/images/kelson.png
---
![Samuda estate image](src/images/kelson.png)

317 homes are under threat at Kelson House, Dagmar Court, Halyard House and Talia House on the Samuda estate on the Isle of Dogs.

One Housing Group currently manages 2,027 homes across four estates on the Isle of Dogs, which it previously planned to replace with 8,906 new homes.

The four estates originally belonged to Tower Hamlets Council as part of its housing stock, but were taken over by Toynbee Island Homes in 2005. Two years later, a merger with Community Housing Association led to the creation of [One Housing Group](http://onehousing.co.uk). 

In 2014 OHG produced a [52 page report - ‘Project Stone’](/images/ProjectStone.pdf) setting out proposals to replace all four of its Isle of Dogs estates in a joint venture with developer Argent:  

 * Barkantine estate - 769 homes.
 * [St John’s estate](/estates/towerhamlets/stjohns/) - 607 homes.
 * [Samuda estate](/estates/towerhamlets/samuda/) - 517 homes.
 * [Kingsbridge estate](/estates/towerhamlets/kingsbridge/) - 134 homes.

Project Stone proposed just 30% of the redeveloped properties as affordable housing. Of these, 17% would have been shared ownership and 13% would have been affordable rented. 

![Samuda estate image](src/images/pstone.png)

The plans met with [organised opposition](http://www.4estatesforum.org.uk) from residents on the four estates who had not been consulted and after the Mayor of Tower Hamlets intervened, OHG scrapped its masterplan and agreed that proposals would only be pursued after a 'conversation' with residents.

The Mayor has designated the Isle of Dogs as an 'opportunity area' and his [planning framework](https://airdrive-secure.s3-eu-west-1.amazonaws.com/london/dataset/isle-of-dogs-and-south-poplar-opportunity-area-planning-framework/2019-10-18T14%3A33%3A23/Appendix%20A%20Isle%20of%20Dogs%20and%20South%20Poplar%20OAPF.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJJDIMAIVZJDICKHA%2F20200603%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200603T161828Z&X-Amz-Expires=300&X-Amz-Signature=e9f1e1b74bfcd4ea3f185de6fa62ea24ad89c7701eee317bad9d78024ba5474f&X-Amz-SignedHeaders=host) for the area envisages 49,000 new homes some of which provided through the regeneration of existing housing estates:

![Samuda estate image](src/images/isleofdogsoapf.png)

In 2022, OHG [said](https://www.onehousing.co.uk/about-us/what-we-do/development-and-regeneration/isle-of-dogs/kelson-house,-dagmar-court,-halyard-house-and-talia-house) that it has started a 'conversation' with residents on regeneration options for the four blocks across the estate.

---

__Links:__

[OHGs Website for the scheme](https://www.onehousing.co.uk/about-us/what-we-do/development-and-regeneration/isle-of-dogs/kelson-house,-dagmar-court,-halyard-house-and-talia-house)

Dedicated website for residents - <https://futuresamuda.co.uk>

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

![Samuda estate image](src/images/samuda1.jpg)
![Samuda estate image](src/images/samuda2.png)
![Samuda estate image](src/images/samuda3.png)
