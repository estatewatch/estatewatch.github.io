---
name: Thamesmead South (phase 1) 
borough: bexley
images: estates/src/images/smere1.png
location: '[51.497783,0.122512]'
landlord: Peabody
developer: Peabody
itla: Communities First
total: 226
ballot: Exempt
planning: Approved
---
![Thamesmead south estate](../estates/src/images/smere1.png)

In November 2016, the Mayor [approved](https://www.london.gov.uk/sites/default/files/public%3A//public%3A//PAWS/media_id_286565///abbey_wood_and_south_thamesmead_report.pdf) the demolition of 226 homes on Bexley's Southmere site of the Thamesmead estate, to be replaced by 1,622 new homes of which 67 intermediate and 168 affordable rent of up to 80% market rent.

This is the first phase of 'Thamesmead South' - Peabody's redevelopment of the Bexley side of the Thamesmead estate. The next phase is Thamesmead East - the ['Wolvercote road' area](https://estatewatch.london/estates/bexley/thamesmeadeast/). 

![thamesmead south](../estates/src/images/thamemeadsouthphase1.png)

Bexley's [Growth Strategy](https://www.bexley.gov.uk/sites/default/files/2018-02/Bexley-Growth-Strategy.pdf) envisages 4,000 new homes in the Thamesmead area facilitated by the new Crossrail station and including the 'renewal' of existing estates.

Peabody has [partnered with Australian developer Lendlease](https://www.insidehousing.co.uk/news/news/peabody-picks-lendlease-for-8bn-thamesmead-regeneration-60192) (Heygate estate regeneration) to deliver 11,500 homes in Thamesmead over the next 30 years.

Unlike in some cases, the Mayors [report](https://www.london.gov.uk/sites/default/files/public%3A//public%3A//PAWS/media_id_286565///abbey_wood_and_south_thamesmead_report.pdf) is clear that the replacement 'social' housing at rent levels of up to 80% market rent:

![thamesmead south](../estates/src/images/thamesmeadar.png)

The [section 106 agreement](/images/thamesmeadsouths106.pdf) agreement says that Peabody should 'endeavour' to provide 35% affordable housing across all phases but only secures a minimum number of units in the first phase, namely 67 intermediate and 168 affordable rent of up to 80% market rent.

![thamesmead south](../estates/src/images/tmsouth.png)

---

__Links:__  
Peabody's [2017 consultation documents](https://www.thamesmeadnow.org.uk/media/1726/wolvercote_road_next_steps.pdf) for the scheme.

[Mayor's Stage 2 report](https://www.london.gov.uk/sites/default/files/public%3A//public%3A//PAWS/media_id_286565///abbey_wood_and_south_thamesmead_report.pdf)

---

  ![thanmesead south](../estates/src/images/smere2.png)
  ![thanmesead south](../estates/src/images/smere3.png)







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