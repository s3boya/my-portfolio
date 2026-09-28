/**
 * GAMEGRID - Storefront & Carousel Engine
 * Vanilla JavaScript implementation
 */

function getImagePath(path) {
  const prefix = window.IMAGE_PREFIX || "";
  return prefix + path;
}

// =============================================================================
// GAME DATABASE
// =============================================================================
const GAMES_DATA = [
  {
    id: "neon-rift",
    title: "Neon Rift",
    price: 29.99,
    originalPrice: null,
    genre: "Action · Sci-Fi · PC",
    primaryGenre: "Action",
    platforms: "PC",
    badge: "FEATURED",
    badgeClass: "badge-featured",
    rating: 4.9,
    reviewsCount: "2,410",
    artwork: "images/games/neon-rift.svg",
    shortDesc: "Dive into a sprawling synth-lit cyberpunk megacity where cybernetic agility meets hyper-responsive combat.",
    fullDesc: "Neon Rift transports players into the towering vertical labyrinth of Neo-Veridia. Master fluid parkour mechanics, customize advanced neural implants, and unravel the dark quantum mystery tearing the district apart. Featuring real-time raytraced neon vistas and an adrenaline-pumping synthwave original soundtrack.",
    features: [
      "High-octane momentum-based combat with energy katanas and smart firearms",
      "Expansive seamless vertical city districts with zero loading screens",
      "Deep cyberware progression tree with over 60 customizable abilities",
      "Full ultra-wide monitor and high-framerate PC optimization"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-10400 / AMD Ryzen 5 3600",
      gpu: "NVIDIA RTX 3060 / AMD Radeon RX 6600 XT",
      ram: "16 GB RAM",
      storage: "65 GB SSD"
    }
  },
  {
    id: "void-runner",
    title: "Void Runner",
    price: 24.99,
    originalPrice: null,
    genre: "Racing · Arcade · PC / Console",
    primaryGenre: "Racing",
    platforms: "PC / Console",
    badge: "HOT",
    badgeClass: "badge-hot",
    rating: 4.8,
    reviewsCount: "1,890",
    artwork: "images/games/void-runner.svg",
    shortDesc: "Break the sound barrier on gravitational race tracks suspended across cosmic nebulae and black holes.",
    fullDesc: "Void Runner delivers zero-gravity anti-grav racing at breakneck speeds. Pilot custom supersonic craft through twisting magnetic rails, harness quantum slipstreams, and battle rivals with kinetic disruptors in intense 16-player multiplayer lobbies.",
    features: [
      "Supersonic physics engine with 120 FPS high-refresh support",
      "24 interstellar tracks across 6 alien stellar systems",
      "Dynamic weather including solar flares and cosmic ion storms",
      "Cross-platform multiplayer with global leaderboard tournaments"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-9600K / AMD Ryzen 5 2600X",
      gpu: "NVIDIA GTX 1660 Ti / AMD Radeon RX 5600 XT",
      ram: "16 GB RAM",
      storage: "35 GB SSD"
    }
  },
  {
    id: "wildlands",
    title: "Wildlands",
    price: 39.99,
    originalPrice: null,
    genre: "Adventure · Open World · PC",
    primaryGenre: "Adventure",
    platforms: "PC",
    badge: "NEW",
    badgeClass: "badge-new",
    rating: 4.9,
    reviewsCount: "3,150",
    artwork: "images/games/wildlands.svg",
    shortDesc: "Venture deep into an untamed Nordic wilderness filled with breathtaking peaks, wildlife, and ancient mysteries.",
    fullDesc: "Wildlands is a living, breathing open-world survival adventure set across vast untouched mountain ranges, dense pine valleys, and frozen glacial lakes. Track apex predators, craft shelters, scale towering cliffs, and uncover ancient runic monoliths left behind by a forgotten civilization.",
    features: [
      "Dynamic ecosystem where flora and fauna behave realistically with daily cycles",
      "Physics-driven climbing and exploration mechanics",
      "Atmospheric volumetric weather with sudden blizzards and golden dawns",
      "Full co-op support for up to 4 players"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-10700K / AMD Ryzen 7 3700X",
      gpu: "NVIDIA RTX 3070 / AMD Radeon RX 6700 XT",
      ram: "16 GB RAM",
      storage: "80 GB SSD"
    }
  },
  {
    id: "arcfall",
    title: "Arcfall",
    price: 34.99,
    originalPrice: null,
    genre: "RPG · Fantasy · PC / Console",
    primaryGenre: "RPG",
    platforms: "PC / Console",
    badge: "FEATURED",
    badgeClass: "badge-featured",
    rating: 4.7,
    reviewsCount: "4,620",
    artwork: "images/games/arcfall.svg",
    shortDesc: "Command arcane powers in a crumbling high-fantasy realm on the brink of an eternal lunar eclipse.",
    fullDesc: "Arcfall combines tactical third-person spellcasting with deep cinematic storytelling. Build your spellweaver from 8 specialized arcane schools, conquer towering gothic citadels, forge alliances with ancient factions, and reshape the destiny of the Ascended Realm.",
    features: [
      "Innovative rune-weaving combat: combine elements dynamically on the fly",
      "Branching narrative with over 12 distinct faction endings",
      "Handcrafted gothic cathedrals, floating islands, and subterranean vaults",
      "Stunning orchestral score performed by the London Symphonic Orchestra"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-9700K / AMD Ryzen 7 2700X",
      gpu: "NVIDIA RTX 2070 Super / AMD Radeon RX 5700 XT",
      ram: "16 GB RAM",
      storage: "70 GB SSD"
    }
  },
  {
    id: "dust-protocol",
    title: "Dust Protocol",
    price: 19.99,
    originalPrice: 29.99,
    genre: "Shooter · Tactical · PC",
    primaryGenre: "Shooter",
    platforms: "PC",
    badge: "SALE",
    badgeClass: "badge-sale",
    rating: 4.6,
    reviewsCount: "1,430",
    artwork: "images/games/dust-protocol.svg",
    shortDesc: "Hardcore tactical military extraction shooter set in a brutal windswept desert compound.",
    fullDesc: "Dust Protocol emphasizes realism, communication, and calculated tactical positioning. Infiltrate contested hazard zones amidst swirling dust storms, secure classified intelligence containers, and reach the extraction LZ before rival mercenary squads intercept your squad.",
    features: [
      "Ballistic physics simulating wind drift, bullet penetration, and weapon sway",
      "Dynamic sandstorm visibility system forcing thermal and NVG reliance",
      "Full weapon modding system with authentic military attachments",
      "High stakes extraction mechanics with persistent armory stash"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-8400 / AMD Ryzen 5 2600",
      gpu: "NVIDIA GTX 1070 / AMD Radeon RX 590",
      ram: "16 GB RAM",
      storage: "50 GB SSD"
    }
  },
  {
    id: "wavebound",
    title: "Wavebound",
    price: 27.99,
    originalPrice: null,
    genre: "Indie · Exploration · PC / Console",
    primaryGenre: "Indie",
    platforms: "PC / Console",
    badge: "NEW",
    badgeClass: "badge-new",
    rating: 4.9,
    reviewsCount: "2,040",
    artwork: "images/games/wavebound.svg",
    shortDesc: "Sail turquoise seas, uncover submerged ruins, and bond with luminescent ocean wildlife.",
    fullDesc: "Wavebound is a peaceful yet thrilling nautical voyage across an uncharted tropical archipelago. Customize your sailing vessel, dive into glowing coral trenches, solve puzzles inside forgotten ocean temples, and glide alongside majestic bioluminescent sea creatures.",
    features: [
      "Relaxing yet deeply rewarding oceanic exploration and diving mechanics",
      "Gorgeous stylized pastel art direction with fluid water simulation",
      "Charming nautical crafting, island settlements, and creature companions",
      "Play at your own pace with dedicated cozy and survival modes"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i3-10100 / AMD Ryzen 3 3100",
      gpu: "NVIDIA GTX 1050 Ti / AMD Radeon RX 560",
      ram: "8 GB RAM",
      storage: "25 GB SSD"
    }
  },
  {
    id: "chrono-shift",
    title: "Chrono Shift",
    price: 31.99,
    originalPrice: 39.99,
    genre: "Adventure · Sci-Fi · PC",
    primaryGenre: "Adventure",
    platforms: "PC",
    badge: "SALE",
    badgeClass: "badge-sale",
    rating: 4.8,
    reviewsCount: "1,120",
    artwork: "images/games/chrono-shift.svg",
    shortDesc: "Manipulate time streams and solve mind-bending chronological paradoxes to save history.",
    fullDesc: "Equipped with the Chrono-Drive gauntlet, alter the flow of time around objects, rewind failed jumps, and synchronize actions across multiple parallel timelines to overcome impossible obstacles.",
    features: [
      "Innovative 4D puzzle solving with rewind and temporal cloning",
      "Gripping sci-fi mystery written by award-winning game authors",
      "Challenging time trial trials with global speedrun leaderboards"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-10400 / AMD Ryzen 5 3600",
      gpu: "NVIDIA RTX 2060 / AMD Radeon RX 5600 XT",
      ram: "16 GB RAM",
      storage: "30 GB SSD"
    }
  },
  {
    id: "shadow-blade",
    title: "Shadow Blade",
    price: 34.99,
    originalPrice: null,
    genre: "Action · Stealth · PC / Console",
    primaryGenre: "Action",
    platforms: "PC / Console",
    badge: "HOT",
    badgeClass: "badge-hot",
    rating: 4.9,
    reviewsCount: "3,890",
    artwork: "images/games/shadow-blade.svg",
    shortDesc: "Master the art of silent assassination across feudal castles bathed in moonlit mist.",
    fullDesc: "Shadow Blade is a lethal test of stealth, timing, and precision swordplay. Infiltrate heavily guarded fortresses, utilize shadows, deploy grappling hooks, and engage in intense duels where a single strike decides your fate.",
    features: [
      "Unforgiving precision parry and deflection combat system",
      "Vertical rooftop stealth traversal with grappling tools and smoke arts",
      "Immersive feudal Japanese atmosphere with traditional bamboo audio design"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-8700 / AMD Ryzen 5 3600X",
      gpu: "NVIDIA GTX 1660 Super / AMD Radeon RX 5600",
      ram: "16 GB RAM",
      storage: "45 GB SSD"
    }
  },
  {
    id: "stellaris-horizon",
    title: "Stellaris Horizon",
    price: 44.99,
    originalPrice: null,
    genre: "Strategy · Sci-Fi · PC",
    primaryGenre: "RPG",
    platforms: "PC",
    badge: "FEATURED",
    badgeClass: "badge-featured",
    rating: 4.8,
    reviewsCount: "2,280",
    artwork: "images/games/stellaris-horizon.svg",
    shortDesc: "Expand a fledgling starfaring civilization into a dominant galactic power.",
    fullDesc: "Command colossal armada fleets, survey mysterious wormholes, negotiate interstellar diplomacy, and build megastructures orbiting giant ringed gas worlds in this grand space strategy epic.",
    features: [
      "Procedurally generated galaxy maps with thousands of star systems",
      "Modular warship designer with hundreds of weapon and shield loadouts",
      "Complex diplomatic councils, espionage networks, and galactic trade routes"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-11700 / AMD Ryzen 7 5700X",
      gpu: "NVIDIA RTX 3060 / AMD Radeon RX 6600",
      ram: "32 GB RAM",
      storage: "40 GB SSD"
    }
  },
  {
    id: "cyber-siege",
    title: "Cyber Siege",
    price: 22.99,
    originalPrice: 29.99,
    genre: "Shooter · Tactical · PC / Console",
    primaryGenre: "Shooter",
    platforms: "PC / Console",
    badge: "SALE",
    badgeClass: "badge-sale",
    rating: 4.7,
    reviewsCount: "1,670",
    artwork: "images/games/cyber-siege.svg",
    shortDesc: "Coordinate tactical breaches with deployable hard-light shields and cyber drones.",
    fullDesc: "Close-quarters tactical combat re-imagined with near-future cyber warfare. Breach barricaded rooms, disrupt electronic defenses with EMP blasts, and utilize hex-shield walls to protect your fireteam during intense tactical hostage extractions.",
    features: [
      "Destructible environmental geometry with dynamic breaching points",
      "Deployable cyber-gadgets including auto-turrets, drones, and sensor dart traps",
      "Competitive 5v5 ranked tactical search and rescue modes"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-9400 / AMD Ryzen 5 2600",
      gpu: "NVIDIA GTX 1060 / AMD Radeon RX 580",
      ram: "16 GB RAM",
      storage: "55 GB SSD"
    }
  },
  {
    id: "mythic-realm",
    title: "Mythic Realm",
    price: 36.99,
    originalPrice: null,
    genre: "Adventure · RPG · PC / Console",
    primaryGenre: "Adventure",
    platforms: "PC / Console",
    badge: "NEW",
    badgeClass: "badge-new",
    rating: 4.9,
    reviewsCount: "2,740",
    artwork: "images/games/mythic-realm.svg",
    shortDesc: "Unravel the ancient chronicles of Gaia amidst enchanted glowing forests and ancient druid monoliths.",
    fullDesc: "Step into an ethereal realm where nature itself is infused with primordial magic. Tame mythical beasts, awaken forgotten stone monoliths, and protect the world tree from corrupting shadow blights.",
    features: [
      "Stunning hand-crafted open world with bioluminescent flora and fauna",
      "Form companionships with wild gryphons, spirit wolves, and forest drakes",
      "Harmonious ambient soundtrack composed with authentic Celtic instruments"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-11400 / AMD Ryzen 5 3600",
      gpu: "NVIDIA RTX 2060 / AMD Radeon RX 5700",
      ram: "16 GB RAM",
      storage: "60 GB SSD"
    }
  },
  {
    id: "velocity-apex",
    title: "Velocity Apex",
    price: 26.99,
    originalPrice: 34.99,
    genre: "Racing · Street · PC / Console",
    primaryGenre: "Racing",
    platforms: "PC / Console",
    badge: "SALE",
    badgeClass: "badge-sale",
    rating: 4.7,
    reviewsCount: "1,980",
    artwork: "images/games/velocity-apex.svg",
    shortDesc: "Pure street racing precision across hyper-detailed neon rain-soaked coastal highways.",
    fullDesc: "Push exotic hypercars to their absolute limits in illegal night-time street circuits. Master tire grip physics, nitrous delivery curves, and custom engine tuning to outrun the police and dominate the underground championship.",
    features: [
      "Over 70 licensed and custom tuner vehicles with meticulous engine audio",
      "Deep aesthetic and performance customization with real Dyno tuning stats",
      "Seamless online open world where players encounter each other naturally"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-9700 / AMD Ryzen 7 3700X",
      gpu: "NVIDIA RTX 3060 / AMD Radeon RX 6600 XT",
      ram: "16 GB RAM",
      storage: "65 GB SSD"
    }
  }
];

