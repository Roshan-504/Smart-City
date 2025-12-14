
document.addEventListener('DOMContentLoaded', () => {

    const hospitalsData = [
        {
            name: 'NewYork-Presbyterian Hospital',
            type: 'government',
            address: '525 E 68th St, New York, NY 10065',
            phone: 'tel:+12127465454',
            phoneDisplay: '(212) 746-5454',
            image: '../images/hospital1.jpg',
            emergency: true
        },
        {
            name: 'Mount Sinai Hospital',
            type: 'private',
            address: '1 Gustave L. Levy Pl, New York, NY 10029',
            phone: 'tel:+12122416500',
            phoneDisplay: '(212) 241-6500',
            image: '../images/hospital2.webp',
            emergency: true
        },
        {
            name: 'NYU Langone Health',
            type: 'private',
            address: '550 1st Ave, New York, NY 10016',
            phone: 'tel:+12122634000',
            phoneDisplay: '(212) 263-4000',
            image: '../images/hospital3.jpg',
            emergency: true
        },
        {
            name: 'Bellevue Hospital Center',
            type: 'government',
            address: '462 1st Ave, New York, NY 10016',
            phone: 'tel:+12125622500',
            phoneDisplay: '(212) 562-2500',
            image: '../images/hospital4.jpg',
            emergency: true
        },
        {
            name: 'CityMD Urgent Care',
            type: 'clinic',
            address: '145 W 86th St, New York, NY 10024',
            phone: 'tel:+12123624950',
            phoneDisplay: '(212) 362-4950',
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
            return h.type === selected;
        });

        container.innerHTML = '';

        if (filtered.length === 0) {
            container.innerHTML = `
                <p style="grid-column:1/-1;text-align:center;color:#666;">
                    No facilities found.
                </p>`;
            return;
        }

        filtered.forEach(h => {
            const card = document.createElement('div');
            card.className = 'hospital-card';

            const emergencyText = h.emergency
                ? '<div class="info-row"><span class="icon">🕐</span>24/7 Emergency</div>'
                : '';

            const typeLabel =
                h.type === 'government' ? 'Government Hospital' :
                h.type === 'private' ? 'Private Hospital' :
                'Clinic';

            card.innerHTML = `
                <div class="card-image">
                    <img src="${h.image}" alt="${h.name}">
                    <div class="type-badge">${typeLabel}</div>
                </div>

                <div class="card-content">
                    <h3>${h.name}</h3>
                    <div class="info-row">
                        <span class="icon">📍</span>${h.address}
                    </div>
                    ${emergencyText}
                    <a href="${h.phone}" class="call-button">
                        📞 ${h.phoneDisplay}
                    </a>
                </div>
            `;

            container.appendChild(card);
        });
    }

    typeFilter.addEventListener('change', renderHospitals);
    renderHospitals();
});
