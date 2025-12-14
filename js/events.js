// pages/js/events.js

document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded events data (current date: December 14, 2025)
    const eventsData = [
        {
            title: "Annual Winter Festival",
            date: "2025-12-20", // Upcoming
            description: "Celebrate the holiday season with music, food stalls, and fireworks at Central Park.",
            location: "Central Park",
            status: "upcoming"
        },
        {
            title: "Smart City Marathon",
            date: "2025-12-15", // Ongoing (today +1)
            description: "Join thousands of runners in this annual charity marathon across the city.",
            location: "City Stadium Start",
            status: "ongoing"
        },
        {
            title: "Cultural Dance Night",
            date: "2025-12-10", // Past
            description: "Traditional and modern dance performances from local artists.",
            location: "City Auditorium",
            status: "past"
        },
        {
            title: "New Year Countdown Event",
            date: "2025-12-31", // Upcoming
            description: "Grand celebration with live music, light show, and midnight fireworks.",
            location: "Riverside Promenade",
            status: "upcoming"
        },
        {
            title: "Road Maintenance Alert",
            date: "2025-12-12", // Past
            description: "Main Bridge closed for repairs until Dec 18. Use alternate routes.",
            location: "Main Bridge",
            status: "past"
        },
        {
            title: "Eco-Friendly Drive",
            date: "2025-12-14", // Today → Ongoing
            description: "Tree plantation and awareness campaign in multiple parks.",
            location: "Multiple Parks",
            status: "ongoing"
        }
    ];

    const eventsContainer = document.getElementById('events-container');
    const noEventsMessage = document.getElementById('no-events');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderEvents(filter = 'all') {
        eventsContainer.innerHTML = '';

        const today = new Date('2025-12-14'); // Fixed current date as per context
        const filteredEvents = eventsData.filter(event => {
            const eventDate = new Date(event.date);
            if (filter === 'upcoming') return eventDate > today;
            if (filter === 'ongoing') return eventDate.toDateString() === today.toDateString();
            if (filter === 'past') return eventDate < today;
            return true; // 'all'
        });

        if (filteredEvents.length === 0) {
            noEventsMessage.style.display = 'block';
            return;
        }

        noEventsMessage.style.display = 'none';

        // Sort: Upcoming first, then ongoing, then past
        filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

        filteredEvents.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card';

            const badgeText = event.status === 'upcoming' ? 'Upcoming' :
                              event.status === 'ongoing' ? 'Ongoing Now' : 'Past';

            card.innerHTML = `
                <div class="event-header">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-date">${formatDate(event.date)}</p>
                    <span class="event-badge ${event.status}">${badgeText}</span>
                </div>
                <div class="event-body">
                    <p class="event-description">${event.description}</p>
                    <p class="event-location"><strong>Location:</strong> ${event.location}</p>
                </div>
            `;
            eventsContainer.appendChild(card);
        });
    }

    function formatDate(dateStr) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateStr).toLocaleDateString('en-US', options);
    }

    // Filter button handling
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderEvents(btn.dataset.filter);
        });
    });

    // Initial render
    renderEvents('all');
});