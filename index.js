document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            const expanded = nav.classList.contains('active');
            hamburger.setAttribute('aria-expanded', expanded);
        });
    }

    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        const hour = new Date().getHours();
        let greeting;

        if (hour < 12) {
            greeting = 'Good Morning!';
        } else if (hour < 18) {
            greeting = 'Good Afternoon!';
        } else {
            greeting = 'Good Evening!';
        }

        greetingElement.textContent = greeting;
    }

    const highlightsData = [
        {
            title: 'Upcoming Event',
            content: 'Annual City Festival at Central Park – December 20–22, 2025'
        },
        {
            title: 'Road Alert',
            content: 'Main Street partial closure due to maintenance until Dec 18.'
        },
        {
            title: 'New Service',
            content: 'Online utility bill payment portal now live!'
        }
    ];

    const highlightsContainer = document.getElementById('highlights-container');
    if (highlightsContainer && highlightsData.length > 0) {
        highlightsData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'highlight-card';
            card.innerHTML = `
                <h4>${item.title}</h4>
                <p>${item.content}</p>
            `;
            highlightsContainer.appendChild(card);
        });
    }
});