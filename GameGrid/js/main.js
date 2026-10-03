/**
 * GAMEGRID - Storefront & Carousel Engine
 * Vanilla JavaScript implementation
 */

function getImagePath(path) {
  const prefix = window.IMAGE_PREFIX || "";
  return prefix + path;
}

// =============================================================================
// REAL GLOBALLY RENOWNED GAMES DATABASE
// =============================================================================
const GAMES_DATA = [
  {
    id: "gta-v",
    title: "Grand Theft Auto V",
    price: 29.99,
    originalPrice: null,
    genre: "Action · Open World · PC / Console",
    primaryGenre: "Action",
    platforms: "PC / Console",
    badge: "BESTSELLER",
    badgeClass: "badge-hot",
    rating: 4.9,
    reviewsCount: "1,450,000",
    coverLandscape: "images/covers/landscape/gta-v.jpg",
    coverPortrait: "images/covers/portrait/gta-v.jpg",
    artwork: "images/covers/landscape/gta-v.jpg",
    shortDesc: "Experience Rockstar Games' critically acclaimed open world across the sun-soaked metropolis of Los Santos and Blaine County.",
    fullDesc: "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening elements of the criminal underworld, they must pull off a series of dangerous heists to survive. Includes Grand Theft Auto Online with endless multiplayer updates, heists, and business empires.",
    features: [
      "Vast interconnected open world spanning Los Santos and Blaine County",
      "Switch seamlessly between three distinct playable protagonists: Michael, Franklin, and Trevor",
      "Grand Theft Auto Online included: build criminal empires, plan multi-stage heists, and race custom supercars",
      "Enhanced 4K visuals, ray tracing, 60 FPS performance, and full controller haptics"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-3470 / AMD FX-8350",
      gpu: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
      ram: "8 GB RAM",
      storage: "110 GB SSD"
    }
  },
  {
    id: "cod-mw3",
    title: "Call of Duty: Modern Warfare III",
    price: 49.99,
    originalPrice: 69.99,
    genre: "Shooter · Action · Tactical · PC / Console",
    primaryGenre: "Shooter",
    platforms: "PC / Console",
    badge: "FEATURED",
    badgeClass: "badge-featured",
    rating: 4.6,
    reviewsCount: "384,000",
    coverLandscape: "images/covers/landscape/cod.jpg",
    coverPortrait: "images/covers/portrait/cod.jpg",
    artwork: "images/covers/landscape/cod.jpg",
    shortDesc: "Captain Price and Task Force 141 face the ultimate threat in an unrelenting global military campaign.",
    fullDesc: "In the direct sequel to the record-breaking Modern Warfare II, Captain Price and Task Force 141 face off against the ultranationalist war criminal Vladimir Makarov. Featuring open combat missions, iconic remastered multiplayer maps from MW2 (2009), and an all-new open-world Zombies experience.",
    features: [
      "Cinematic campaign with player-choice Open Combat Missions",
      "Full multiplayer suite featuring all 16 modernized launch maps from MW2 (2009)",
      "Largest Call of Duty Zombies map ever: team up in PvE extraction survival",
      "Cross-play and cross-progression across PC and all consoles"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-6600 / AMD Ryzen 5 1400",
      gpu: "NVIDIA GTX 960 / AMD Radeon RX 470",
      ram: "16 GB RAM",
      storage: "149 GB SSD"
    }
  },
  {
    id: "ac-mirage",
    title: "Assassin's Creed Mirage",
    price: 24.99,
    originalPrice: 49.99,
    genre: "Action · Stealth · Historical · PC / Console",
    primaryGenre: "Action",
    platforms: "PC / Console",
    badge: "SALE -50%",
    badgeClass: "badge-sale",
    rating: 4.7,
    reviewsCount: "128,000",
    coverLandscape: "images/covers/landscape/ac-mirage.jpg",
    coverPortrait: "images/covers/portrait/ac-mirage.jpg",
    artwork: "images/covers/landscape/ac-mirage.jpg",
    shortDesc: "Return to the roots of the franchise in 9th-century Baghdad as Basim transforms into a Master Assassin.",
    fullDesc: "Experience the story of Basim, a cunning street thief seeking answers and justice across the bustling streets of Golden Age Baghdad. Join the ancient organization known as The Hidden Ones, master lethal stealth parkour assassinations, and uncover the terrifying truths of your destiny.",
    features: [
      "A modern homage to the classic franchise roots: parkour, stealth, and assassinations",
      "Incredibly dense and vibrant 9th-century Baghdad across four distinct districts",
      "Largest assortment of assassin tools, smoke bombs, throwing knives, and blowdarts",
      "Stunning Arabian aesthetic with authentic historical immersion"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-4790K / AMD Ryzen 5 1600",
      gpu: "NVIDIA GTX 1060 6GB / AMD Radeon RX 570 4GB",
      ram: "8 GB RAM",
      storage: "40 GB SSD"
    }
  },
  {
    id: "cs-16",
    title: "Counter-Strike 1.6 (Anthology)",
    price: 9.99,
    originalPrice: null,
    genre: "Shooter · Tactical · Classic · PC",
    primaryGenre: "Shooter",
    platforms: "PC",
    badge: "CLASSIC",
    badgeClass: "badge-hot",
    rating: 4.9,
    reviewsCount: "520,000",
    coverLandscape: "images/covers/landscape/cs-16.jpg",
    coverPortrait: "images/covers/portrait/cs-16.jpg",
    artwork: "images/covers/landscape/cs-16.jpg",
    shortDesc: "The undisputed godfather of competitive tactical team shooters that defined online multiplayer gaming.",
    fullDesc: "Play the world's number 1 online action game. Engage in an incredibly realistic brand of terrorist warfare in this wildly popular team-based game. Ally with teammates to complete strategic missions. Take out enemy sites. Rescue hostages. Your role affects your team's success. Your team's success affects your role.",
    features: [
      "Timeless round-based tactical bomb defusal and hostage rescue gameplay",
      "Legendary competitive maps: de_dust2, de_inferno, de_nuke, de_train, cs_assault",
      "Dedicated server browser with thousands of active community servers and mods",
      "Runs with lightning-fast latency on virtually any PC configuration"
    ],
    sysReq: {
      os: "Windows XP / 7 / 10 / 11",
      cpu: "500 MHz processor / Intel Core 2 Duo",
      gpu: "16MB video card / OpenGL compatible",
      ram: "512 MB RAM",
      storage: "2 GB SSD"
    }
  },
  {
    id: "among-us",
    title: "Among Us",
    price: 4.99,
    originalPrice: null,
    genre: "Indie · Social Deduction · Party · PC / Console",
    primaryGenre: "Indie",
    platforms: "PC / Console",
    badge: "HOT",
    badgeClass: "badge-hot",
    rating: 4.8,
    reviewsCount: "680,000",
    coverLandscape: "images/covers/landscape/among-us.jpg",
    coverPortrait: "images/covers/portrait/among-us.jpg",
    artwork: "images/covers/landscape/among-us.jpg",
    shortDesc: "Prepare your spaceship for departure, but beware as one or more random players are Impostors bent on murder!",
    fullDesc: "Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one or more random players among the Crew are Impostors bent on killing everyone! Complete tasks to keep the ship operating or vote out the deceptive Impostors in heated emergency meetings.",
    features: [
      "Multiplayer social deduction for 4-15 players across PC, console, and mobile",
      "Diverse maps: The Skeld, MIRA HQ, Polus, The Airship, and The Fungle",
      "Customizable game rules, roles (Scientist, Engineer, Guardian Angel, Shapeshifter), and cosmetics",
      "Seamless cross-platform matchmaking and built-in voice / text chat"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Pentium 4 / AMD Athlon 64",
      gpu: "Intel HD Graphics / DirectX 10 compatible",
      ram: "1 GB RAM",
      storage: "1 GB SSD"
    }
  },
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077: Phantom Liberty",
    price: 44.99,
    originalPrice: 59.99,
    genre: "RPG · Open World · Sci-Fi · PC / Console",
    primaryGenre: "RPG",
    platforms: "PC / Console",
    badge: "FEATURED",
    badgeClass: "badge-featured",
    rating: 4.8,
    reviewsCount: "710,000",
    coverLandscape: "images/covers/landscape/cyberpunk-2077.jpg",
    coverPortrait: "images/covers/portrait/cyberpunk-2077.jpg",
    artwork: "images/covers/landscape/cyberpunk-2077.jpg",
    shortDesc: "Become V, an urban mercenary immersed in the high-tech, lethal underbelly of Night City.",
    fullDesc: "Cyberpunk 2077 is an open-world action-adventure RPG set in Night City, a megalopolis obsessed with power, glamour, and body modification. Take on high-stakes espionage in Dogtown alongside sleeper agent Solomon Reed (Idris Elba) in the acclaimed Phantom Liberty spy-thriller expansion.",
    features: [
      "Breathtaking open world with cutting-edge full Path Tracing ray tracing",
      "Deep cybernetic enhancement tree with Mantis Blades, Sandevistan, and Quickhacking",
      "Gripping storyline featuring Keanu Reeves as Johnny Silverhand",
      "Completely overhauled 2.0 combat AI, police system, and vehicle combat"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-6700 / AMD Ryzen 5 1600",
      gpu: "NVIDIA GTX 1060 6GB / AMD Radeon RX 580 8GB",
      ram: "16 GB RAM",
      storage: "70 GB SSD"
    }
  },
  {
    id: "elden-ring",
    title: "Elden Ring: Shadow of the Erdtree",
    price: 39.99,
    originalPrice: null,
    genre: "RPG · Action · Dark Fantasy · PC / Console",
    primaryGenre: "RPG",
    platforms: "PC / Console",
    badge: "GOTY",
    badgeClass: "badge-featured",
    rating: 4.9,
    reviewsCount: "890,000",
    coverLandscape: "images/covers/landscape/elden-ring.jpg",
    coverPortrait: "images/covers/portrait/elden-ring.jpg",
    artwork: "images/covers/landscape/elden-ring.jpg",
    shortDesc: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.",
    fullDesc: "Winner of hundreds of Game of the Year awards, Elden Ring is FromSoftware's masterwork open-world action RPG created by Hidetaka Miyazaki and George R. R. Martin. Journey across the Lands Between and enter the Land of Shadow to unravel the mystery of Miquella.",
    features: [
      "Vast interconnected fantasy world with seamless field exploration and multi-level legacy dungeons",
      "Unrivaled build variety: sorceries, incantations, colossal weapons, and spirit ashes",
      "Challenging, legendary boss encounters designed with exquisite artistic grandeur",
      "Co-op summoning and competitive invasion multiplayer"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
      gpu: "NVIDIA GTX 1060 3GB / AMD Radeon RX 580 4GB",
      ram: "12 GB RAM",
      storage: "80 GB SSD"
    }
  },
  {
    id: "rdr2",
    title: "Red Dead Redemption 2",
    price: 19.99,
    originalPrice: 59.99,
    genre: "Adventure · Open World · Western · PC / Console",
    primaryGenre: "Adventure",
    platforms: "PC / Console",
    badge: "SALE -67%",
    badgeClass: "badge-sale",
    rating: 4.9,
    reviewsCount: "940,000",
    coverLandscape: "images/covers/landscape/rdr2.jpg",
    coverPortrait: "images/covers/portrait/rdr2.jpg",
    artwork: "images/covers/landscape/rdr2.jpg",
    shortDesc: "America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run across rugged frontier lands.",
    fullDesc: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. As federal agents and bounty hunters close in, the gang must rob, steal, and fight their way across the rugged heartland of America.",
    features: [
      "The most detailed and responsive open world ever constructed in video game history",
      "Deep narrative centering on Arthur Morgan with dynamic morality honor choices",
      "Realistic ecosystem featuring over 300 animal species with authentic hunting and tracking",
      "Includes Red Dead Online with specialized Frontier Pursuits and multiplayer missions"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-2500K / AMD FX-6300",
      gpu: "NVIDIA GTX 770 2GB / AMD Radeon R9 280 3GB",
      ram: "8 GB RAM",
      storage: "150 GB SSD"
    }
  },
  {
    id: "witcher-3",
    title: "The Witcher 3: Wild Hunt - Complete Edition",
    price: 14.99,
    originalPrice: 39.99,
    genre: "RPG · Open World · Dark Fantasy · PC / Console",
    primaryGenre: "RPG",
    platforms: "PC / Console",
    badge: "SALE -62%",
    badgeClass: "badge-sale",
    rating: 4.9,
    reviewsCount: "820,000",
    coverLandscape: "images/covers/landscape/witcher-3.jpg",
    coverPortrait: "images/covers/portrait/witcher-3.jpg",
    artwork: "images/covers/landscape/witcher-3.jpg",
    shortDesc: "You are Geralt of Rivia, monster slayer for hire, hunting the Child of Prophecy across a war-torn continent.",
    fullDesc: "The Witcher: Wild Hunt is a story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as professional monster hunter Geralt of Rivia tasked with finding a child of prophecy in a vast world rich with merchant cities, pirate islands, and perilous mountain passes.",
    features: [
      "Over 150 hours of award-winning gameplay including Hearts of Stone & Blood and Wine expansions",
      "Next-Gen updated with ray-traced reflections, 4K textures, and integrated community mods",
      "Deep alchemy, combat signs, and monster tracking bestiary",
      "Full standalone Gwent card game embedded within the adventure"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-2500K / AMD Phenom II X4 940",
      gpu: "NVIDIA GTX 660 / AMD Radeon HD 7870",
      ram: "8 GB RAM",
      storage: "50 GB SSD"
    }
  },
  {
    id: "gow-ragnarok",
    title: "God of War Ragnarök",
    price: 59.99,
    originalPrice: null,
    genre: "Action · Adventure · Mythic · PC / Console",
    primaryGenre: "Action",
    platforms: "PC / Console",
    badge: "NEW",
    badgeClass: "badge-new",
    rating: 4.9,
    reviewsCount: "310,000",
    coverLandscape: "images/covers/landscape/gow.jpg",
    coverPortrait: "images/covers/portrait/gow.jpg",
    artwork: "images/covers/landscape/gow.jpg",
    shortDesc: "Join Kratos and Atreus on a mythic journey for answers before the prophesied battle that will end the world.",
    fullDesc: "From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018). Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. Along the way they will explore stunning mythic landscapes and face fearsome Norse gods and monsters.",
    features: [
      "Master the Leviathan Axe, Blades of Chaos, and the new Draupnir Spear with fluid combat combos",
      "Explore all Nine Realms of Norse mythology across lush jungles, frozen lakes, and dwarven mines",
      "Deep emotional father-and-son character arc praised as a storytelling masterpiece",
      "Includes God of War Ragnarök: Valhalla roguelite expansion mode at no additional cost"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-6600K / AMD Ryzen 5 1600",
      gpu: "NVIDIA GTX 1060 6GB / AMD Radeon RX 570 4GB",
      ram: "16 GB RAM",
      storage: "190 GB SSD"
    }
  },
  {
    id: "minecraft",
    title: "Minecraft: Java & Bedrock Edition",
    price: 29.99,
    originalPrice: null,
    genre: "Adventure · Sandbox · Survival · PC",
    primaryGenre: "Adventure",
    platforms: "PC",
    badge: "BESTSELLER",
    badgeClass: "badge-hot",
    rating: 4.9,
    reviewsCount: "2,100,000",
    coverLandscape: "images/covers/landscape/minecraft.jpg",
    coverPortrait: "images/covers/portrait/minecraft.jpg",
    artwork: "images/covers/landscape/minecraft.jpg",
    shortDesc: "Build anything you can imagine, explore infinite voxel worlds, and survive the dangerous night.",
    fullDesc: "Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off the dangerous mobs. Includes both Java and Bedrock editions in a unified launcher.",
    features: [
      "Both Java Edition and Bedrock Edition included with unified cross-play",
      "Endless creative freedom: redstone engineering, command blocks, and infinite worlds",
      "Massive multiplayer community with survival servers, mini-games, and custom shaders",
      "Vast modding ecosystem with thousands of community mods, resource packs, and maps"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i3-3210 / AMD A8-7600 APU",
      gpu: "Intel HD Graphics 4000 / AMD Radeon R5 series",
      ram: "4 GB RAM",
      storage: "4 GB SSD"
    }
  },
  {
    id: "ea-fc-24",
    title: "EA SPORTS FC 24",
    price: 27.99,
    originalPrice: 69.99,
    genre: "Racing · Sports · Simulation · PC / Console",
    primaryGenre: "Racing",
    platforms: "PC / Console",
    badge: "SALE -60%",
    badgeClass: "badge-sale",
    rating: 4.4,
    reviewsCount: "195,000",
    coverLandscape: "images/covers/landscape/ea-fc-24.jpg",
    coverPortrait: "images/covers/portrait/ea-fc-24.jpg",
    artwork: "images/covers/landscape/ea-fc-24.jpg",
    shortDesc: "Experience unparalleled realism in the World's Game powered by HyperMotionV and PlayStyles.",
    fullDesc: "EA SPORTS FC 24 welcomes you to The World's Game: the truest football experience ever with HyperMotionV, PlayStyles optimized by Opta, and a revolutionized Frostbite Engine. Build your dream squad in Ultimate Team with men's and women's football playing together on the same pitch.",
    features: [
      "Over 19,000 fully licensed players, 700+ teams, and 30+ leagues worldwide",
      "HyperMotionV captures match rhythm and fluidity using volumetric data from 180+ top-tier matches",
      "PlayStyles dimensionalize athletes, interpreting data from Opta into signature player abilities",
      "Cross-play in Clubs, Co-Op Seasons, and Ultimate Team modes"
    ],
    sysReq: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-6600K / AMD Ryzen 5 1600",
      gpu: "NVIDIA GTX 1050 Ti 4GB / AMD Radeon RX 570 4GB",
      ram: "8 GB RAM",
      storage: "100 GB SSD"
    }
  }
];

