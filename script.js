const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");
const searchInput = document.getElementById("searchInput");
const dictionaryList = document.getElementById("dictionaryList");

const dictionaryTerms = [
  {
    term: "ASIN",
    category: "Catalog",
    definition: "Amazon Standard Identification Number. It is the unique identifier for a product on Amazon."
  },
  {
    term: "PDP",
    category: "SEO",
    definition: "Product Detail Page. The page where the customer sees the product title, images, price, bullets, reviews and buying options."
  },
  {
    term: "Buy Box",
    category: "Marketplace",
    definition: "The main purchase box on a PDP. Winning the Buy Box means the seller is the default purchase option."
  },
  {
    term: "FBA",
    category: "Fulfillment",
    definition: "Fulfillment by Amazon. Amazon stores, packs and ships the products for the seller."
  },
  {
    term: "FBM",
    category: "Fulfillment",
    definition: "Fulfillment by Merchant. The seller is responsible for storing and shipping the product."
  },
  {
    term: "BSR",
    category: "Performance",
    definition: "Best Sellers Rank. A ranking that shows how well a product sells within a specific Amazon category."
  },
  {
    term: "CTR",
    category: "Metrics",
    definition: "Click-through rate. The percentage of impressions that resulted in clicks."
  },
  {
    term: "CVR",
    category: "Metrics",
    definition: "Conversion rate. The percentage of visits or clicks that resulted in orders."
  },
  {
    term: "A+ Content",
    category: "Content",
    definition: "Enhanced brand content available to registered brands. It adds visual modules below the bullet points."
  },
  {
    term: "Backend Keywords",
    category: "SEO",
    definition: "Hidden search terms added in Seller Central to help Amazon understand and index a product."
  },
  {
    term: "Search Query Performance",
    category: "Brand Analytics",
    definition: "A Brand Analytics report that shows query-level performance such as impressions, clicks, cart adds and purchases."
  },
  {
    term: "Sales Velocity",
    category: "Ranking",
    definition: "The speed and consistency at which a product generates sales. It can influence organic ranking."
  },
  {
    term: "Organic Rank",
    category: "SEO",
    definition: "The unpaid position where a product appears in Amazon search results for a specific keyword."
  },
  {
    term: "Sponsored Rank",
    category: "Advertising",
    definition: "The paid position where a sponsored product appears for a specific keyword."
  },
  {
    term: "Parent ASIN",
    category: "Catalog",
    definition: "The main variation structure that groups related child ASINs, such as different sizes or colors."
  },
  {
    term: "Child ASIN",
    category: "Catalog",
    definition: "A specific purchasable variation inside a parent listing, such as one size, color or quantity."
  },
  {
    term: "Variation",
    category: "Catalog",
    definition: "A product structure that groups related options such as size, color, flavor, scent or count."
  },
  {
    term: "Brand Registry",
    category: "Brand",
    definition: "Amazon program that gives brand owners access to tools such as A+ Content, Brand Stores and brand protection."
  },
  {
    term: "Brand Store",
    category: "Brand",
    definition: "A customizable storefront inside Amazon where brands can organize products and tell their brand story."
  },
  {
    term: "Unit Session Percentage",
    category: "Metrics",
    definition: "Amazon’s conversion metric that shows the percentage of sessions that resulted in ordered units."
  }
];

function showSection(sectionId) {
  sections.forEach(section => {
    section.classList.remove("active");
  });

  navItems.forEach(item => {
    item.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");
  document.querySelector(`[data-section="${sectionId}"]`).classList.add("active");
}

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const sectionId = item.getAttribute("data-section");
    showSection(sectionId);
  });
});

function renderDictionary(terms) {
  dictionaryList.innerHTML = "";

  if (terms.length === 0) {
    dictionaryList.innerHTML = `
      <div class="dictionary-card">
        <h3>No results found</h3>
        <p>Try searching another Amazon term, metric or SEO concept.</p>
      </div>
    `;
    return;
  }

  terms.forEach(item => {
    const card = document.createElement("div");
    card.className = "dictionary-card searchable-card";

    card.innerHTML = `
      <h3>${item.term}</h3>
      <p>${item.definition}</p>
      <span class="tag">${item.category}</span>
    `;

    dictionaryList.appendChild(card);
  });
}

searchInput.addEventListener("input", event => {
  const searchTerm = event.target.value.toLowerCase().trim();

  showSection("dictionary");

  const filteredTerms = dictionaryTerms.filter(item => {
    return (
      item.term.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm) ||
      item.definition.toLowerCase().includes(searchTerm)
    );
  });

  renderDictionary(filteredTerms);
});

renderDictionary(dictionaryTerms);
