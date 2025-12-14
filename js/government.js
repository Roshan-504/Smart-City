
document.addEventListener('DOMContentLoaded', () => {
    const servicesData = [
        {
            title: 'Municipal Corporation Office',
            icon: '🏛️',
            info: '<strong>Address:</strong> Civic Center, Main Road<br><strong>Phone:</strong> <a href="tel:1800-123-4567">1800-123-4567</a><br><strong>Services:</strong> Birth/Death certificates, property tax, water connection, complaints',
            link: 'https://example-municipal.gov.in',
            linkText: 'Official Website →'
        },
        {
            title: 'Regional Transport Office (RTO)',
            icon: '🚗',
            info: '<strong>Services:</strong> Driving license, vehicle registration, permits, fitness certificate<br><strong>Online Portal:</strong> Available for most services',
            link: 'https://parivahan.gov.in',
            linkText: 'Parivahan Portal →'
        },
        {
            title: 'Aadhaar Services',
            icon: '🆔',
            info: '<strong>Enrolment & Update Centers:</strong> Available at banks, post offices, and municipal offices<br><strong>Book Appointment:</strong> Online slot booking recommended',
            link: 'https://uidai.gov.in',
            linkText: 'UIDAI Website →'
        },
        {
            title: 'PAN Card Services',
            icon: '💳',
            info: '<strong>Apply or Correct PAN:</strong> Online application and tracking<br><strong>Agencies:</strong> NSDL & UTIITSL',
            link: 'https://www.incometax.gov.in',
            linkText: 'Income Tax Portal →'
        },
        {
            title: 'Passport Seva',
            icon: '🛂',
            info: '<strong>Passport Office Location:</strong> Central Business District<br><strong>Apply Online:</strong> Mandatory for new/renewal',
            link: 'https://passportindia.gov.in',
            linkText: 'Passport Seva →'
        },
        {
            title: 'Voter ID Services',
            icon: '🗳️',
            info: '<strong>Register or Update Voter ID:</strong> Through NVSP portal<br><strong>Helpline:</strong> 1950',
            link: 'https://voters.eci.gov.in',
            linkText: 'Voters Portal →'
        },
        {
            title: 'Public Grievance & Complaints',
            icon: '📝',
            info: '<strong>PG Portal:</strong> Register complaints for any government department<br><strong>Local Helpline:</strong> 1800-123-4567',
            link: 'https://pgportal.gov.in',
            linkText: 'PG Portal →'
        }
    ];

    const accordionContainer = document.querySelector('.accordion');

    servicesData.forEach(service => {
        const button = document.createElement('button');
        button.className = 'accordion-btn';
        button.setAttribute('aria-expanded', 'false');
        button.innerHTML = `
            <span class="icon">${service.icon}</span>
            <span>${service.title}</span>
        `;

        const panel = document.createElement('div');
        panel.className = 'accordion-panel';
        panel.innerHTML = `
            <div class="service-info">${service.info}</div>
            <a href="${service.link}" target="_blank" class="external-link">${service.linkText}</a>
        `;

        // Click to toggle
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
            panel.classList.toggle('active');
        });

        accordionContainer.appendChild(button);
        accordionContainer.appendChild(panel);
    });
});