// 6 Featured carousel games (exact matching list from prompt)
const FEATURED_GAMES = GAMES_DATA.slice(0, 6);

// =============================================================================
// APP STATE & SHOPPING CART
// =============================================================================
class GameGridStore {
  constructor() {
    this.cart = this.loadCart();
    this.promoDiscount = 0;
    this.activeGenre = "all";
    this.activePlatform = "all";
    this.searchQuery = "";
    this.sortBy = "featured";
    this.filterSpecial = "all"; // 'all', 'deals', 'new'

    this.init();
  }

  loadCart() {
    try {
      const saved = localStorage.getItem("gamegrid_cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem("gamegrid_cart", JSON.stringify(this.cart));
    } catch (e) {
      console.warn("Storage not accessible");
    }
    this.updateCartUI();
  }

  addToCart(gameId) {
    const game = GAMES_DATA.find(g => g.id === gameId);
    if (!game) return;

    const existing = this.cart.find(item => item.id === gameId);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({
        id: game.id,
        title: game.title,
        price: game.price,
        artwork: game.artwork,
        platforms: game.platforms,
        quantity: 1
      });
    }

    this.saveCart();
    showToast(`Added "${game.title}" to your cart!`);
  }

  removeFromCart(gameId) {
    this.cart = this.cart.filter(item => item.id !== gameId);
    this.saveCart();
  }

