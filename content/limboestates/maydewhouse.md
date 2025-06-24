---
name: Maydew House (Abbeyfield estate)
borough: southwark
tags: southwark
location: '[51.493029,-0.056187]'
landlord: Southwark Council
developer: Southwark Council
itla: 
total: 144
ballot: Exempt
planning: Pending
image: estates/src/images/maydewmd.jpg
---
![Maydew House image](src/images/maydewmd.jpg)

This 24-storey block containing 144 council flats overlooking Southwark Park, has been decanted [(amidst protest)](https://www.facebook.com/pages/Save-Maydew-House/316012601837) after the council [declared](https://www.southwarknews.co.uk/00,news,20152,440,00.htm) (without disclosing the figures) that the cost of repair was _"difficult to justify"_. The Council served a Compulsory Purchase Order on the remaining leaseholders and tenants of the block (and neighbouring Abbeyfield estate) in 2012[^1].

The block has since stood empty. In 2022, Southwark Council announced plans that it would be considering demolition of the block, following a cost appraisal assessment:

[https://southwarknews.co.uk/news/housing/exclusive-bermondseys-maydew-house-set-for-demolition/](https://southwarknews.co.uk/news/housing/exclusive-bermondseys-maydew-house-set-for-demolition/)

In Autumn 2024, the Council [decided to demolish](https://southwarknews.co.uk/area/bermondsey/bermondsey-council-estate-block-pulled-down-after-15-million-spent-before-failed-refurbishment/) the block and preparation works for demolition were commenced in Oct 2024 and demolition was complete by June 2025. As at June 2025, the site remains a cleared building site and the Council is reportedly looking for a development partner.

---

__Links:__

[^1]: See item 13 of [this Sep 2012 Cabinet meeting](https://moderngov.southwark.gov.uk/ieListDocuments.aspx?CId=302&MId=4246&Ver=4) 

[^2]: See paragraph 132 of [this November 2014 Cabinet report](https://moderngov.southwark.gov.uk/documents/s49973/Report%20Qtr%202%202014-15%20Capital%20Monitor.pdf)


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
