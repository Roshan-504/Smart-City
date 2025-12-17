
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");
  const successMessage = document.getElementById("success-message");
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  const subjectWrapper = document.getElementById("subject-wrapper");
  const subjectTrigger = subjectWrapper.querySelector(".custom-select-trigger");
  const subjectText = document.getElementById("subject-text");
  const subjectInput = document.getElementById("subject");
  const options = subjectWrapper.querySelectorAll(".option");

  subjectTrigger.addEventListener("click", () => {
    subjectWrapper.classList.toggle("open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const value = option.getAttribute("data-value");
      const text = option.textContent;

      subjectText.textContent = text;
      subjectText.style.color = "#333"; 

      subjectInput.value = value;

      subjectWrapper.classList.remove("open");

      const errorSpan =
        subjectWrapper.parentElement.querySelector(".error-message");
      errorSpan.textContent = "";
      subjectTrigger.style.borderColor = "#ccc";
    });
  });

  document.addEventListener("click", (e) => {
    if (!subjectWrapper.contains(e.target)) {
      subjectWrapper.classList.remove("open");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    inputs.forEach((input) => {
      const errorSpan = input.parentElement.querySelector(".error-message");

      if (!input.value.trim()) {
        isValid = false;
        errorSpan.textContent = "This field is required";
        if (input.classList.contains("custom-select-wrapper")) {
        } else {
          input.style.borderColor = "#e53935";
        }
      } else {
        errorSpan.textContent = "";
        input.style.borderColor = "#ccc";
      }
    });

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

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const errorSpan = input.parentElement.querySelector(".error-message");
      if (errorSpan) errorSpan.textContent = "";
      input.style.borderColor = "#ccc";
    });
  });
});