// 6 Featured carousel games (GTA V, Cyberpunk 2077, COD MW3, AC Mirage, Elden Ring, RDR2)
const FEATURED_GAMES = [
  GAMES_DATA[0], // GTA V
  GAMES_DATA[5], // Cyberpunk 2077
  GAMES_DATA[1], // COD MW3
  GAMES_DATA[2], // AC Mirage
  GAMES_DATA[6], // Elden Ring
  GAMES_DATA[7]  // Red Dead Redemption 2
];

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
        artwork: game.coverPortrait || game.artwork,
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
          <img src="${getImagePath(game.coverLandscape || game.artwork)}" alt="${game.title}">
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
    const offsetPercent = this.currentIndex * 100;
    this.track.style.transform = `translateX(-${offsetPercent}%)`;

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
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => this.prevSlide());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => this.nextSlide());
    }

    window.addEventListener("keydown", (e) => {
      if (document.querySelector(".modal-backdrop.is-open")) return;
      if (e.key === "ArrowLeft") this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });

    const vp = this.viewport;
    if (!vp) return;

    vp.addEventListener("pointerdown", (e) => this.dragStart(e));
    window.addEventListener("pointermove", (e) => this.dragMove(e));
    window.addEventListener("pointerup", (e) => this.dragEnd(e));
    window.addEventListener("pointercancel", (e) => this.dragEnd(e));

    vp.addEventListener("mouseenter", () => this.clearAutoTimer());
    vp.addEventListener("mouseleave", () => this.startAutoTimer());
  }

  dragStart(e) {
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
      this.nextSlide();
    } else if (diff > 50) {
      this.prevSlide();
    } else {
      this.updatePosition();
    }
  }
}

