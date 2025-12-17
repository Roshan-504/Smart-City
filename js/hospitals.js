
document.addEventListener('DOMContentLoaded', () => {

    const hospitalsData = [
      {
        name: "NewYork-Presbyterian Hospital",
        type: "government",
        address: "525 E 68th St, New York, NY 10065",
        phone: "tel:+12127465454",
        phoneDisplay: "(212) 746-5454",
        image: "../images/hospital1.jpg",
        emergency: true,
      },
      {
        name: "Mount Sinai Hospital",
        type: "private",
        address: "1 Gustave L. Levy Pl, New York, NY 10029",
        phone: "tel:+12122416500",
        phoneDisplay: "(212) 241-6500",
        image: "../images/hospital2.webp",
        emergency: false,
      },
      {
        name: "NYU Langone Health",
        type: "private",
        address: "550 1st Ave, New York, NY 10016",
        phone: "tel:+12122634000",
        phoneDisplay: "(212) 263-4000",
        image: "../images/hospital3.jpg",
        emergency: true,
      },
      {
        name: "Bellevue Hospital Center",
        type: "government",
        address: "462 1st Ave, New York, NY 10016",
        phone: "tel:+12125622500",
        phoneDisplay: "(212) 562-2500",
        image: "../images/hospital4.jpg",
        emergency: true,
      },
      {
        name: "CityMD Urgent Care",
        type: "clinic",
        address: "145 W 86th St, New York, NY 10024",
        phone: "tel:+12123624950",
        phoneDisplay: "(212) 362-4950",
        image: "../images/hospital5.webp",
        emergency: false,
      },
      {
        name: "Lenox Hill Hospital",
        type: "private",
        address: "100 E 77th St, New York, NY 10075",
        phone: "tel:+12124347500",
        phoneDisplay: "(212) 434-7500",
        image: "../images/hospital6.jpg",
        emergency: true,
      },
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
                        <svg
                class="call-icon"
                viewBox="0 0 122.88 122.27"
                aria-hidden="true"
              >
                <path
                  d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11
    c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21
    l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1
    c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69
    c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89
    C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2
    c0.95,0.07,1.8,0.62,2.25,1.44l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12
    c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03
    c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25z"
                />
              </svg> ${h.phoneDisplay}
                    </a>
                </div>
            `;

            container.appendChild(card);
        });
    }

    typeFilter.addEventListener('change', renderHospitals);
    renderHospitals();
});
