document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      // Toggle menu visibility
      nav.classList.toggle("active");

      // IMPORTANT: Toggle class on hamburger to trigger CSS animation
      hamburger.classList.toggle("active");
    });
  }

  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
      greeting = "Good Morning!";
    } else if (hour < 18) {
      greeting = "Good Afternoon!";
    } else {
      greeting = "Good Evening!";
    }

    greetingElement.textContent = greeting;
  }

  const highlightsData = [
    {
      title: "Upcoming Event",
      content: "Annual City Festival at Central Park – December 20–22, 2025",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    },
    {
      title: "Road Alert",
      content: "Main Street partial closure due to maintenance until Dec 18.",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a",
    },
    {
      title: "New Service",
      content: "Online utility bill payment portal now live!",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a",
    },
  ];

  const highlightsContainer = document.getElementById("highlights-container");
  if (highlightsContainer && highlightsData.length > 0) {
    highlightsData.forEach((item) => {
      const card = document.createElement("div");
      card.className = "highlight-card";

      card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="highlight-text">
                <h4>${item.title}</h4>
                <p>${item.content}</p>
            </div>
        `;

      highlightsContainer.appendChild(card);
    });
  }
});
