---
name: Watling Gardens estate
borough: brent
image: estates/src/images/clairecourt1.jpg
landlord: Watling Gardens TMO
developer:
itla: Richard Carley & Sarah Robbins (Brent)
total: 50
location: '[51.548923,-0.206821]'
ballot: Exempt
planning: Approved
---
![Watling Gardens](../estates/src/images/clairecourt1.jpg)

42 homes have been demolished on Brent's Watling Gardens estate in Kilburn.

Brent's cabinet signed off a co-operational agreement with housing association Network Homes on March 9 2020, which will allow the two bodies to share knowledge to improve the borough's housing sector through regeneration schemes.

Three of the schemes are [listed](http://democracy.brent.gov.uk/documents/s95738/07.%20Cabinet%20Report%20-%20Collaboration%20with%20Network%20Homes.pdf) (para 4.4.3) as 'Claire Court, Watling Gardens and Windmill Court' on the Shoot Up Hill road near Kilburn station. 

Two sets of three-storey maisonettes 'Claire Court' have been earmarked for redevelopment as well as a row of bungalows at Watling Gardens and car parking area at Windmill Court. 

In March 2022 a site visit showed that it looked like supported housing and a community space have been boarded up ready for demolition. Behind these are allotments which can no longer be accessed.   

The estate is managed by a Tenant Management Organisation - [Watling Gardens TMO.](http://www.watlinggardenstmo.co.uk/), which has an office on the estate.

---

  ![Watling gardens](../estates/src/images/ClaireCourt.png)
  ![Watling gardens](../estates/src/images/watlinggardensbungalows.jpg)
  ![Watling gardens](../estates/src/images/cclose1.jpg)
  ![Watling gardens](../estates/src/images/cclose2.jpg)
  ![Watling gardens](../estates/src/images/cclose3.jpg)
  ![Watling gardens](../estates/src/images/cclose4.jpg)
  ![Watling gardens](../estates/src/images/watling1.jpg)
  ![Watling gardens](../estates/src/images/watling2.jpg)
  ![Watling gardens](../estates/src/images/watling3.jpg)
  ![Watling gardens](../estates/src/images/watling4.jpg)
  ![Watling gardens](../estates/src/images/watling5.jpg)

Photo credits: Luka Zumbach

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