  updateQuantity(gameId, delta) {
    const item = this.cart.find(i => i.id === gameId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(gameId);
    } else {
      this.saveCart();
    }
  }

  applyPromo(code) {
    const clean = code.trim().toUpperCase();
    if (clean === "GAMEGRID10" || clean === "WELCOME10") {
      this.promoDiscount = 0.10;
      showToast("10% discount promo code applied!");
      this.updateCartUI();
      return true;
    } else if (clean === "GAMEGRID20" || clean === "PROMO20") {
      this.promoDiscount = 0.20;
      showToast("20% discount promo code applied!");
      this.updateCartUI();
      return true;
    } else {
      showToast("Invalid promo code. Try GAMEGRID10");
      return false;
    }
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getCartTotals() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = subtotal * this.promoDiscount;
    const total = Math.max(0, subtotal - discount);
    return { subtotal, discount, total };
  }

  updateCartUI() {
    const badge = document.getElementById("cartBadge");
    const count = this.getCartCount();
    if (badge) {
      badge.textContent = count;
    }

    const drawerBody = document.getElementById("cartItemsContainer");
    const totals = this.getCartTotals();

    if (!drawerBody) return;

    if (this.cart.length === 0) {
      drawerBody.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <h3 style="font-size:18px;font-weight:800;margin-bottom:6px;">Your cart is empty</h3>
          <p style="color:var(--text-muted);font-size:14px;margin-bottom:20px;">Discover exciting games and add them to your library.</p>
          <button class="btn-view-game" onclick="closeCart(); document.getElementById('store').scrollIntoView({behavior:'smooth'});" style="margin: 0 auto;">Browse Store</button>
        </div>
      `;
      document.getElementById("cartSubtotal").textContent = "$0.00";
      document.getElementById("cartDiscount").textContent = "-$0.00";
      document.getElementById("cartTotal").textContent = "$0.00";
      return;
    }

    drawerBody.innerHTML = this.cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-thumb">
          <img src="${getImagePath(item.artwork)}" alt="${item.title}">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-platform">${item.platforms}</div>
          <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
        <div class="cart-item-actions">
          <button class="cart-remove-btn" onclick="window.gameStore.removeFromCart('${item.id}')" title="Remove">✕</button>
          <div class="cart-qty-ctrl">
            <button class="cart-qty-btn" onclick="window.gameStore.updateQuantity('${item.id}', -1)">−</button>
            <span class="cart-qty-val">${item.quantity}</span>
            <button class="cart-qty-btn" onclick="window.gameStore.updateQuantity('${item.id}', 1)">+</button>
          </div>
        </div>
      </div>
    `).join("");

    document.getElementById("cartSubtotal").textContent = `$${totals.subtotal.toFixed(2)}`;
    document.getElementById("cartDiscount").textContent = `-$${totals.discount.toFixed(2)}`;
    document.getElementById("cartTotal").textContent = `$${totals.total.toFixed(2)}`;
  }

