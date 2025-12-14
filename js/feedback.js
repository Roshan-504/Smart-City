// pages/js/feedback.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const successMessage = document.getElementById('success-message');

    // Real-time validation
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });

    function validateField(e) {
        const field = e.target;
        const errorSpan = field.parentElement.querySelector('.error-message');

        if (!field.validity.valid) {
            if (field.validity.valueMissing) {
                errorSpan.textContent = 'This field is required.';
            } else if (field.validity.typeMismatch && field.type === 'email') {
                errorSpan.textContent = 'Please enter a valid email address.';
            } else {
                errorSpan.textContent = 'Please fill this field correctly.';
            }
        } else {
            errorSpan.textContent = '';
        }
    }

    function clearError(e) {
        const errorSpan = e.target.parentElement.querySelector('.error-message');
        errorSpan.textContent = '';
    }

   
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        let isValid = true;

        // Check all required fields
        inputs.forEach(input => {
            if (!input.validity.valid) {
                isValid = false;
                validateField({ target: input });
            }
        });

        if (isValid) {
            // Hide form and show success message
            form.style.display = 'none';
            successMessage.classList.add('show');

            // Optional: Reset form after delay
            setTimeout(() => {
                form.reset();
            }, 1000);
        }
    });
});