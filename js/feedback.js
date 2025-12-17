// js/feedback.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");
  const successMessage = document.getElementById("success-message");
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  // Custom Dropdown Logic
  const subjectWrapper = document.getElementById("subject-wrapper");
  const subjectTrigger = subjectWrapper.querySelector(".custom-select-trigger");
  const subjectText = document.getElementById("subject-text");
  const subjectInput = document.getElementById("subject");
  const options = subjectWrapper.querySelectorAll(".option");

  // 1. Toggle Dropdown
  subjectTrigger.addEventListener("click", () => {
    subjectWrapper.classList.toggle("open");
  });

  // 2. Select Option
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const value = option.getAttribute("data-value");
      const text = option.textContent;

      // Update UI
      subjectText.textContent = text;
      subjectText.style.color = "#333"; // Make text darker (not placeholder gray)

      // Update Hidden Input
      subjectInput.value = value;

      // Close Dropdown
      subjectWrapper.classList.remove("open");

      // Clear Error
      const errorSpan =
        subjectWrapper.parentElement.querySelector(".error-message");
      errorSpan.textContent = "";
      subjectTrigger.style.borderColor = "#ccc";
    });
  });

  // 3. Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!subjectWrapper.contains(e.target)) {
      subjectWrapper.classList.remove("open");
    }
  });

  // 4. Form Validation & Submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Check text inputs
    inputs.forEach((input) => {
      const errorSpan = input.parentElement.querySelector(".error-message");

      if (!input.value.trim()) {
        isValid = false;
        errorSpan.textContent = "This field is required";
        if (input.classList.contains("custom-select-wrapper")) {
          // special handling if we were validating the wrapper directly
        } else {
          input.style.borderColor = "#e53935";
        }
      } else {
        errorSpan.textContent = "";
        input.style.borderColor = "#ccc";
      }
    });

    // Check Custom Dropdown
    const dropdownError =
      subjectWrapper.parentElement.querySelector(".error-message");
    if (!subjectInput.value) {
      isValid = false;
      dropdownError.textContent = "Please select a subject";
      subjectTrigger.style.borderColor = "#e53935";
    } else {
      dropdownError.textContent = "";
      subjectTrigger.style.borderColor = "#ccc";
    }

    if (isValid) {
      const submitBtn = form.querySelector(".submit-btn");
      submitBtn.textContent = "Submitting...";
      submitBtn.disabled = true;

      setTimeout(() => {
        form.style.display = "none";
        successMessage.classList.add("show");
      }, 1000);
    }
  });

  // Clear errors on typing
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const errorSpan = input.parentElement.querySelector(".error-message");
      if (errorSpan) errorSpan.textContent = "";
      input.style.borderColor = "#ccc";
    });
  });
});