  init() {
    this.updateCartUI();
  }
}

// =============================================================================
// FEATURED CAROUSEL CONTROLLER
// Strict adherence to prompt:
// - One large rounded card per slide
// - Track uses gap: 0
// - Position calculated as: currentIndex * 100%
// - 10-second automatic rotation
// - Seamless looping
// - Progress bar strictly clipped inside gray rail (overflow: hidden, border-radius: 20px)
// - Swipe / pointer drag interaction
// =============================================================================
class FeaturedCarousel {
  constructor() {
    this.viewport = document.getElementById("featuredCarouselViewport");
    this.track = document.getElementById("featuredCarouselTrack");
    this.progressBar = document.getElementById("carouselProgressBar");
    this.counter = document.getElementById("carouselCounter");
    this.prevBtn = document.getElementById("prevSlideBtn");
    this.nextBtn = document.getElementById("nextSlideBtn");

    this.currentIndex = 0;
    this.totalSlides = FEATURED_GAMES.length; // 6 slides
    this.autoRotateInterval = 10000; // 10 seconds exactly
    this.timer = null;

    // Pointer / Swipe state
    this.isDragging = false;
    this.startX = 0;
    this.currentTranslate = 0;
    this.prevTranslate = 0;

    this.init();
  }

  init() {
    if (!this.track) return;
    this.renderSlides();
    this.bindEvents();
    this.updatePosition();
    this.startAutoTimer();
  }

