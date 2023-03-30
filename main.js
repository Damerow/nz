        // Kommentar in Java-Script mit Slash-Slash
        var map = L.map('map').setView([-41.2875, 174.776111], 12);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-41.2875, 174.776111]).addTo(map)
            .bindPopup('Die Hauptstadt von Neuseeland<br> <strong>Wellington</strong>.')
            .openPopup();