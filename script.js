const app = document.getElementById("app");
const sidebarNav = document.getElementById("sidebarNav");
const pageTitle = document.getElementById("pageTitle");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const themeToggle = document.getElementById("themeToggle");

const navGroups = [
  {
    title: "Knowledge Base",
    items: [
      { id: "home", label: "Home" },
      { id: "Amazon Ecosystem", label: "Amazon Ecosystem" },
      { id: "Marketplace", label: "Marketplace" },
      { id: "Catalog", label: "Catalog" },
      { id: "Product Detail Page", label: "Product Detail Page" },
      { id: "Fulfillment", label: "Fulfillment" },
      { id: "Brand", label: "Brand" },
      { id: "Seller Central", label: "Seller Central" },
      { id: "Advertising", label: "Advertising" }
    ]
  }
];

function renderNav() {
  sidebarNav.innerHTML = navGroups.map(group => `
    <div class="nav-group">
      <div class="nav-group-title">${group.title}</div>
      ${group.items.map(item => `
        <button class="nav-item" data-id="${item.id}">
          <span>${item.label}</span>
        </button>
      `).join("")}
    </div>
  `).join("");

  document.querySelectorAll(".nav-item").forEach(button => {
    button.addEventListener("click", () => renderPage(button.dataset.id));
  });
}

function renderHome() {
  pageTitle.textContent = "Home";

  const categories = [...new Set(articles.map(article => article.category))];

  app.innerHTML = `
    <div class="hero">
      <span class="badge">Amazon.com Help Site</span>
      <h3>Amazon Knowledge Base</h3>
      <p>
        A simple help center to understand how Amazon.com works: marketplace, catalog,
        product pages, fulfillment, brands, advertising and Seller Central.
      </p>
    </div>

    <div class="grid grid-3">
      ${categories.map(category => `
        <div class="card" onclick="renderCategory('${category}')">
          <span class="badge">${category}</span>
          <h3>${category}</h3>
          <p>${articles.filter(article => article.category === category).length} article(s)</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderCategory(category) {
  pageTitle.textContent = category;

  const categoryArticles = articles.filter(article => article.category === category);

  app.innerHTML = `
    <div class="grid grid-2">
      ${categoryArticles.map(article => `
        <div class="card" onclick="renderArticleById('${article.id}')">
          <span class="badge">${article.category}</span>
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderArticleById(id) {
  const article = articles.find(item => item.id === id);

  if (!article) {
    pageTitle.textContent = "Not Found";
    app.innerHTML = `<div class="empty">This article does not exist yet.</div>`;
    return;
  }

  pageTitle.textContent = article.title;

  app.innerHTML = `
    <article class="article">
      <span class="badge">${article.category}</span>
      <h3>${article.title}</h3>

      <div class="meta-row">
        <span class="meta-pill">${article.level}</span>
        <span class="meta-pill">${article.readTime}</span>
      </div>

      <p>${article.summary}</p>

      ${article.content}
    </article>
  `;
}

function renderPage(id) {
  document.querySelectorAll(".nav-item").forEach(button => {
    button.classList.toggle("active", button.dataset.id === id);
  });

  searchResults.classList.remove("active");
  searchInput.value = "";

  if (id === "home") {
    renderHome();
    return;
  }

  renderCategory(id);
}

function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();

  if (!query) {
    searchResults.classList.remove("active");
    searchResults.innerHTML = "";
    return;
  }

  const results = articles.filter(article =>
    article.title.toLowerCase().includes(query) ||
    article.category.toLowerCase().includes(query) ||
    article.summary.toLowerCase().includes(query) ||
    article.content.toLowerCase().includes(query)
  );

  searchResults.innerHTML = results.length
    ? results.map(article => `
        <div class="search-result" onclick="renderArticleById('${article.id}'); searchResults.classList.remove('active'); searchInput.value='';">
          <strong>${article.title}</strong>
          <span>${article.category} · ${article.level} · ${article.readTime}</span>
        </div>
      `).join("")
    : `
      <div class="search-result">
        <strong>No results found</strong>
        <span>Try another Amazon term.</span>
      </div>
    `;

  searchResults.classList.add("active");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});

searchInput.addEventListener("input", handleSearch);

renderNav();
renderHome();

const homeButton = document.querySelector('[data-id="home"]');
if (homeButton) homeButton.classList.add("active");
