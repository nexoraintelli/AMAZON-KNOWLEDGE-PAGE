const app = document.getElementById("app");
const sidebarNav = document.getElementById("sidebarNav");
const pageTitle = document.getElementById("pageTitle");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const themeToggle = document.getElementById("themeToggle");

const navGroups = [
  {
    title: "Start",
    items: [
      { id: "home", label: "Home" },
      { id: "amazon-basics", label: "Amazon Basics" },
      { id: "google-vs-amazon", label: "Google vs Amazon" }
    ]
  },
  {
    title: "SEO",
    items: [
      { id: "amazon-seo", label: "How Amazon SEO Works" },
      { id: "title-guidelines", label: "Title Guidelines" },
      { id: "bullet-points", label: "Bullet Points" },
      { id: "backend-keywords", label: "Backend Keywords" },
      { id: "pdp-anatomy", label: "PDP Anatomy" }
    ]
  },
  {
    title: "Analytics",
    items: [
      { id: "metrics", label: "Metrics" },
      { id: "tools", label: "Tools" },
      { id: "sops", label: "SOPs" },
      { id: "dictionary", label: "Dictionary" }
    ]
  }
];

const articles = [
  {
    id: "amazon-basics",
    title: "Amazon Basics",
    category: "Fundamentals",
    level: "Beginner",
    readTime: "6 min",
    summary: "Understand the foundation of Amazon.com, Seller Central, ASINs, FBA, Buy Box and Brand Registry.",
    content: `
      <h3>Amazon.com in One Sentence</h3>
      <p>Amazon.com is a marketplace where product visibility depends on both keyword relevance and product performance.</p>

      <div class="article-callout">
        The most important mindset shift: Amazon is not only a search engine. It is a buying engine.
      </div>

      <h3>Core Concepts</h3>
      <ul>
        <li><strong>ASIN:</strong> the unique Amazon product identifier.</li>
        <li><strong>PDP:</strong> the Product Detail Page where the customer decides whether to buy.</li>
        <li><strong>Seller Central:</strong> the platform sellers use to manage listings, inventory, content and reports.</li>
        <li><strong>FBA:</strong> Fulfillment by Amazon. Amazon stores, packs and ships the product.</li>
        <li><strong>Buy Box:</strong> the default buying area on the product page.</li>
        <li><strong>Brand Registry:</strong> gives brands access to A+ Content, Brand Stores and brand protection tools.</li>
      </ul>
    `
  },
  {
    id: "google-vs-amazon",
    title: "Google SEO vs Amazon SEO",
    category: "Fundamentals",
    level: "Beginner",
    readTime: "5 min",
    summary: "Learn the main differences between search optimization for Google and search optimization for Amazon.com.",
    content: `
      <h3>The Main Difference</h3>
      <p>Google SEO is usually broader and can serve informational, navigational or commercial intent. Amazon SEO is usually much closer to purchase intent.</p>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Google SEO</th>
              <th>Amazon SEO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Search intent can be informational</td>
              <td>Search intent is usually transactional</td>
            </tr>
            <tr>
              <td>Backlinks and authority matter</td>
              <td>Sales performance and conversion matter</td>
            </tr>
            <tr>
              <td>Content depth is often rewarded</td>
              <td>Clear conversion-focused content is rewarded</td>
            </tr>
            <tr>
              <td>Optimizes websites, pages and articles</td>
              <td>Optimizes ASINs and Product Detail Pages</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: "amazon-seo",
    title: "How Amazon SEO Works",
    category: "SEO",
    level: "Beginner",
    readTime: "8 min",
    summary: "Understand relevance, indexation, performance, sales velocity and customer experience.",
    content: `
      <h3>What is Amazon SEO?</h3>
      <p>Amazon SEO is the process of improving a product listing so Amazon can understand it, index it for relevant queries and show it to shoppers who are likely to buy.</p>

      <h3>Core Ranking Logic</h3>
      <ul>
        <li><strong>Relevance:</strong> how well the product matches the search query.</li>
        <li><strong>Performance:</strong> how well the product converts after being seen.</li>
        <li><strong>Sales Velocity:</strong> how consistently the product generates sales.</li>
        <li><strong>Customer Experience:</strong> reviews, ratings, price, fulfillment and availability.</li>
      </ul>

      <h3>Basic Flow</h3>
      <div class="flow">
        <div class="flow-step">Customer searches a keyword</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Amazon matches indexed products</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Products compete by relevance and performance</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Customer clicks or skips</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">CTR, CVR and sales behavior influence future visibility</div>
      </div>
    `
  },
  {
    id: "title-guidelines",
    title: "Title Guidelines",
    category: "Listing Optimization",
    level: "Beginner",
    readTime: "7 min",
    summary: "Learn how to structure Amazon.com product titles for relevance, clarity and conversion.",
    content: `
      <h3>Purpose of the Title</h3>
      <p>The title helps Amazon understand what the product is and helps the shopper quickly decide whether the product matches their search.</p>

      <h3>Suggested Structure</h3>
      <p><strong>Brand + Product Type + Main Keyword + Key Feature + Size/Color/Quantity</strong></p>

      <h3>Good Title Should Include</h3>
      <ul>
        <li>Main keyword.</li>
        <li>Product type.</li>
        <li>Primary attribute or differentiator.</li>
        <li>Size, quantity, color or material when relevant.</li>
        <li>Readable structure for humans.</li>
      </ul>

      <h3>Avoid</h3>
      <ul>
        <li>Keyword stuffing.</li>
        <li>Promotional claims.</li>
        <li>ALL CAPS.</li>
        <li>Unnecessary repetition.</li>
        <li>Competitor brand names.</li>
      </ul>
    `
  },
  {
    id: "bullet-points",
    title: "Bullet Points",
    category: "Listing Optimization",
    level: "Beginner",
    readTime: "6 min",
    summary: "Understand how bullets support conversion, objection handling and keyword relevance.",
    content: `
      <h3>Purpose of Bullet Points</h3>
      <p>Bullet points explain the product’s value, reduce doubts and support conversion.</p>

      <h3>Recommended Logic</h3>
      <ul>
        <li><strong>Bullet 1:</strong> main benefit.</li>
        <li><strong>Bullet 2:</strong> product differentiator.</li>
        <li><strong>Bullet 3:</strong> use case or customer problem solved.</li>
        <li><strong>Bullet 4:</strong> specifications, material, size or compatibility.</li>
        <li><strong>Bullet 5:</strong> trust, care instructions, warranty or brand promise.</li>
      </ul>

      <h3>SEO Role</h3>
      <p>Bullets should include relevant secondary keywords naturally, but their main function is to help the customer buy.</p>
    `
  },
  {
    id: "backend-keywords",
    title: "Backend Keywords",
    category: "Listing Optimization",
    level: "Beginner",
    readTime: "6 min",
    summary: "Learn how hidden search terms expand indexation without making the visible listing spammy.",
    content: `
      <h3>What Are Backend Keywords?</h3>
      <p>Backend keywords are hidden search terms added in Seller Central to help Amazon associate the product with relevant queries.</p>

      <h3>Best Practices</h3>
      <ul>
        <li>Use relevant keywords not already overused in the visible listing.</li>
        <li>Include synonyms, alternate spellings and use-case terms.</li>
        <li>Avoid repeating the same keyword multiple times.</li>
        <li>Do not use competitor brand names.</li>
        <li>Do not use misleading or prohibited claims.</li>
      </ul>

      <div class="article-callout">
        Simple rule: backend keywords should expand indexation without creating irrelevant traffic.
      </div>
    `
  },
  {
    id: "pdp-anatomy",
    title: "PDP Anatomy",
    category: "Listing Optimization",
    level: "Beginner",
    readTime: "5 min",
    summary: "Explore the main elements of a Product Detail Page and how each one affects SEO and conversion.",
    content: `
      <h3>Main PDP Elements</h3>
      <div class="grid grid-3">
        <div class="card"><h3>Title</h3><p>Supports relevance, indexation and click decision.</p></div>
        <div class="card"><h3>Main Image</h3><p>Strongly affects CTR from search results.</p></div>
        <div class="card"><h3>Price</h3><p>Impacts competitiveness and conversion.</p></div>
        <div class="card"><h3>Rating</h3><p>Builds trust and affects click probability.</p></div>
        <div class="card"><h3>Reviews</h3><p>Support social proof and conversion.</p></div>
        <div class="card"><h3>Bullets</h3><p>Explain value and reduce objections.</p></div>
        <div class="card"><h3>A+ Content</h3><p>Improves education, trust and brand perception.</p></div>
        <div class="card"><h3>Variations</h3><p>Help customers choose size, color, flavor or quantity.</p></div>
        <div class="card"><h3>Buy Box</h3><p>Determines the default buying option.</p></div>
      </div>
    `
  },
  {
    id: "metrics",
    title: "Amazon Metrics",
    category: "Analytics",
    level: "Beginner",
    readTime: "7 min",
    summary: "Understand CTR, CVR, Unit Session Percentage, BSR, Organic Rank and Sales Velocity.",
    content: `
      <h3>Core Metrics</h3>
      <div class="grid grid-2">
        <div class="card"><h3>CTR</h3><p>Shows how often impressions turn into clicks. Influenced by image, price, title, rating and reviews.</p></div>
        <div class="card"><h3>CVR</h3><p>Shows how often sessions or clicks turn into purchases. Influenced by PDP quality, offer, price and trust.</p></div>
        <div class="card"><h3>Unit Session %</h3><p>Amazon’s conversion metric based on sessions and ordered units.</p></div>
        <div class="card"><h3>Sales Velocity</h3><p>The speed and consistency of sales over time.</p></div>
        <div class="card"><h3>BSR</h3><p>Best Sellers Rank. Indicates category-level sales performance.</p></div>
        <div class="card"><h3>Organic Rank</h3><p>The unpaid search position for an ASIN on a specific keyword.</p></div>
      </div>
    `
  },
  {
    id: "tools",
    title: "Tools",
    category: "Analytics",
    level: "Beginner",
    readTime: "5 min",
    summary: "Learn the role of Seller Central, Brand Analytics, SQP, Helium 10, DataDive and Keepa.",
    content: `
      <h3>Common Amazon SEO Tools</h3>
      <ul>
        <li><strong>Seller Central:</strong> product content, inventory, reports and backend fields.</li>
        <li><strong>Brand Analytics:</strong> search and market-level insights for registered brands.</li>
        <li><strong>Search Query Performance:</strong> query-level funnel data.</li>
        <li><strong>Helium 10:</strong> keyword research, competitor research and listing analysis.</li>
        <li><strong>DataDive:</strong> deeper keyword and competitor intelligence.</li>
        <li><strong>Keepa:</strong> price, rank and Buy Box history.</li>
      </ul>
    `
  },
  {
    id: "sops",
    title: "SOPs",
    category: "Operations",
    level: "Intermediate",
    readTime: "8 min",
    summary: "Follow a practical workflow to audit a new ASIN and identify SEO opportunities.",
    content: `
      <h3>How to Audit a New ASIN</h3>
      <ol>
        <li>Understand the product, category and customer use case.</li>
        <li>Identify main competitors.</li>
        <li>Analyze main keyword and secondary keyword opportunities.</li>
        <li>Review title structure.</li>
        <li>Review bullet points.</li>
        <li>Review images and A+ Content.</li>
        <li>Check reviews, rating, price and offer quality.</li>
        <li>Compare the PDP against competitors.</li>
        <li>Identify whether the issue is traffic, CTR or CVR.</li>
        <li>Prioritize recommendations by impact and effort.</li>
      </ol>
    `
  }
];

const dictionaryTerms = [
  ["ASIN", "Catalog", "Amazon Standard Identification Number. A unique product identifier on Amazon."],
  ["PDP", "SEO", "Product Detail Page. The page where shoppers evaluate and buy the product."],
  ["Buy Box", "Marketplace", "The main purchase box on a PDP and the default buying option."],
  ["FBA", "Fulfillment", "Fulfillment by Amazon. Amazon stores, packs and ships the product."],
  ["FBM", "Fulfillment", "Fulfillment by Merchant. The seller handles fulfillment."],
  ["BSR", "Performance", "Best Sellers Rank. A category-level indicator of sales performance."],
  ["CTR", "Metrics", "Click-through rate. The percentage of impressions that become clicks."],
  ["CVR", "Metrics", "Conversion rate. The percentage of visits or clicks that become orders."],
  ["A+ Content", "Content", "Enhanced branded content available to registered brands."],
  ["Backend Keywords", "SEO", "Hidden search terms added in Seller Central to support indexation."],
  ["Search Query Performance", "Analytics", "A Brand Analytics report with query-level funnel data."],
  ["Sales Velocity", "Ranking", "The speed and consistency of sales over time."],
  ["Organic Rank", "SEO", "The unpaid search position for an ASIN on a specific keyword."],
  ["Sponsored Rank", "Advertising", "The paid search position for a sponsored product."],
  ["Parent ASIN", "Catalog", "The parent structure that groups related child variations."],
  ["Child ASIN", "Catalog", "A specific purchasable variation under a parent ASIN."],
  ["Variation", "Catalog", "A product structure that groups options like size, color, scent or count."],
  ["Brand Registry", "Brand", "Amazon program that gives brands access to A+, Stores and protection tools."],
  ["Brand Store", "Brand", "A customizable storefront inside Amazon."],
  ["Unit Session Percentage", "Metrics", "Amazon’s conversion metric based on sessions and ordered units."]
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

  app.innerHTML = `
    <div class="hero">
      <span class="badge">Amazon.com SEO Training</span>
      <h3>Learn Amazon SEO like a Strategist</h3>
      <p>
        A practical internal knowledge hub designed to help professionals with Google SEO background understand Amazon.com SEO, listing optimization, marketplace metrics and decision-making faster.
      </p>
    </div>

    <div class="grid grid-3">
      ${articles.slice(0, 6).map(article => `
        <div class="card" onclick="renderPage('${article.id}')">
          <span class="badge">${article.category}</span>
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderArticle(article) {
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

function renderDictionary() {
  pageTitle.textContent = "Dictionary";

  app.innerHTML = `
    <div class="grid grid-3">
      ${dictionaryTerms.map(([term, category, definition]) => `
        <div class="card">
          <span class="badge">${category}</span>
          <h3>${term}</h3>
          <p>${definition}</p>
        </div>
      `).join("")}
    </div>
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

  if (id === "dictionary") {
    renderDictionary();
    return;
  }

  const article = articles.find(item => item.id === id);

  if (article) {
    renderArticle(article);
  } else {
    pageTitle.textContent = "Not Found";
    app.innerHTML = `<div class="empty">This page does not exist yet.</div>`;
  }
}

function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();

  if (!query) {
    searchResults.classList.remove("active");
    searchResults.innerHTML = "";
    return;
  }

  const articleResults = articles.filter(article =>
    article.title.toLowerCase().includes(query) ||
    article.category.toLowerCase().includes(query) ||
    article.summary.toLowerCase().includes(query) ||
    article.content.toLowerCase().includes(query)
  );

  const dictionaryResults = dictionaryTerms.filter(([term, category, definition]) =>
    term.toLowerCase().includes(query) ||
    category.toLowerCase().includes(query) ||
    definition.toLowerCase().includes(query)
  );

  const html = `
    ${articleResults.map(article => `
      <div class="search-result" onclick="renderPage('${article.id}')">
        <strong>${article.title}</strong>
        <span>${article.category} · ${article.level} · ${article.readTime}</span>
      </div>
    `).join("")}

    ${dictionaryResults.map(([term, category, definition]) => `
      <div class="search-result" onclick="renderDictionary(); pageTitle.textContent='Dictionary'; searchResults.classList.remove('active');">
        <strong>${term}</strong>
        <span>${category} · ${definition}</span>
      </div>
    `).join("")}
  `;

  searchResults.innerHTML = html || `
    <div class="search-result">
      <strong>No results found</strong>
      <span>Try another Amazon term or SEO concept.</span>
    </div>
  `;

  searchResults.classList.add("active");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});

searchInput.addEventListener("input", handleSearch);

renderNav();
renderHome();
document.querySelector('[data-id="home"]').classList.add("active");
