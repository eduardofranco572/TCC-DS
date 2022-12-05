$(document).ready(function () {
  var map = L.map('map').setView([-22.366778934699543, -46.93842415838836], 14);

  L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([-22.37525512273844, -46.94074992369676]).addTo(map)

  L.marker([-22.373731321791286, -46.92886967479309]).addTo(map)

  L.marker([-22.369839299240216, -46.94808325427514]).addTo(map)










})