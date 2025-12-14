// js/events.js

document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded events data (current date: December 14, 2025)
    // Images used are placeholders. You can replace URLs with local images in ../images/
    const eventsData = [
        {
            title: "Annual Winter Festival",
            date: "2025-12-20",
            description: "Celebrate the holiday season with music, food stalls, and fireworks at Central Park.",
            location: "Central Park",
            status: "upcoming",
            image: "../images/event6.jpg" 
        },
        {
            title: "Smart City Marathon",
            date: "2025-12-15",
            description: "Join thousands of runners in this annual charity marathon across the city.",
            location: "City Stadium Start",
            status: "ongoing",
            image: "../images/event5.jpg"
        },
        {
            title: "Cultural Dance Night",
            date: "2025-12-10",
            description: "Traditional and modern dance performances from local artists.",
            location: "City Auditorium",
            status: "past",
            image: "../images/event1.jpg"
        },
        {
            title: "New Year Countdown",
            date: "2025-12-31",
            description: "Grand celebration with live music, light show, and midnight fireworks.",
            location: "Riverside Promenade",
            status: "upcoming",
            image: "../images/event7.jpg"
        },
        {
            title: "Road Maintenance Alert",
            date: "2025-12-12",
            description: "Main Bridge closed for repairs until Dec 18. Use alternate routes.",
            location: "Main Bridge",
            status: "past",
            image: "../images/event2.jpeg"
        },
        {
            title: "Eco-Friendly Drive",
            date: "2025-12-14",
            description: "Tree plantation and awareness campaign in multiple parks.",
            location: "Multiple Parks",
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

        // Sort: Upcoming first
        filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

        filteredEvents.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card';

            const badgeText = event.status === 'upcoming' ? 'Upcoming' :
                              event.status === 'ongoing' ? 'Ongoing Now' : 'Past';

            // Added Image div at the top
            card.innerHTML = `
                <div class="event-image">
                    <img src="${event.image}" alt="${event.title}" loading="lazy">
                </div>
                <div class="event-content-wrapper">
                    <div class="event-header">
                        <span class="event-badge ${event.status}">${badgeText}</span>
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