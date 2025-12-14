// pages/js/hospitals.js

document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded hospital data (static, fully offline)
    const hospitalsData = [
        {
            name: 'City Central Hospital',
            type: 'government',
            address: '123 Main Road, Downtown Area',
            phone: 'tel:042-2345678',
            phoneDisplay: '042-2345678',
            emergency: true
        },
        {
            name: 'Apollo Medical Center',
            type: 'private',
            address: '456 Park Avenue, North District',
            phone: 'tel:042-3456789',
            phoneDisplay: '042-3456789',
            emergency: true
        },
        {
            name: 'Green Valley Clinic',
            type: 'clinic',
            address: '78 Green Street, Suburban Area',
            phone: 'tel:042-4567890',
            phoneDisplay: '042-4567890',
            emergency: false
        },
        {
            name: 'St. Mary Hospital',
            type: 'private',
            address: '900 Heritage Lane, Old Town',
            phone: 'tel:042-5678901',
            phoneDisplay: '042-5678901',
            emergency: true
        },
        {
            name: 'Government General Hospital',
            type: 'government',
            address: 'Central Plaza, Civic Center',
            phone: 'tel:042-6789012',
            phoneDisplay: '042-6789012',
            emergency: true
        },
        {
            name: 'Family Care Clinic',
            type: 'clinic',
            address: '12 Family Road, East Zone',
            phone: 'tel:042-7890123',
            phoneDisplay: '042-7890123',
            emergency: false
        },
        {
            name: 'Metro Trauma Center',
            type: 'government',
            address: 'Highway Junction, South Bypass',
            phone: 'tel:108',  // Ambulance-linked
            phoneDisplay: '108 (Emergency)',
            emergency: true
        }
    ];

    const typeFilter = document.getElementById('type-filter');
    const container = document.getElementById('hospitals-container');

    function renderHospitals() {
        const selectedType = typeFilter.value;

        const filtered = hospitalsData.filter(hospital => {
            if (selectedType === 'all') return true;
            if (selectedType === 'emergency') return hospital.emergency;
            return hospital.type === selectedType;
        });

        container.innerHTML = '';

        if (filtered.length === 0) {
            container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #666;">No facilities found for selected filter.</p>';
            return;
        }

        filtered.forEach(hospital => {
            const card = document.createElement('div');
            card.className = 'hospital-card';

            let badge = '';
            if (hospital.emergency) {
                badge = '<span class="type-badge emergency">24/7 Emergency</span>';
            } else {
                badge = `<span class="type-badge ${hospital.type}">${hospital.type.charAt(0).toUpperCase() + hospital.type.slice(1)}</span>`;
            }

            let openBadge = hospital.emergency ? '<span class="open-badge">Open 24 Hours</span>' : '';

            card.innerHTML = `
                ${badge}
                <h3>${hospital.name}</h3>
                <p class="address">${hospital.address}</p>
                <a href="${hospital.phone}" class="phone">📞 ${hospital.phoneDisplay}</a>
                ${openBadge}
            `;
            container.appendChild(card);
        });
    }

    // Event listener
    typeFilter.addEventListener('change', renderHospitals);

    // Initial render
    renderHospitals();
});