  renderSlides() {
    this.track.innerHTML = FEATURED_GAMES.map((game) => `
      <div class="carousel-slide" data-id="${game.id}">
        <div class="slide-artwork">
          <div class="slide-badge ${game.badgeClass}">${game.badge}</div>
          <img src="${getImagePath(game.artwork)}" alt="${game.title}">
        </div>
        <div class="slide-content">
          <div class="slide-meta-top">
            <span class="slide-genre-platform">${game.genre}</span>
            <span class="slide-price">$${game.price.toFixed(2)}</span>
          </div>
          <h2 class="slide-title">${game.title}</h2>
          <p class="slide-desc">${game.shortDesc}</p>
          <div class="slide-actions">
            <button class="btn-view-game" onclick="openGameDetail('${game.id}')">
              <span>View Game</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button class="btn-quick-add" onclick="window.gameStore.addToCart('${game.id}')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Quick Add</span>
            </button>
          </div>
        </div>
      </div>
    `).join("");
  }

  updatePosition() {
    // Exact full width calculation: currentIndex * 100%
    const offsetPercent = this.currentIndex * 100;
    this.track.style.transform = `translateX(-${offsetPercent}%)`;

    // Progress bar inside rail:
    // With 6 slides, each slide advances progress bar by 100% of its own width (which is 1/6th of rail).
    // Indicator stays clipped cleanly within the 20px rounded rail.
    if (this.progressBar) {
      this.progressBar.style.transform = `translateX(${this.currentIndex * 100}%)`;
    }

    if (this.counter) {
      this.counter.textContent = `${this.currentIndex + 1} / ${this.totalSlides}`;
    }
  }

