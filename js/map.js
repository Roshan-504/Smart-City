document.addEventListener('DOMContentLoaded', () => {

    const locations = [
        { name: "NYU Langone Health", category: "hospital", top: 32, left: 48, icon: "🏥" },
        { name: "Mount Sinai Hospital", category: "hospital", top: 58, left: 22, icon: "🏥" },

        { name: "NYPD Midtown South Precinct", category: "police", top: 42, left: 70, icon: "👮" },
        { name: "NYPD Harlem Precinct", category: "police", top: 18, left: 34, icon: "👮" },

        { name: "Statue of Liberty", category: "tourist", top: 75, left: 80, icon: "🗽" },
        { name: "Central Park", category: "tourist", top: 28, left: 60, icon: "🌳" },

        { name: "NYC City Hall", category: "government", top: 36, left: 54, icon: "🏛️" },
        { name: "NYC 311 Service Center", category: "government", top: 62, left: 52, icon: "🏢" },

        { name: "Grand Central Terminal", category: "transport", top: 48, left: 38, icon: "🚇" },
        { name: "Staten Island Ferry Terminal", category: "transport", top: 82, left: 68, icon: "⛴️" }
    ];

    const locationsList = document.getElementById('locations-list');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderMarkers(filter = 'all') {
        locationsList.innerHTML = '';

        const filtered = filter === 'all'
            ? locations
            : locations.filter(loc => loc.category === filter);

        filtered.forEach(loc => {

            const li = document.createElement('li');
            li.innerHTML = `
                <span class="location-icon">${loc.icon}</span>
                ${loc.name}
            `;
            locationsList.appendChild(li);
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMarkers(btn.dataset.category);
        });
    });

    renderMarkers('all');

    const openBtn = document.getElementById("openFullscreen");
    const closeBtn = document.getElementById("closeFullscreen");
    const overlay = document.getElementById("mapOverlay");

    openBtn.addEventListener("click", () => {
      overlay.style.display = "block";
      document.body.classList.add("map-fullscreen");
      document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
      document.body.classList.remove("map-fullscreen");
      document.body.style.overflow = "";
    });
});
