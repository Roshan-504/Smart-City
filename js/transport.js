// js/transport.js

document.addEventListener("DOMContentLoaded", () => {
  // Updated Data with Time fields to match design
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

    /* 🔹 New Routes Added Below */

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


  const searchInput = document.getElementById("search-input");
  const typeFilter = document.getElementById("type-filter");
  const container = document.getElementById("routes-container");

  function renderRoutes() {
    if (!searchInput || !typeFilter || !container) return;

    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedType = typeFilter.value;

    const filtered = routesData.filter((route) => {
      const matchesSearch =
        route.name.toLowerCase().includes(searchTerm) ||
        route.path.toLowerCase().includes(searchTerm);
      const matchesType = selectedType === "all" || route.type === selectedType;
      return matchesSearch && matchesType;
    });

    container.innerHTML = "";

    if (filtered.length === 0) {
      container.innerHTML =
        '<p style="grid-column: 1 / -1; text-align: center; color: #666; padding: 2rem;">No routes found.</p>';
      return;
    }

    filtered.forEach((route) => {
      const card = document.createElement("div");
      card.className = "route-card";

      // New HTML Structure to match the image
      card.innerHTML = `
                <div class="card-header">
                    <h3>${route.name}</h3>
                    <span class="type-badge ${route.type}">${route.type}</span>
                </div>
                
                <div class="card-body">
                    <div class="info-row">
                        <span>${route.time}</span>
                    </div>
                    <div class="info-row">
                        <span>${route.path}</span>
                    </div>
                </div>

                <div class="fare-box ${route.type}">
                    <span class="icon">💳</span> 
                    ${route.fare} (OMNY/Card)
                </div>
            `;
      container.appendChild(card);
    });
  }

  if (searchInput) searchInput.addEventListener("input", renderRoutes);
  if (typeFilter) typeFilter.addEventListener("change", renderRoutes);

  renderRoutes();
});