  goToSlide(index) {
    if (index < 0) {
      this.currentIndex = this.totalSlides - 1;
    } else if (index >= this.totalSlides) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = index;
    }
    this.updatePosition();
    this.resetAutoTimer();
  }

  nextSlide() {
    this.goToSlide(this.currentIndex + 1);
  }

  prevSlide() {
    this.goToSlide(this.currentIndex - 1);
  }

  startAutoTimer() {
    this.clearAutoTimer();
    this.timer = setInterval(() => {
      this.nextSlide();
    }, this.autoRotateInterval);
  }

  clearAutoTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  resetAutoTimer() {
    this.clearAutoTimer();
    this.startAutoTimer();
  }

  bindEvents() {
    // Button controls
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => this.prevSlide());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => this.nextSlide());
    }

    // Keyboard navigation
    window.addEventListener("keydown", (e) => {
      // only trigger if no modals are open
      if (document.querySelector(".modal-backdrop.is-open")) return;
      if (e.key === "ArrowLeft") this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });

    // Touch & Pointer Swipe Support
    const vp = this.viewport;
    if (!vp) return;

    // Pointer events
    vp.addEventListener("pointerdown", (e) => this.dragStart(e));
    window.addEventListener("pointermove", (e) => this.dragMove(e));
    window.addEventListener("pointerup", (e) => this.dragEnd(e));
    window.addEventListener("pointercancel", (e) => this.dragEnd(e));

    // Pause on hover
    vp.addEventListener("mouseenter", () => this.clearAutoTimer());
    vp.addEventListener("mouseleave", () => this.startAutoTimer());
  }

  dragStart(e) {
    // Avoid triggering drag on interactive elements
    if (e.target.closest("button") || e.target.closest("a")) return;
    this.isDragging = true;
    this.startX = e.clientX;
    this.viewport.classList.add("is-dragging");
    this.track.style.transition = "none";
  }

  dragMove(e) {
    if (!this.isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - this.startX;
    const width = this.viewport.offsetWidth || 1;
    const diffPercent = (diff / width) * 100;
    const basePercent = -(this.currentIndex * 100);
    this.track.style.transform = `translateX(${basePercent + diffPercent}%)`;
  }

  dragEnd(e) {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.viewport.classList.remove("is-dragging");
    this.track.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";

    const endX = e.clientX;
    const diff = endX - this.startX;

    if (diff < -50) {
      // Swiped left -> next
      this.nextSlide();
    } else if (diff > 50) {
      // Swiped right -> prev
      this.prevSlide();
    } else {
      // Snap back to current
      this.updatePosition();
    }
  }
}

