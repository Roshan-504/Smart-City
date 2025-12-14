document.addEventListener('DOMContentLoaded', () => {
    const locations = [
        { name: "Central Hospital", category: "hospital", top: 30, left: 45, icon: "🏥" },
        { name: "City General Hospital", category: "hospital", top: 65, left: 20, icon: "🏥" },
        { name: "Main Police Station", category: "police", top: 40, left: 70, icon: "👮" },
        { name: "North Police Station", category: "police", top: 15, left: 30, icon: "👮" },
        { name: "Historic Fort", category: "tourist", top: 50, left: 60, icon: "🏰" },
        { name: "Central Beach", category: "tourist", top: 80, left: 75, icon: "🏖️" },
        { name: "Municipal Corporation", category: "government", top: 35, left: 55, icon: "🏛️" },
        { name: "RTO Office", category: "government", top: 70, left: 50, icon: "🏢" },
        { name: "Central Bus Station", category: "transport", top: 55, left: 35, icon: "🚌" },
        { name: "Main Railway Station", category: "transport", top: 25, left: 80, icon: "🚉" }
    ];

    const markersContainer = document.getElementById('markers-container');
    const locationsList = document.getElementById('locations-list');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderMarkers(filter = 'all') {
        markersContainer.innerHTML = '';
        locationsList.innerHTML = '';

        const filtered = filter === 'all' 
            ? locations 
            : locations.filter(loc => loc.category === filter);

        filtered.forEach(loc => {
            const marker = document.createElement('div');
            marker.className = `marker ${loc.category}`;
            marker.style.top = `${loc.top}%`;
            marker.style.left = `${loc.left}%`;
            marker.innerHTML = `<span style="transform: rotate(45deg);">${loc.icon}</span>`;
            marker.title = loc.name;
            markersContainer.appendChild(marker);

            const li = document.createElement('li');
            li.innerHTML = `<span class="location-icon">${loc.icon}</span> ${loc.name}`;
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
});