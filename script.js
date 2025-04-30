/* 1. GLOBAL & BACKGROUND */
body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;

  background: url('/mnt/data/1f485382-1d90-4ee3-890f-a5ced0f3b069.png') center center / cover no-repeat fixed;

  color: #fff;
  min-height: 100vh;
  backdrop-filter: blur(0px);
}

/* Dark theme override if needed */
.dark-theme body,
body.dark-theme {
  background: rgba(0, 0, 0, 0.6); /* fallback tone */
  color: #fff;
}

/* 2. HEADER */
.header, .title {
  text-align: center;
  padding: 1.5rem 1rem 0;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}

/* 3. SEARCH BAR & THEME TOGGLE */
.search-theme {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

#searchInput {
  padding: 0.5rem 1rem;
  border-radius: 25px;
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(6px);
  color: white;
  font-size: 1rem;
  outline: none;
  width: 250px;
}

#searchInput::placeholder {
  color: rgba(255,255,255,0.7);
}

#toggleTheme {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  backdrop-filter: blur(6px);
}

/* 4. APP CONTAINER */
.app-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}

/* 5. GLASSMORPHIC CARD */
.app-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  padding: 1.2rem;
  text-align: center;
  color: white;
  text-decoration: none;
  transition: transform 0.2s, background 0.3s;
  position: relative;
}

.app-card:hover {
  transform: scale(1.05);
}

.app-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 0.8rem;
  border-radius: 12px;
  object-fit: contain;
}

.app-name {
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.app-rating,
.app-version,
.app-date {
  font-size: 0.85rem;
  margin: 0.2rem 0;
}

.app-label {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #2196f3;
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: bold;
}

/* 6. FOOTER */
footer {
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.8);
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(6px);
}

.footer-logo {
  display: block;
  margin: 0.5rem auto 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

/* 7. RESPONSIVE */
@media (max-width: 480px) {
  .app-container {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    padding: 1rem;
    gap: 1rem;
  }

  #searchInput {
    width: 70%;
  }
}