// =============================================================================
// STORE BROWSING CATALOG & FILTER ENGINE
// =============================================================================
function renderStoreGrid() {
  const grid = document.getElementById("storeGamesGrid");
  if (!grid) return;

  const store = window.gameStore;
  let filtered = [...GAMES_DATA];

  // Search filter
  if (store.searchQuery.trim()) {
    const q = store.searchQuery.toLowerCase();
    filtered = filtered.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.genre.toLowerCase().includes(q) ||
      g.shortDesc.toLowerCase().includes(q)
    );
  }

  // Genre filter
  if (store.activeGenre !== "all") {
    filtered = filtered.filter(g =>
      g.primaryGenre.toLowerCase() === store.activeGenre.toLowerCase() ||
      g.genre.toLowerCase().includes(store.activeGenre.toLowerCase())
    );
  }

  // Platform filter
  if (store.activePlatform !== "all") {
    if (store.activePlatform === "pc") {
      filtered = filtered.filter(g => g.platforms.includes("PC"));
    } else if (store.activePlatform === "console") {
      filtered = filtered.filter(g => g.platforms.includes("Console"));
    }
  }

  // Special filter (deals or new)
  if (store.filterSpecial === "deals") {
    filtered = filtered.filter(g => g.originalPrice !== null || g.badge === "SALE");
  } else if (store.filterSpecial === "new") {
    filtered = filtered.filter(g => g.badge === "NEW");
  }

  // Sort
  if (store.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (store.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (store.sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (store.sortBy === "name") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-store-state">
        <div class="empty-store-icon">🔍</div>
        <h3>No games match your criteria</h3>
        <p>Try resetting filters or searching for different keywords.</p>
        <button class="btn-view-game" onclick="resetFilters()" style="margin: 18px auto 0;">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(game => `
    <div class="game-card">
      <div class="card-media" onclick="openGameDetail('${game.id}')">
        <div class="card-badge ${game.badgeClass}">${game.badge}</div>
        <img src="${getImagePath(game.artwork)}" alt="${game.title}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-genre">${game.primaryGenre}</span>
          <span class="card-platforms">${game.platforms}</span>
        </div>
        <h3 class="card-title" onclick="openGameDetail('${game.id}')">${game.title}</h3>
        <div class="card-rating">
          <span class="star">★</span>
          <span>${game.rating}</span>
          <span>(${game.reviewsCount})</span>
        </div>
        <div class="card-footer">
          <div class="card-price-wrap">
            ${game.originalPrice ? `<span class="card-original-price">$${game.originalPrice.toFixed(2)}</span>` : ""}
            <span class="card-price">$${game.price.toFixed(2)}</span>
          </div>
          <div class="card-actions">
            <button class="btn-card-details" onclick="openGameDetail('${game.id}')">Details</button>
            <button class="btn-card-add" onclick="window.gameStore.addToCart('${game.id}')">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function resetFilters() {
  const store = window.gameStore;
  store.searchQuery = "";
  store.activeGenre = "all";
  store.activePlatform = "all";
  store.filterSpecial = "all";
  store.sortBy = "featured";

  const searchInput = document.getElementById("navSearchInput");
  if (searchInput) searchInput.value = "";

  document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
  const allPill = document.querySelector(".filter-pill[data-genre='all']");
  if (allPill) allPill.classList.add("active");

  document.querySelectorAll(".platform-btn").forEach(p => p.classList.remove("active"));
  const allPlat = document.querySelector(".platform-btn[data-plat='all']");
  if (allPlat) allPlat.classList.add("active");

  const sortSelect = document.getElementById("storeSortSelect");
  if (sortSelect) sortSelect.value = "featured";

  renderStoreGrid();
}

// =============================================================================
// GAME DETAIL MODAL
// =============================================================================
function openGameDetail(gameId) {
  const game = GAMES_DATA.find(g => g.id === gameId);
  if (!game) return;

  const modalBackdrop = document.getElementById("gameDetailModal");
  if (!modalBackdrop) return;

  document.getElementById("modalGameImg").src = getImagePath(game.artwork);
  document.getElementById("modalGameBadge").textContent = game.badge;
  document.getElementById("modalGameBadge").className = `slide-badge ${game.badgeClass}`;
  document.getElementById("modalGameGenre").textContent = game.genre;
  document.getElementById("modalGameTitle").textContent = game.title;
  document.getElementById("modalGameDesc").textContent = game.fullDesc;

  // Features list
  const featuresList = document.getElementById("modalGameFeatures");
  if (featuresList) {
    featuresList.innerHTML = game.features.map(f => `
      <li><span class="bullet">✦</span> <span>${f}</span></li>
    `).join("");
  }

  // System specs
  document.getElementById("specOS").textContent = game.sysReq.os;
  document.getElementById("specCPU").textContent = game.sysReq.cpu;
  document.getElementById("specGPU").textContent = game.sysReq.gpu;
  document.getElementById("specRAM").textContent = game.sysReq.ram;
  document.getElementById("specStorage").textContent = game.sysReq.storage;

  // Price & Actions
  document.getElementById("modalSidebarPrice").textContent = `$${game.price.toFixed(2)}`;
  
  const buyBtn = document.getElementById("modalBuyBtn");
  buyBtn.onclick = () => {
    window.gameStore.addToCart(game.id);
    closeGameDetail();
    openCart();
  };

  const addCartBtn = document.getElementById("modalCartBtn");
  addCartBtn.onclick = () => {
    window.gameStore.addToCart(game.id);
  };

  modalBackdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeGameDetail() {
  const modalBackdrop = document.getElementById("gameDetailModal");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("is-open");
  }
  document.body.style.overflow = "";
}

// =============================================================================
// CART DRAWER & CHECKOUT
// =============================================================================
function openCart() {
  const drawerBackdrop = document.getElementById("cartDrawerBackdrop");
  if (drawerBackdrop) {
    drawerBackdrop.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
}

function closeCart() {
  const drawerBackdrop = document.getElementById("cartDrawerBackdrop");
  if (drawerBackdrop) {
    drawerBackdrop.classList.remove("is-open");
    document.body.style.overflow = "";
  }
}

function proceedToCheckout() {
  if (window.gameStore.cart.length === 0) {
    showToast("Your cart is empty! Browse games first.");
    return;
  }
  closeCart();
  const checkoutModal = document.getElementById("checkoutModalBackdrop");
  if (checkoutModal) {
    const totals = window.gameStore.getCartTotals();
    document.getElementById("checkoutFinalTotal").textContent = `$${totals.total.toFixed(2)}`;
    document.getElementById("checkoutOrderNumber").textContent = `GG-${Math.floor(100000 + Math.random() * 900000)}`;
    checkoutModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
}

function closeCheckout() {
  const checkoutModal = document.getElementById("checkoutModalBackdrop");
  if (checkoutModal) {
    checkoutModal.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  // Clear cart after checkout
  window.gameStore.cart = [];
  window.gameStore.saveCart();
  showToast("Order completed! Activation keys sent to your email.");
}

// =============================================================================
// TOAST NOTIFICATIONS
// =============================================================================
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast-icon">✓</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add("show"), 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// =============================================================================
// DOM EVENT LISTENERS INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Store Model
  window.gameStore = new GameGridStore();

  // Initialize Featured Carousel
  window.featuredCarousel = new FeaturedCarousel();

  // Initialize Store Grid
  renderStoreGrid();

  // Navbar Cart Button
  const cartBtn = document.getElementById("cartOpenBtn");
  if (cartBtn) {
    cartBtn.addEventListener("click", openCart);
  }

  const cartCloseBtn = document.getElementById("cartCloseBtn");
  if (cartCloseBtn) {
    cartCloseBtn.addEventListener("click", closeCart);
  }

  const cartBackdrop = document.getElementById("cartDrawerBackdrop");
  if (cartBackdrop) {
    cartBackdrop.addEventListener("click", (e) => {
      if (e.target === cartBackdrop) closeCart();
    });
  }

  // Promo code apply
  const promoApplyBtn = document.getElementById("promoApplyBtn");
  if (promoApplyBtn) {
    promoApplyBtn.addEventListener("click", () => {
      const code = document.getElementById("promoInput").value;
      window.gameStore.applyPromo(code);
    });
  }

  // Search input listeners
  const navSearch = document.getElementById("navSearchInput");
  if (navSearch) {
    navSearch.addEventListener("input", (e) => {
      window.gameStore.searchQuery = e.target.value;
      renderStoreGrid();
      // Scroll to store if not in view
      const storeEl = document.getElementById("store");
      if (storeEl && window.scrollY < 200 && e.target.value.length > 0) {
        storeEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Genre filter pills
  const genrePills = document.querySelectorAll(".filter-pill");
  genrePills.forEach(pill => {
    pill.addEventListener("click", () => {
      genrePills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      window.gameStore.activeGenre = pill.dataset.genre || "all";
      renderStoreGrid();
    });
  });

  // Platform filter buttons
  const platButtons = document.querySelectorAll(".platform-btn");
  platButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      platButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      window.gameStore.activePlatform = btn.dataset.plat || "all";
      renderStoreGrid();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById("storeSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      window.gameStore.sortBy = e.target.value;
      renderStoreGrid();
    });
  }

  // Navbar navigation smooth scroll & filter trigger
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href === "#deals") {
        e.preventDefault();
        window.gameStore.filterSpecial = "deals";
        renderStoreGrid();
        document.getElementById("store").scrollIntoView({ behavior: "smooth" });
      } else if (href === "#new-releases") {
        e.preventDefault();
        window.gameStore.filterSpecial = "new";
        renderStoreGrid();
        document.getElementById("store").scrollIntoView({ behavior: "smooth" });
      } else if (href === "#categories" || href === "#store") {
        e.preventDefault();
        window.gameStore.filterSpecial = "all";
        renderStoreGrid();
        document.getElementById("store").scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Mobile navigation hamburger toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.querySelector(".nav-links");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("is-mobile-open");
    });
  }

  // Navbar shadow on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  // Modal backdrop click close
  const detailModal = document.getElementById("gameDetailModal");
  if (detailModal) {
    detailModal.addEventListener("click", (e) => {
      if (e.target === detailModal) closeGameDetail();
    });
  }

  // Escape key closes modals
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeGameDetail();
      closeCart();
      closeCheckout();
    }
  });
});
