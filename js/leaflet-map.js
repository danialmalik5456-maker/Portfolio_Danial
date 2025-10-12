
document.addEventListener('DOMContentLoaded', function () {
  var mapElement = document.getElementById('ieatmaps');
  if (!mapElement) return;

  // set map center (you can change these coordinates)
    var lat = 41.9794;
    var lng = 2.8214;

  var map = L.map('ieatmaps', { scrollWheelZoom: false }).setView([lat, lng], 12);

  // load OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // add a simple marker
  L.marker([lat, lng]).addTo(map).bindPopup('ASL Office').openPopup();

  // fix map if it looks blank
  setTimeout(() => map.invalidateSize(), 200);
});
