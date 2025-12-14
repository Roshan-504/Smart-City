
document.addEventListener('DOMContentLoaded', () => {
    const routesData = [
        { type: 'bus', name: 'Route 101', path: 'Central Station → City Mall → Airport', fare: '₹20 - ₹40' },
        { type: 'bus', name: 'Route 205', path: 'Railway Colony → Downtown → Beach Road', fare: '₹15 - ₹30' },
        { type: 'metro', name: 'Blue Line', path: 'North Terminal → South Hub (15 stops)', fare: '₹30 - ₹60' },
        { type: 'metro', name: 'Green Line', path: 'East Gate → West Park → University', fare: '₹25 - ₹50' },
        { type: 'train', name: 'Local Train A', path: 'Suburban North → Central → Suburban South', fare: '₹10 - ₹25' },
        { type: 'auto', name: 'Shared Auto', path: 'Market Area → Residential Zones', fare: '₹10 per person' },
        { type: 'bus', name: 'Route 350', path: 'Old Town → New City → IT Park', fare: '₹25 - ₹50' },
        { type: 'metro', name: 'Red Line Express', path: 'Airport Direct (Non-stop)', fare: '₹100' }
    ];

    const searchInput = document.getElementById('search-input');
    const typeFilter = document.getElementById('type-filter');
    const container = document.getElementById('routes-container');

    function renderRoutes() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedType = typeFilter.value;

        const filtered = routesData.filter(route => {
            const matchesSearch = route.name.toLowerCase().includes(searchTerm) ||
                                  route.path.toLowerCase().includes(searchTerm);
            const matchesType = selectedType === 'all' || route.type === selectedType;
            return matchesSearch && matchesType;
        });

        container.innerHTML = '';

        if (filtered.length === 0) {
            container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #666;">No routes found matching your search.</p>';
            return;
        }

        filtered.forEach(route => {
            const card = document.createElement('div');
            card.className = 'route-card';
            card.innerHTML = `
                <span class="type-badge ${route.type}">${route.type.toUpperCase()}</span>
                <h3>${route.name}</h3>
                <p class="route-path">${route.path}</p>
                <p class="fare">Fare: ${route.fare}</p>
            `;
            container.appendChild(card);
        });
    }

    searchInput.addEventListener('input', renderRoutes);
    typeFilter.addEventListener('change', renderRoutes);

    renderRoutes();
});