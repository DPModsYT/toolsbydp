fetch("apps.json")
  .then((res) => res.json())
  .then((apps) => {
    const container = document.getElementById("appGrid");
    apps.forEach((app) => {
      const card = document.createElement("div");
      card.className = "app-card";
      card.innerHTML = `
        <img src="${app.icon}" alt="${app.name}" class="app-icon" />
        <div class="app-name">${app.name}</div>
        <div class="app-version">v${app.version}</div>
        <div class="app-rating">⭐ ${app.rating}</div>
        <a href="${app.url}" class="install-btn" target="_blank">Install</a>
      `;
      container.appendChild(card);
    });
  });
