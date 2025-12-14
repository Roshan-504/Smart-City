
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const successMessage = document.getElementById('success-message');

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

        inputs.forEach(input => {
            if (!input.validity.valid) {
                isValid = false;
                validateField({ target: input });
            }
        });

        if (isValid) {
            form.style.display = 'none';
            successMessage.classList.add('show');

            setTimeout(() => {
                form.reset();
            }, 1000);
        }
    });
});