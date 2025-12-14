document.addEventListener('DOMContentLoaded', () => {
    const spotsData = [
        {
            name: "Historic Fort",
            image: "../images/fort.jpg",
            description: "A magnificent 17th-century fort overlooking the sea with stunning architecture and rich history.",
            timings: "9:00 AM - 6:00 PM",
            entry: "₹50 (Indians), ₹500 (Foreigners)",
            extra: "Guided tours available. Best visited during sunset for panoramic views."
        },
        {
            name: "City Museum",
            image: "../images/museum.webp",
            description: "Home to ancient artifacts, art collections, and interactive exhibits showcasing the region's heritage.",
            timings: "10:00 AM - 5:00 PM (Closed Mondays)",
            entry: "₹20 (Adults), Free for children",
            extra: "Audio guides in multiple languages. Photography allowed without flash."
        },
        {
            name: "Central Beach",
            image: "../images/beach.jpg",
            description: "Pristine golden sands with calm waters, perfect for relaxation and water sports.",
            timings: "Open 24 hours",
            entry: "Free",
            extra: "Water sports available. Lifeguards on duty from 8 AM to 6 PM."
        },
        {
            name: "Botanical Gardens",
            image: "../images/garden.jpg",
            description: "Lush green gardens with rare plants, butterfly park, and peaceful walking trails.",
            timings: "8:00 AM - 7:00 PM",
            entry: "₹30",
            extra: "Glasshouse and medicinal plant section are highlights. Wheelchair accessible."
        },
        {
            name: "Ancient Temple",
            image: "../images/temple.jpg",
            description: "A serene 12th-century temple known for intricate carvings and spiritual ambiance.",
            timings: "6:00 AM - 8:00 PM",
            entry: "Free",
            extra: "Dress modestly. Remove footwear before entering. Evening aarti is recommended."
        },
        {
            name: "Modern Art Gallery",
            image: "../images/gallery.jpg",
            description: "Contemporary art space featuring works by local and international artists.",
            timings: "11:00 AM - 7:00 PM (Closed Tuesdays)",
            entry: "₹100",
            extra: "Cafe inside with city views. Special exhibitions change monthly."
        }
    ];

    const container = document.getElementById('spots-container');

    spotsData.forEach(spot => {
        const card = document.createElement('div');
        card.className = 'spot-card';
        card.innerHTML = `
            <img src="${spot.image}" alt="${spot.name}" class="spot-image">
            <div class="spot-content">
                <h3 class="spot-title">${spot.name}</h3>
                <p class="spot-description">${spot.description}</p>
                <div class="spot-details">
                    <div class="spot-detail">🕒 ${spot.timings}</div>
                    <div class="spot-detail">🎟️ ${spot.entry}</div>
                </div>
                <button class="read-more">Read More ▼</button>
                <div class="extra-info">${spot.extra}</div>
            </div>
        `;
        container.appendChild(card);
    });

    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('read-more')) {
            const extra = e.target.nextElementSibling;
            const isActive = extra.classList.contains('active');
            extra.classList.toggle('active');
            e.target.textContent = isActive ? 'Read More ▼' : 'Read Less ▲';
        }
    });
});