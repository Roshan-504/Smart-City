// pages/js/hospitals.js

document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded data with background images (free to use or replace with your own in /images/)
    const hospitalsData = [
        {
            name: 'Jupiter Hospital',
            type: 'General Hospital',
            address: '525 E 68th St, New York, NY 10065',
            phone: 'tel:2127465454',
            phoneDisplay: '(212) 746-5454',
            image: '../images/hospital1.jpg',
            emergency: true
        },
        {
            name: 'Mount Sinai Hospital',
            type: 'General Hospital',
            address: '1 Gustave L. Levy Pl, New York, NY 10029',
            phone: 'tel:2122416500',
            phoneDisplay: '(212) 241-6500',
            image: '../images/hospital2.webp',
            emergency: true
        },
        {
            name: 'City Central Hospital',
            type: 'Government',
            address: '123 Main Road, Downtown Area',
            phone: 'tel:0422345678',
            phoneDisplay: '042-2345678',
            image: '../images/hospital3.jpg',
            emergency: true
        },
        {
            name: 'Apollo Medical Center',
            type: 'Private',
            address: '456 Park Avenue, North District',
            phone: 'tel:0423456789',
            phoneDisplay: '042-3456789',
            image: '../images/hospital4.jpg',
            emergency: true
        },
        {
            name: 'Green Valley Clinic',
            type: 'Clinic',
            address: '78 Green Street, Suburban Area',
            phone: 'tel:0424567890',
            phoneDisplay: '042-4567890',
            image: '../images/hospital5.webp',
            emergency: false
        }
    ];

    const typeFilter = document.getElementById('type-filter');
    const container = document.getElementById('hospitals-container');

    function renderHospitals() {
        const selected = typeFilter.value;
        const filtered = hospitalsData.filter(h => {
            if (selected === 'all') return true;
            if (selected === 'emergency') return h.emergency;
            return h.type.toLowerCase() === selected;
        });

        container.innerHTML = '';

        if (filtered.length === 0) {
            container.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#666;">No facilities found.</p>';
            return;
        }

        filtered.forEach(h => {
            const card = document.createElement('div');
            card.className = 'hospital-card';

            const emergencyText = h.emergency ? '<div class="info-row"><span class="icon">🕐</span>24/7 Emergency</div>' : '';

            card.innerHTML = `
                <div class="card-image">
                    <img src="${h.image}" alt="${h.name} exterior">
                    <div class="type-badge">${h.type}</div>
                </div>
                <div class="card-content">
                    <h3>${h.name}</h3>
                    <div class="info-row"><span class="icon">📍</span>${h.address}</div>
                    ${emergencyText}
                    <a href="${h.phone}" class="call-button">📞 ${h.phoneDisplay}</a>
                </div>
            `;
            container.appendChild(card);
        });
    }

    typeFilter.addEventListener('change', renderHospitals);
    renderHospitals();
});