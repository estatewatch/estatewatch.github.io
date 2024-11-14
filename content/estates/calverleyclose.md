---
name: Calverley Close estate 
borough: bromley 
tags: bromley
location: '[51.419397,0.021422]'
landlord: Riverside Housing Association
developer:
itla: Source Partnership
total: 150
ballot: Approved
planning: Pending
image: estates/src/images/cal4.png
---
![Calverly Close estate image](src/images/cal4.png)

Circa 150 homes are earmarked for potential demolition on Bromley's Calverley Close estate in Beckenham.

The estate comprises 2-4 storey low-rise maisonette blocks overlooking Beckenham Place Park.

In 2017, Riverside Housing Association (which manages Bromley's council housing) appointed architects to investigate options for the redevelopment of the Calverley Close estate.

In May 2019 Riverside instructed Tpas, an independent body which advises social landlords on effective tenant engagement, to review its tenant engagement on the estate after the Residents Steering Group openly opposed the redevelopment proposals.

Tpas visited residents at Calverley Close to ask for their thoughts and opinions about the redevelopment proposals and produced a [report](/images/tpasreport.pdf) with some interesting findings:

![Calverly Close estate image](src/images/riversidecalverley.png)


The Mayor agreed funding in principle for the redevelopment in November 2018.

A ballot was held in July 2021, with a majority of residents voting in favour of redevelopment.

Planning permission was granted in 2023 for 275 new homes, of which 179 'affordable'.

More information is available on Riverside's website here: [https://www.riverside.org.uk/redevelopment-projects/calverley-close-revitalising-your-neighbourhood/](https://www.riverside.org.uk/redevelopment-projects/calverley-close-revitalising-your-neighbourhood/)

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

![Calverly Close estate image](src/images/cal1.png", "Calverley Close estate" %}
![Calverly Close estate image](src/images/cal3.png", "Calverley Close estate" %}
![Calverly Close estate image](src/images/cal5.png", "Calverley Close estate" %}


