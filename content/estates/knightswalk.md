---
name: Knights Walk estate
borough: Lambeth
tags: lambeth
location: '[51.491595, -0.106746]'
landlord: Lambeth Council
developer: Vistry
architect: Mae/Stitch
itla:
total: 18
ballot: Exempt
planning: Approved
image: estates/src/images/knightswalk.png
---
![Denby Court image](src/images/knightswalk.png)
 
Knight’s Walk is a group of bungalows and two-storey flats belonging to the Cotton Garden estate in Kennington. It was designed by architect George Finch in the 1960s to cater for the elderly and people with disabilities. Owing to this, and the fact that the estate is just a 5-minute walk from Elephant & Castle and Kennington Underground Station, Lambeth Council considered its current housing insufficiently dense and placed Knight’s Walk on its six-estate ‘regeneration’ programme in December 2014.
 

In February 2015, the residents were presented with three options, all of which were for full demolition. Due to new design proposals put forward by [Architects for Social Housing (ASH)](https://architectsforsocialhousing.co.uk/), half of the homes were saved from the demolition plans - [https://opengardenestates.com/open-garden-estates-2015/knights-walk/](https://opengardenestates.com/open-garden-estates-2015/knights-walk/).

The resident-led ‘Save Knights Walk Campaign’ was joined by the wife of the late George Finch, Kate Macintosh, who delivered an impassioned speech on the importance of saving existing social housing and protecting green spaces on them [https://www.architectsjournal.co.uk/news/public-wealth-is-being-transferred-to-the-pockets-of-property-speculators](https://www.architectsjournal.co.uk/news/public-wealth-is-being-transferred-to-the-pockets-of-property-speculators). 

In 2022, planning permission was granted and subsequently 18 homes in phase 1 of the scheme were demolished, comprising terrace houses and bungalows.

Phase 1 was completed in 2021 and provides 14 social rented homes.

Phase 2 of the planning permission will deliver a further 68 homes in two much denser apartment blocks, standing at up to seven storeys high. Phase 2 will generate 68 new homes, of which 11 will be affordable rented units, 12 will be intermediate and 45 will be private market homes. 

The tenure mix approved in the [planning committee report](https://moderngov.lambeth.gov.uk/documents/s94015/1705992RG3%20Knights%20Walk.pdf) shows that of the 84 new homes just 14 will be social rented:

![Knights Walk tenure mix](src/images/knightswalktenure.png)

In 2025, Lambeth Council revealed that Vistry Group had been chosen to take charge of the regeneration as part of its ‘New Homes Hexagon’ partnership with the developer. [https://haveyoursay.lambeth.gov.uk/en-GB/projects/knights-walk-nhx](https://haveyoursay.lambeth.gov.uk/en-GB/projects/knights-walk-nhx).


---

__Links:__

[https://architectsforsocialhousing.co.uk/2018/04/16/knights-walk-the-good-practice-guide-to-gentrification/](https://architectsforsocialhousing.co.uk/2018/04/16/knights-walk-the-good-practice-guide-to-gentrification/)

[https://www.lambeth.gov.uk/better-fairer-lambeth/projects/knights-walk-estate](https://www.lambeth.gov.uk/better-fairer-lambeth/projects/knights-walk-estate)

[Planning Committee report: https://moderngov.lambeth.gov.uk/documents/s94015/1705992RG3%20Knights%20Walk.pdf](https://moderngov.lambeth.gov.uk/documents/s94015/1705992RG3%20Knights%20Walk.pdf)

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