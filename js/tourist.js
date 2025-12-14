document.addEventListener('DOMContentLoaded', () => {
    const spotsData = [
        {
            name: "Statue of Liberty",
            image: "../images/liberty.webp",
            description: "One of the most iconic symbols of the United States, offering stunning views of New York Harbor.",
            timings: "9:00 AM – 5:00 PM",
            entry: "$24 (Adults), $12 (Children)",
            extra: "Ferry tickets include access to Liberty Island and Ellis Island. Advance booking recommended."
        },
        {
            name: "Central Park",
            image: "../images/central-park.jpg",
            description: "A massive urban park in the heart of Manhattan featuring walking trails, lakes, and cultural landmarks.",
            timings: "6:00 AM – 1:00 AM",
            entry: "Free",
            extra: "Popular attractions include Bethesda Terrace, Bow Bridge, and Central Park Zoo."
        },
        {
            name: "Times Square",
            image: "../images/times-square.jpg",
            description: "World-famous entertainment district known for bright billboards, theaters, and city energy.",
            timings: "Open 24 hours",
            entry: "Free",
            extra: "Best visited at night. Hosts the annual New Year’s Eve Ball Drop."
        },
        {
            name: "The Metropolitan Museum of Art",
            image: "../images/met-museum.jpg",
            description: "One of the world’s largest and finest art museums with collections spanning 5,000 years.",
            timings: "10:00 AM – 5:30 PM",
            entry: "Suggested donation for NY residents; $30 for visitors",
            extra: "Closed Wednesdays. Wheelchair accessible. Audio guides available."
        },
        {
            name: "Brooklyn Bridge",
            image: "../images/brooklyn-bridge.jpg",
            description: "Historic suspension bridge offering scenic pedestrian and cycling paths.",
            timings: "Open 24 hours",
            entry: "Free",
            extra: "Sunrise and sunset offer the best photo opportunities."
        },
        {
            name: "9/11 Memorial & Museum",
            image: "../images/911-memorial.jpg",
            description: "A moving tribute honoring the victims of the September 11, 2001 attacks.",
            timings: "9:00 AM – 7:00 PM",
            entry: "$28 (Adults), $15 (Youth)",
            extra: "Quiet and respectful behavior is encouraged. Museum tickets sold separately."
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
            const isOpen = extra.classList.contains('active');
            extra.classList.toggle('active');
            e.target.textContent = isOpen ? 'Read More ▼' : 'Read Less ▲';
        }
    });
});
