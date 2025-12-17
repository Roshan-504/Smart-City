
document.addEventListener('DOMContentLoaded', () => {

    const eventsData = [
            {
                title: "Central Park Winter Festival",
                date: "2025-12-20",
                description: "Seasonal celebrations with music, food vendors, ice activities, and fireworks.",
                location: "Central Park, Manhattan",
                status: "upcoming",
                image: "../images/event6.jpg"
            },
            {
                title: "NYC Marathon",
                date: "2025-12-15",
                description: "World-famous marathon featuring runners from across the globe.",
                location: "Across All Five Boroughs",
                status: "ongoing",
                image: "../images/event5.jpg"
            },
            {
                title: "Broadway Cultural Night",
                date: "2025-12-10",
                description: "Live performances showcasing Broadway music, dance, and theater culture.",
                location: "Broadway Theater District",
                status: "past",
                image: "../images/event1.webp"
            },
            {
                title: "Times Square New Year’s Eve",
                date: "2025-12-31",
                description: "Iconic New Year’s Eve celebration featuring live performances and the Ball Drop.",
                location: "Times Square, Manhattan",
                status: "upcoming",
                image: "../images/event7.jpg"
            },
            {
                title: "Brooklyn Bridge Maintenance Notice",
                date: "2025-12-12",
                description: "Partial closures due to scheduled maintenance. Expect traffic delays.",
                location: "Brooklyn Bridge",
                status: "past",
                image: "../images/event2.jpeg"
            },
            {
                title: "NYC Green Initiative Drive",
                date: "2025-12-14",
                description: "Citywide tree plantation and environmental awareness campaign.",
                location: "Multiple NYC Parks",
                status: "ongoing",
                image: "../images/event3.jpg"
            }
        ];


    const eventsContainer = document.getElementById('events-container');
    const noEventsMessage = document.getElementById('no-events');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderEvents(filter = 'all') {
        eventsContainer.innerHTML = '';

        const today = new Date('2025-12-14');
        const filteredEvents = eventsData.filter(event => {
            const eventDate = new Date(event.date);
            if (filter === 'upcoming') return eventDate > today;
            if (filter === 'ongoing') return eventDate.toDateString() === today.toDateString();
            if (filter === 'past') return eventDate < today;
            return true;
        });

        if (filteredEvents.length === 0) {
            noEventsMessage.style.display = 'block';
            return;
        }

        noEventsMessage.style.display = 'none';

        filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

        filteredEvents.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card';

            const badgeText = event.status === 'upcoming' ? 'Upcoming' :
                              event.status === 'ongoing' ? 'Ongoing Now' : 'Past';

            card.innerHTML = `
                <div class="event-image">
                    <img src="${event.image}" alt="${
              event.title
            }" loading="lazy">
                    <span class="event-badge ${
                      event.status
                    }">${badgeText}</span>
                </div>
                <div class="event-content-wrapper">
                    <div class="event-header">
                        <h3 class="event-title">${event.title}</h3>
                        <p class="event-date">📅 ${formatDate(event.date)}</p>
                    </div>
                    <div class="event-body">
                        <p class="event-description">${event.description}</p>
                        <p class="event-location">📍 ${event.location}</p>
                    </div>
                </div>
            `;
            eventsContainer.appendChild(card);
        });
    }

    function formatDate(dateStr) {
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        return new Date(dateStr).toLocaleDateString('en-US', options);
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderEvents(btn.dataset.filter);
        });
    });

    renderEvents('all');
});