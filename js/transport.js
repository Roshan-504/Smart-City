document.addEventListener("DOMContentLoaded", () => {
  const routesData = [
    {
      type: "subway",
      name: "A Train (Express)",
      time: "09:00 AM <span class='icon'>↔️</span> 11:00 PM",
      path: "Inwood - 207 St <span class='icon'>↔️</span> Far Rockaway",
      fare: "$2.90",
    },
    {
      type: "subway",
      name: "7 Train (Flushing)",
      time: "05:00 AM <span class='icon'>↔️</span> 12:00 AM",
      path: "Times Sq - 42 St <span class='icon'>↔️</span> Flushing - Main St",
      fare: "$2.90",
    },
    {
      type: "bus",
      name: "M60 SBS",
      time: "05:00 AM <span class='icon'>↔️</span> 01:00 AM",
      path: "West Side <span class='icon'>↔️</span> LaGuardia Airport",
      fare: "$2.90",
    },
    {
      type: "bus",
      name: "M15 Select Bus",
      time: "12:00 AM <span class='icon'>↔️</span> 11:59 PM",
      path: "South Ferry <span class='icon'>↔️</span> East Harlem",
      fare: "$2.90",
    },
    {
      type: "rail",
      name: "LIRR: City Zone",
      time: "06:00 AM <span class='icon'>↔️</span> 11:00 PM",
      path: "Penn Station <span class='icon'>↔️</span> Jamaica Station",
      fare: "$5.00",
    },
    {
      type: "ferry",
      name: "East River Route",
      time: "06:30 AM <span class='icon'>↔️</span> 10:30 PM",
      path: "Wall St <span class='icon'>↔️</span> Hunter Points South",
      fare: "$4.00",
    },
    {
      type: "subway",
      name: "L Train",
      time: "24 Hours <span class='icon'>↔️</span> Daily",
      path: "8 Ave (Manhattan) <span class='icon'>↔️</span> Canarsie (Brooklyn)",
      fare: "$2.90",
    },
    {
      type: "subway",
      name: "F Train",
      time: "05:00 AM <span class='icon'>↔️</span> 12:30 AM",
      path: "Jamaica - 179 St <span class='icon'>↔️</span> Coney Island",
      fare: "$2.90",
    },
    {
      type: "bus",
      name: "Bx12 SBS",
      time: "24 Hours <span class='icon'>↔️</span> Daily",
      path: "Inwood <span class='icon'>↔️</span> Pelham Bay Park",
      fare: "$2.90",
    },
  ];

  const mainContainer = document.getElementById("routes-container");
  const mainSearchInput = document.getElementById("search-input");
  const typeFilter = document.getElementById("type-filter");

  const searchOverlay = document.getElementById("search-overlay");
  const overlaySearchInput = document.getElementById("overlay-search-input");
  const overlayList = document.getElementById("overlay-routes-list");
  const closeSearchBtn = document.getElementById("close-search-btn");
  const clearBtn = document.getElementById("clear-search");

  function renderMainCards(searchTerm = "", filterType = "all") {
    if (!mainContainer) return;

    const filtered = routesData.filter((route) => {
      const cleanPath = route.path.replace(/<[^>]*>/g, "");
      const term = searchTerm.toLowerCase().trim();

      const matchesSearch =
        route.name.toLowerCase().includes(term) ||
        cleanPath.toLowerCase().includes(term);
      const matchesType = filterType === "all" || route.type === filterType;
      return matchesSearch && matchesType;
    });

    mainContainer.innerHTML = "";

    if (filtered.length === 0) {
      mainContainer.innerHTML =
        '<p style="grid-column: 1 / -1; text-align: center; color: #666; padding: 2rem;">No routes found.</p>';
      return;
    }

    filtered.forEach((route) => {
      const card = document.createElement("div");
      card.className = "route-card";
      card.innerHTML = `
        <div class="card-header">
            <h3>${route.name}</h3>
            <span class="type-badge ${route.type}">${route.type}</span>
        </div>
        <div class="card-body">
            <div class="info-row"><span>${route.time}</span></div>
            <div class="info-row"><span>${route.path}</span></div>
        </div>
        <div class="fare-box ${route.type}">
            <span class="icon">💳</span> 
            ${route.fare} (OMNY/Card)
        </div>
      `;
      mainContainer.appendChild(card);
    });
  }

  function renderOverlayList(searchTerm = "") {
    if (!overlayList) return;

    overlayList.innerHTML = "";
    const term = searchTerm.toLowerCase().trim();

    const filtered = routesData.filter((route) => {
      const cleanPath = route.path.replace(/<[^>]*>/g, "");
      return (
        route.name.toLowerCase().includes(term) ||
        cleanPath.toLowerCase().includes(term)
      );
    });

    filtered.forEach((route) => {
      const li = document.createElement("li");

      
      const displayPath = route.path

      li.innerHTML = `
        <div class="route-info">
            <span class="route-text">${displayPath}</span>
        </div>
        <span class="arrow-icon"><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 404.39"><path fill-rule="nonzero" d="M438.95 219.45 0 219.99v-34.98l443.3-.55L269.8 25.79 293.39 0 512 199.92 288.88 404.39l-23.59-25.8z"/></svg></span>
      `;

      li.addEventListener("click", () => {
        if (mainSearchInput) mainSearchInput.value = route.name;
        renderMainCards(route.name, "all");
        searchOverlay.classList.remove("active");
      });

      overlayList.appendChild(li);
    });
  }


  renderMainCards();
  renderOverlayList(); 

  if (typeFilter) {
    typeFilter.addEventListener("change", () => {
      renderMainCards(mainSearchInput.value, typeFilter.value);
    });
  }

  if (mainSearchInput) {
    mainSearchInput.addEventListener("click", (e) => {
      e.preventDefault();
      searchOverlay.classList.add("active");
      overlaySearchInput.value = "";
      overlaySearchInput.focus();
      renderOverlayList(); 
    });
  }

  if (closeSearchBtn) {
    closeSearchBtn.addEventListener("click", () => {
      searchOverlay.classList.remove("active");
    });
  }

  if (overlaySearchInput) {
    overlaySearchInput.addEventListener("input", (e) => {
      renderOverlayList(e.target.value);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      overlaySearchInput.value = "";
      overlaySearchInput.focus();
      renderOverlayList("");
    });
  }
});
