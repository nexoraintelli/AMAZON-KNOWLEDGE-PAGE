const articles = [
  {
    id: "what-is-amazon",
    title: "What is Amazon?",
    category: "Amazon Ecosystem",
    level: "Beginner",
    readTime: "6 min",
    summary: "Understand Amazon as a marketplace, retailer, logistics network, advertising platform and technology ecosystem.",
    content: `
      <h3>Definition</h3>
      <p>Amazon is not just an online store. It is a large technology and commerce ecosystem that includes retail, marketplace selling, fulfillment, advertising, subscriptions, devices, cloud services and business tools.</p>

      <h3>Why It Matters</h3>
      <p>To work with Amazon, you need to understand that product performance is influenced by many connected systems: catalog, pricing, fulfillment, reviews, advertising, search, inventory and customer experience.</p>

      <h3>How It Works</h3>
      <p>On Amazon.com, products may be sold directly by Amazon, by third-party sellers, or by brands and vendors. Customers search, compare, click, buy, receive products, leave reviews and often repurchase.</p>

      <h3>Example</h3>
      <p>A customer searches for “protein powder.” Amazon shows products based on relevance, availability, price, reviews, fulfillment method, advertising and historical performance.</p>

      <h3>Related Articles</h3>
      <ul>
        <li>Amazon Marketplace</li>
        <li>Seller Central</li>
        <li>FBA</li>
        <li>Advertising</li>
      </ul>
    `
  },

  {
    id: "amazon-marketplace",
    title: "What is Amazon Marketplace?",
    category: "Amazon Ecosystem",
    level: "Beginner",
    readTime: "5 min",
    summary: "Learn how Amazon Marketplace allows independent sellers and brands to sell products on Amazon.com.",
    content: `
      <h3>Definition</h3>
      <p>Amazon Marketplace is the part of Amazon where third-party sellers list and sell products directly to Amazon customers.</p>

      <h3>Why It Matters</h3>
      <p>Many products on Amazon are not sold by Amazon directly. They are sold by independent sellers, brands, distributors or agencies managing client accounts.</p>

      <h3>How It Works</h3>
      <p>Sellers create listings, manage inventory, set prices, choose fulfillment methods and compete for visibility and sales. Amazon provides the platform, traffic, checkout experience and optional services such as FBA and advertising.</p>

      <h3>Example</h3>
      <p>A skincare brand can sell its products on Amazon.com using Seller Central, ship inventory to Amazon through FBA and advertise using Sponsored Products.</p>

      <h3>Common Mistake</h3>
      <p>Beginners often assume Amazon owns every product listed on Amazon.com. In reality, many listings are managed by third-party sellers.</p>
    `
  },

  {
    id: "seller-vs-vendor",
    title: "Seller vs Vendor",
    category: "Amazon Ecosystem",
    level: "Beginner",
    readTime: "6 min",
    summary: "Understand the difference between third-party sellers and first-party vendors.",
    content: `
      <h3>Definition</h3>
      <p>A seller usually operates as a third-party seller, also called 3P. A vendor usually sells products wholesale to Amazon, also called 1P.</p>

      <h3>Why It Matters</h3>
      <p>The selling model changes who controls pricing, inventory, listing content, advertising access and operational decisions.</p>

      <h3>How It Works</h3>
      <p>In a seller model, the brand or merchant sells directly to customers through Amazon. In a vendor model, Amazon buys products from the vendor and resells them to customers.</p>

      <h3>Example</h3>
      <p>A 3P seller may control its listing, pricing and inventory inside Seller Central. A 1P vendor may work through Vendor Central and sell inventory wholesale to Amazon.</p>

      <h3>Pro Tip</h3>
      <p>When analyzing an account, always confirm whether the business is seller-side, vendor-side or hybrid before recommending actions.</p>
    `
  },

  {
    id: "seller-central",
    title: "What is Seller Central?",
    category: "Seller Central",
    level: "Beginner",
    readTime: "5 min",
    summary: "Learn what Seller Central is and why it is the main platform for Amazon sellers.",
    content: `
      <h3>Definition</h3>
      <p>Seller Central is the main hub where Amazon sellers manage their selling account, products, prices, inventory, orders, reports and business operations.</p>

      <h3>Why It Matters</h3>
      <p>Most operational and strategic actions for a seller happen inside Seller Central: editing listings, checking reports, managing inventory, monitoring account health and accessing growth tools.</p>

      <h3>Main Areas</h3>
      <ul>
        <li>Catalog</li>
        <li>Inventory</li>
        <li>Pricing</li>
        <li>Orders</li>
        <li>Advertising</li>
        <li>Reports</li>
        <li>Performance</li>
        <li>Brands</li>
      </ul>

      <h3>Example</h3>
      <p>If you need to update a product title, backend keywords or bullet points, you usually do it through Seller Central.</p>
    `
  },

  {
    id: "fba",
    title: "What is FBA?",
    category: "Fulfillment",
    level: "Beginner",
    readTime: "6 min",
    summary: "Understand Fulfillment by Amazon and how it affects delivery, Prime eligibility and customer experience.",
    content: `
      <h3>Definition</h3>
      <p>FBA means Fulfillment by Amazon. It allows sellers to send inventory to Amazon fulfillment centers so Amazon can pick, pack, ship, handle customer service and process returns.</p>

      <h3>Why It Matters</h3>
      <p>FBA can improve customer experience because products may become Prime eligible and benefit from Amazon's fulfillment infrastructure.</p>

      <h3>How It Works</h3>
      <div class="flow">
        <div class="flow-step">Seller sends inventory to Amazon</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Amazon stores the products</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Customer places an order</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Amazon picks, packs and ships</div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Amazon handles customer service and returns</div>
      </div>

      <h3>Example</h3>
      <p>A supplement brand sends inventory to Amazon. When a customer buys the product, Amazon ships it directly to the customer with Prime delivery when eligible.</p>

      <h3>Common Mistake</h3>
      <p>FBA does not automatically solve every business problem. Sellers still need strong listings, competitive pricing, healthy inventory and good customer reviews.</p>
    `
  },

  {
    id: "fbm",
    title: "What is FBM?",
    category: "Fulfillment",
    level: "Beginner",
    readTime: "4 min",
    summary: "Understand Fulfillment by Merchant and when sellers handle fulfillment themselves.",
    content: `
      <h3>Definition</h3>
      <p>FBM means Fulfillment by Merchant. In this model, the seller is responsible for storing, packing and shipping orders directly to customers.</p>

      <h3>Why It Matters</h3>
      <p>FBM gives sellers more control over fulfillment, but it also requires strong logistics, reliable shipping and customer service management.</p>

      <h3>How It Works</h3>
      <p>The seller lists the product on Amazon, receives the order, ships the item and handles fulfillment responsibilities according to Amazon’s performance expectations.</p>

      <h3>Example</h3>
      <p>A brand with its own warehouse may choose FBM for oversized products, seasonal items or products that are not cost-effective to store in FBA.</p>

      <h3>Related Articles</h3>
      <ul>
        <li>FBA</li>
        <li>Seller Central</li>
        <li>Buy Box</li>
      </ul>
    `
  },

  {
    id: "brand-registry",
    title: "What is Brand Registry?",
    category: "Brand",
    level: "Beginner",
    readTime: "6 min",
    summary: "Learn how Amazon Brand Registry helps brand owners unlock protection and brand-building tools.",
    content: `
      <h3>Definition</h3>
      <p>Amazon Brand Registry is a program for eligible brand owners that provides access to brand protection tools and brand-building features.</p>

      <h3>Why It Matters</h3>
      <p>Brand Registry can unlock tools such as A+ Content, Brand Stores, Brand Analytics and protection resources that help brands manage their presence on Amazon.</p>

      <h3>How It Works</h3>
      <p>To enroll, a brand typically needs an eligible trademark and must complete Amazon’s enrollment process. Once approved, the brand gains access to additional tools inside the Amazon ecosystem.</p>

      <h3>Example</h3>
      <p>A registered skincare brand can create A+ Content, build a Brand Store and access Brand Analytics to understand customer search behavior.</p>

      <h3>Common Mistake</h3>
      <p>Brand Registry does not guarantee ranking or sales. It gives access to tools, but the brand still needs strong content, traffic, conversion and operations.</p>
    `
  },

  {
    id: "buy-box",
    title: "What is the Buy Box?",
    category: "Marketplace",
    level: "Beginner",
    readTime: "6 min",
    summary: "Understand the buying box, why it matters and how it affects sales on Amazon.",
    content: `
      <h3>Definition</h3>
      <p>The Buy Box is the main purchase area on a product detail page where customers can add an item to cart or buy now.</p>

      <h3>Why It Matters</h3>
      <p>When multiple sellers offer the same product, Amazon decides which offer is featured as the default buying option. This can strongly influence sales.</p>

      <h3>How It Works</h3>
      <p>Amazon evaluates factors such as price, fulfillment method, shipping speed, seller performance, inventory availability and customer experience.</p>

      <h3>Example</h3>
      <p>If three sellers sell the same ASIN, only one may appear as the featured buying option at a given moment.</p>

      <h3>Pro Tip</h3>
      <p>If sales suddenly drop, always check whether the product lost the Buy Box before assuming the issue is SEO or advertising.</p>
    `
  },

  {
    id: "asin",
    title: "What is an ASIN?",
    category: "Catalog",
    level: "Beginner",
    readTime: "4 min",
    summary: "Learn what an ASIN is and why it is one of the most important identifiers in Amazon.",
    content: `
      <h3>Definition</h3>
      <p>ASIN stands for Amazon Standard Identification Number. It is a unique identifier Amazon uses to organize products in its catalog.</p>

      <h3>Why It Matters</h3>
      <p>Almost every Amazon workflow depends on the ASIN: listing analysis, catalog troubleshooting, advertising, reporting, reviews, ranking and competitor research.</p>

      <h3>How It Works</h3>
      <p>Each product detail page is associated with an ASIN. Variations may have parent ASINs and child ASINs depending on the product structure.</p>

      <h3>Example</h3>
      <p>A t-shirt available in five colors and four sizes may have multiple child ASINs grouped under one parent ASIN.</p>

      <h3>Related Articles</h3>
      <ul>
        <li>Parent ASIN</li>
        <li>Child ASIN</li>
        <li>Variation</li>
        <li>Catalog</li>
      </ul>
    `
  },

  {
    id: "product-detail-page",
    title: "What is a Product Detail Page?",
    category: "Product Detail Page",
    level: "Beginner",
    readTime: "6 min",
    summary: "Understand the PDP and why it is where Amazon traffic turns into sales.",
    content: `
      <h3>Definition</h3>
      <p>A Product Detail Page, or PDP, is the page where customers evaluate a product before buying it.</p>

      <h3>Why It Matters</h3>
      <p>The PDP is where search visibility, advertising traffic and customer intent become conversion. A weak PDP can waste traffic even if SEO and ads are strong.</p>

      <h3>Main Elements</h3>
      <ul>
        <li>Title</li>
        <li>Main image</li>
        <li>Secondary images</li>
        <li>Price</li>
        <li>Coupon</li>
        <li>Rating and reviews</li>
        <li>Bullet points</li>
        <li>Variations</li>
        <li>A+ Content</li>
        <li>Buy Box</li>
      </ul>

      <h3>Example</h3>
      <p>A product may rank well for a keyword, but if the images are unclear, reviews are weak or the price is not competitive, customers may leave without buying.</p>

      <h3>Pro Tip</h3>
      <p>Do not analyze Amazon SEO without looking at the PDP. Ranking gets the customer to the page; the PDP convinces them to buy.</p>
    `
  },

  {
    id: "amazon-ads",
    title: "What is Amazon Ads?",
    category: "Advertising",
    level: "Beginner",
    readTime: "5 min",
    summary: "Understand Amazon Ads and how advertising helps products gain visibility across Amazon.",
    content: `
      <h3>Definition</h3>
      <p>Amazon Ads is Amazon’s advertising platform. It helps advertisers promote products and brands across Amazon and selected placements beyond Amazon.</p>

      <h3>Why It Matters</h3>
      <p>Advertising is often used to increase visibility, generate sales, support launches, defend branded searches and gather keyword performance data.</p>

      <h3>Common Sponsored Ad Types</h3>
      <ul>
        <li><strong>Sponsored Products:</strong> ads for individual product listings.</li>
        <li><strong>Sponsored Brands:</strong> ads that promote a brand or product collection.</li>
        <li><strong>Sponsored Display:</strong> display-style ads based on shopping signals and targeting options.</li>
      </ul>

      <h3>Example</h3>
      <p>A new product with no organic visibility may use Sponsored Products to appear in search results for relevant keywords.</p>

      <h3>Pro Tip</h3>
      <p>Amazon Ads and Amazon SEO are connected. Paid campaigns can reveal which keywords convert, and that data can support SEO decisions.</p>
    `
  }
];
