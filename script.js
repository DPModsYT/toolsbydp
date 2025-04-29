let allApps = [];

function renderApps(apps) {
  const container = document.querySelector('.app-container');
  container.innerHTML = '';
  apps.forEach(app => {
    const card = document.createElement('a');
    card.className = 'app-card';
    card.href = app.link;
    card.target = '_blank';
    card.innerHTML = `
      <img src="${app.icon}" class="app-icon" alt="${app.name}" />
      <div class="app-name">${app.name}</div>
      <div class="app-rating">⭐ ${app.rating}</div>
    `;
    container.appendChild(card);
  });
}

fetch('apps.json')
  .then(response => response.json())
  .then(apps => {
    allApps = apps;
    renderApps(allApps);
  })
  .catch(error => {
    console.error('Failed to load apps.json:', error);
    document.querySelector('.app-container').innerText = 'Error loading apps.';
  });

document.getElementById('searchInput').addEventListener('input', function () {
  const searchValue = this.value.toLowerCase();
  const filtered = allApps.filter(app => app.name.toLowerCase().includes(searchValue));
  renderApps(filtered);
});

document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
