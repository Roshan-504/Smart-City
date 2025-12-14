
document.addEventListener('DOMContentLoaded', () => {
    
    const routesData = [
        { 
            type: 'subway', 
            name: 'A Train (Express)', 
            path: 'Inwood - 207 St ↔ Far Rockaway / Lefferts Blvd', 
            fare: '$2.90 (OMNY/MetroCard)' 
        },
        { 
            type: 'subway', 
            name: '7 Train (Flushing)', 
            path: 'Times Sq - 42 St ↔ Flushing - Main St', 
            fare: '$2.90 (OMNY/MetroCard)' 
        },
        { 
            type: 'bus', 
            name: 'M60 SBS', 
            path: 'West Side ↔ LaGuardia Airport (LGA)', 
            fare: '$2.90 (Coin/OMNY)' 
        },
        { 
            type: 'bus', 
            name: 'M15 Select Bus', 
            path: 'South Ferry ↔ East Harlem (125th St)', 
            fare: '$2.90' 
        },
        { 
            type: 'rail', 
            name: 'LIRR: City Zone', 
            path: 'Penn Station ↔ Jamaica Station', 
            fare: '$5.00 (City Ticket)' 
        },
        { 
            type: 'rail', 
            name: 'Metro-North', 
            path: 'Grand Central ↔ Harlem 125th St', 
            fare: '$5.00 (Off-Peak)' 
        },
        { 
            type: 'ferry', 
            name: 'East River Route', 
            path: 'Wall St ↔ Hunter Points South', 
            fare: '$4.00 (App/Ticket)' 
        },
        { 
            type: 'subway', 
            name: 'L Train', 
            path: '8 Ave (Manhattan) ↔ Canarsie (Brooklyn)', 
            fare: '$2.90' 
        }
    ];

    const searchInput = document.getElementById('search-input');
    const typeFilter = document.getElementById('type-filter');
    const container = document.getElementById('routes-container');

    function renderRoutes() {
        if (!searchInput || !typeFilter || !container) return;

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
            container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #666; font-size: 1.1rem; padding: 2rem;">No routes found matching your search.</p>';
            return;
        }

        filtered.forEach(route => {
            const card = document.createElement('div');
            card.className = 'route-card';
            
            const badge = `<span class="type-badge ${route.type}">${route.type.toUpperCase()}</span>`;

            card.innerHTML = `
                ${badge}
                <h3>${route.name}</h3>
                <p class="route-path">📍 ${route.path}</p>
                <p class="fare">💳 ${route.fare}</p>
            `;
            container.appendChild(card);
        });
    }

    if (searchInput) searchInput.addEventListener('input', renderRoutes);
    if (typeFilter) typeFilter.addEventListener('change', renderRoutes);

    renderRoutes();
});