// =============================================================================
// STORE BROWSING CATALOG & FILTER ENGINE (PORTRAIT GAME CARDS)
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
    filtered = filtered.filter(g => g.originalPrice !== null || g.badge.includes("SALE"));
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

  // Renders Portrait Cards (aspect-ratio: 3/4)
  grid.innerHTML = filtered.map(game => `
    <div class="game-card">
      <div class="card-media" onclick="openGameDetail('${game.id}')">
        <div class="card-badge ${game.badgeClass}">${game.badge}</div>
        <img src="${getImagePath(game.coverPortrait || game.artwork)}" alt="${game.title}" loading="lazy">
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
            <button class="btn-card-add" onclick="window.gameStore.addToCart('${game.id}')">Add</button>
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

  document.getElementById("modalGameImg").src = getImagePath(game.coverLandscape || game.artwork);
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
  window.gameStore = new GameGridStore();
  window.featuredCarousel = new FeaturedCarousel();
  renderStoreGrid();

  const cartBtn = document.getElementById("cartOpenBtn");
  if (cartBtn) cartBtn.addEventListener("click", openCart);

  const cartCloseBtn = document.getElementById("cartCloseBtn");
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);

  const cartBackdrop = document.getElementById("cartDrawerBackdrop");
  if (cartBackdrop) {
    cartBackdrop.addEventListener("click", (e) => {
      if (e.target === cartBackdrop) closeCart();
    });
  }

  const promoApplyBtn = document.getElementById("promoApplyBtn");
  if (promoApplyBtn) {
    promoApplyBtn.addEventListener("click", () => {
      const code = document.getElementById("promoInput").value;
      window.gameStore.applyPromo(code);
    });
  }

  const navSearch = document.getElementById("navSearchInput");
  if (navSearch) {
    navSearch.addEventListener("input", (e) => {
      window.gameStore.searchQuery = e.target.value;
      renderStoreGrid();
      const storeEl = document.getElementById("store");
      if (storeEl && window.scrollY < 200 && e.target.value.length > 0) {
        storeEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const genrePills = document.querySelectorAll(".filter-pill");
  genrePills.forEach(pill => {
    pill.addEventListener("click", () => {
      genrePills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      window.gameStore.activeGenre = pill.dataset.genre || "all";
      renderStoreGrid();
    });
  });

  const platButtons = document.querySelectorAll(".platform-btn");
  platButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      platButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      window.gameStore.activePlatform = btn.dataset.plat || "all";
      renderStoreGrid();
    });
  });

  const sortSelect = document.getElementById("storeSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      window.gameStore.sortBy = e.target.value;
      renderStoreGrid();
    });
  }

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

  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.querySelector(".nav-links");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("is-mobile-open");
    });
  }

  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  const detailModal = document.getElementById("gameDetailModal");
  if (detailModal) {
    detailModal.addEventListener("click", (e) => {
      if (e.target === detailModal) closeGameDetail();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeGameDetail();
      closeCart();
      closeCheckout();
    }
  });
});
