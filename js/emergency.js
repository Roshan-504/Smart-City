
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.accordion-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const panel = button.nextElementSibling;
            const isActive = panel.classList.contains('active');

            // Close all others (optional: remove if you want multiple open)
            document.querySelectorAll('.accordion-panel.active').forEach(p => {
                p.classList.remove('active');
            });
            document.querySelectorAll('.accordion-btn[aria-expanded="true"]').forEach(b => {
                b.setAttribute('aria-expanded', 'false');
            });

            // Toggle current
            if (!isActive) {
                panel.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
            } else {
                button.setAttribute('aria-expanded', 'false');
            }
        });
    });
});