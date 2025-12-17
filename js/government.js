document.addEventListener('DOMContentLoaded', () => {
    const servicesData = [
        {
            title: 'NYC 311 – City Services',
            icon: '🏙️',
            info: `
                <strong>Purpose:</strong> Non-emergency city services and information<br>
                <strong>Examples:</strong> Noise complaints, sanitation, parking issues, lost property<br>
                <strong>Phone:</strong> <a href="tel:311">311</a>
            `,
            link: 'https://www.nyc.gov/311',
            linkText: 'NYC 311 Official Website →'
        },
        {
            title: 'New York State DMV',
            icon: '🚗',
            info: `
                <strong>Services:</strong> Driver license, learner permit, vehicle registration, state ID<br>
                <strong>Appointments:</strong> Required for most in-person services
            `,
            link: 'https://dmv.ny.gov',
            linkText: 'NY State DMV Portal →'
        },
        {
            title: 'Social Security Administration (SSA)',
            icon: '🆔',
            info: `
                <strong>Services:</strong> Social Security Number (SSN), benefits, replacement cards<br>
                <strong>Eligibility:</strong> U.S. citizens and authorized residents
            `,
            link: 'https://www.ssa.gov',
            linkText: 'SSA Official Website →'
        },
        {
            title: 'IRS – Federal Tax Services',
            icon: '💰',
            info: `
                <strong>Services:</strong> Federal tax filing, refunds, payment plans<br>
                <strong>Online:</strong> IRS account access available
            `,
            link: 'https://www.irs.gov',
            linkText: 'IRS Website →'
        },
        {
            title: 'USCIS – Immigration Services',
            icon: '🛂',
            info: `
                <strong>Services:</strong> Visa status, Green Card, citizenship, work authorization<br>
                <strong>Application:</strong> Online filing supported
            `,
            link: 'https://www.uscis.gov',
            linkText: 'USCIS Portal →'
        },
        {
            title: 'NYC Housing & Development',
            icon: '🏠',
            info: `
                <strong>Services:</strong> Public housing, housing assistance, tenant rights<br>
                <strong>Programs:</strong> NYCHA, affordable housing listings
            `,
            link: 'https://www.nyc.gov/site/housing',
            linkText: 'NYC Housing Services →'
        },
        {
            title: 'Public Complaints & Grievances',
            icon: '📝',
            info: `
                <strong>Report:</strong> City service issues, corruption, misconduct<br>
                <strong>Helpline:</strong> <a href="tel:311">311</a>
            `,
            link: 'https://www.nyc.gov/site/doi',
            linkText: 'NYC Department of Investigation →'
        }
    ];

    const accordionContainer = document.querySelector('.accordion');

    servicesData.forEach(service => {
        const button = document.createElement('button');
        button.className = 'accordion-btn';
        button.setAttribute('aria-expanded', 'false');
        button.innerHTML = `
        <div class="accordion-left">
            <span class="icon">${service.icon}</span>
            <span class="title">${service.title}</span>
        </div>
        `;


        const panel = document.createElement('div');
        panel.className = 'accordion-panel';
        panel.innerHTML = `
            <div class="service-info">${service.info}</div>
            <a href="${service.link}" target="_blank" class="external-link">
                ${service.linkText}
            </a>
        `;

        button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !expanded);
            panel.classList.toggle('active');
        });

        accordionContainer.appendChild(button);
        accordionContainer.appendChild(panel);
    });
});
