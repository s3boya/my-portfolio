// Saare Couture products ki list
const coutureProducts = [
    {
        id: "64421",
        title: "OBSIDIAN DRAPE",
        category: "Draped Gown",
        designer: "By Shazain Ali",
        image: "images/ChatGPT Image Aug 29, 2026, 02_17_19 AM.png",
        bgSize: "270px"
    },
    {
        id: "63405",
        title: "ICY CRYSTAL",
        category: "Crystal Gown",
        designer: "By Maison Noir",
        image: "images/ChatGPT Image Aug 29, 2026, 04_16_09 AM.png",
        bgSize: "270px"
    },
    {
        id: "67351",
        title: "CELESTIAL TIDE",
        category: "Ruffled Gown",
        designer: "By Aurelia Vance",
        image: "images/pink.png",
        bgSize: "270px"
    },
    {
        id: "66177",
        title: "ROYAL COBALT",
        category: "Velvet Gown",
        designer: "By Elian Sterling",
        image: "images/black.png",
        bgSize: "260px"
    },
    {
        id: "54423",
        image: "images/ChatGPT Image Aug 29, 2026, 05_08_15 AM.png",
        bgSize: "270px",
        title: "CELESTIAL BLOOM",
        category: "Diamond Gown",
        designer: "Maison Élaris",
    },
    {
        id: "58431",
        image: "images/ChatGPT_Image_Aug_29__2026__07_13_54_AM-removebg-preview.png",
        bgSize: "270px",
        title: "IVORY SERENADE",
        category: "Draped Gown",
        designer: "Valentina Sorel",
    },
    {
        id: "61238",
        image: "images/ChatGPT Image Aug 29, 2026, 05_44_54 AM.png",
        bgSize: "270px",
        title: "MIDNIGHT ALLURE",
        category: "Mermaid Gown",
        designer: "Valerié Noir",
    },
    {
        id: "73910",
        image: "images/ChatGPT Image Aug 29, 2026, 05_54_22 AM.png",
        bgSize: "270px",
        title: "SILVER ECLIPSE",
        category: "Sequin Gown",
        designer: "Elara Voss",
    },
    // {
    //     id: "75380",
    //     image: "images/85fa21e8-d3e5-420d-98f7-55cc98111e47-removebg-preview.png",
    //     bgSize: "270px",
    //     title: "GILDED BLOSSOM",
    //     category: "Mermaid Gown",
    //     designer: "Seraphine Vale",
    // },
    // {
    //     id: "75280",
    //     image: "images/ChatGPT Image Aug 29, 2026, 06_17_33 AM.png",
    //     bgSize: "270px",
    //     title: "MELROT ECLIPSE",
    //     category: "Beaded Gown",
    //     designer: "Liora Ashford",
    // },
    // {
    //     image: "images/ChatGPT Image Aug 29, 2026, 06_38_48 AM.png",
    //     id: "75480",
    //     bgSize: "270px",
    //     title: "FROSTED RIBBON",
    //     category: "Pleated Gown",
    //     designer: "Amélie Roux",
    // },
    // {
    //     id: "75580",
    //     image: "images/ChatGPT Image Aug 29, 2026, 06_44_57 AM.png",
    //     bgSize: "270px",
    //     title: "ROYAL SAPPHIRE",
    //     category: "Ruffled Gown",
    //     designer: "Isolde Laurent",
    // }
];

// Yahan ID match kar di hai ("coutureGrid")
const gridContainer = document.getElementById("coutureGrid");

if (gridContainer) {
    coutureProducts.forEach(product => {
        const productCard = document.createElement("a");
        productCard.href = `product-detail.html?id=${product.id}`;
        productCard.style.textDecoration = "none";
        productCard.style.color = "inherit";

        productCard.innerHTML = `
            <div class="product-card">
                <div class="category-image" style="background: url('${product.image}'); background-position: center; background-repeat: no-repeat; background-size: ${product.bgSize};"></div>
                <div class="product-details">
                    <div class="product-title">${product.title}</div>
                    <div class="product-category-type">${product.category}</div>
                    <div class="product-designer">${product.designer}</div>
                    <div class="product-code">${product.id}</div>
                </div>
            </div>
        `;

        gridContainer.appendChild(productCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Yahan aap apne marzi ke jitne marzi texts add kar sakte hain
    const messages = [
        "Flat 30% OFF on New Arrivals | Shop Now",

        "Upgrade Your Wardrobe | Explore Winter Capsule",

        "Get 25% Discount | Become a Member",

        "Discover Exclusive Styles | Shop the Latest Drop",

        "Elegance Redefined | Check Out Our New Collection",
    ];

    let currentIndex = 0;
    const textElement = document.getElementById("announcementText");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const sliderContainer = document.querySelector(".announcement-slider");

    function updateText(index) {
        textElement.style.opacity = 0;
        setTimeout(() => {
            textElement.textContent = messages[index];
            textElement.style.opacity = 1;
        }, 150);
    }

    function nextMessage() {
        currentIndex = (currentIndex + 1) % messages.length;
        updateText(currentIndex);
    }

    function prevMessage() {
        currentIndex = (currentIndex - 1 + messages.length) % messages.length;
        updateText(currentIndex);
    }

    // Button Click Events
    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        nextMessage();
    });

    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        prevMessage();
    });

    // Auto Slide every 5 seconds (5000ms)
    let autoSlide = setInterval(nextMessage, 5000);

    // Pause auto-slide when mouse enters the banner
    sliderContainer.addEventListener("mouseenter", () => clearInterval(autoSlide));
    sliderContainer.addEventListener("mouseleave", () => {
        autoSlide = setInterval(nextMessage, 5000);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const menuOpenBtn = document.getElementById("menuOpenBtn");
    const menuCloseBtn = document.getElementById("menuCloseBtn");
    const sidebarMenu = document.getElementById("sidebarMenu");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    function openMenu() {
        sidebarMenu.classList.add("active");
        sidebarOverlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Background scroll disable karne ke liye
    }

    function closeMenu() {
        sidebarMenu.classList.remove("active");
        sidebarOverlay.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    menuOpenBtn.addEventListener("click", openMenu);
    menuCloseBtn.addEventListener("click", closeMenu);
    sidebarOverlay.addEventListener("click", closeMenu);
});


document.addEventListener('DOMContentLoaded', () => {
    updateBadgeDisplay();

    // Sab "Add to Wishlist" buttons par event listener lagane ke liye
    const wishlistButtons = document.querySelectorAll('.add-to-wishlist-btn'); // Apne button ki class yahan likh dena
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Current count nikalain localStorage se
            let count = parseInt(localStorage.getItem('wishlistCount')) || 0;
            count += 1;
            
            // New count save karein
            localStorage.setItem('wishlistCount', count);

            
            
            // Badge update karein
            updateBadgeDisplay();
            
            // Optional: Button ka text ya style change karne ke liye
            button.textContent = "Added to Wishlist";
            button.disabled = true;
        });
    });
});

// Badge par count show karne aur animate karne ka function
function updateBadgeDisplay() {
    const badge = document.querySelector('.wishlist-badge');
    if (!badge) return;

    let count = parseInt(localStorage.getItem('wishlistCount')) || 0;
    
    badge.textContent = count;
    
    if (count > 0) {
        badge.classList.remove('hidden');
        // Chota sa pop animation jab count change ho
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 200);
    } else {
        badge.classList.add('hidden');
    }
}






// --- Complete Search Modal & Live Search Logic ---

const searchIconTrigger = document.querySelector('.nav-icon[title="Search"]');
const searchModal = document.getElementById('searchModal');
const closeSearchBtn = document.getElementById('closeSearchBtn');
const searchInputField = document.getElementById('searchInputField');
const searchSubmitBtn = document.getElementById('searchSubmitBtn');
const searchResultsContainer = document.getElementById('searchResultsContainer');

// Store products ki list
const storeProducts = [
    { name: "New Couture Dress", category: "couture", url: "#" },
    { name: "Velvet Evening Gown", category: "gown", url: "#" },
    { name: "Summer Floral Maxi", category: "maxi", url: "#" },
    { name: "Luxury Silk Corset", category: "corset", url: "#" },
    { name: "Bridal White Suit", category: "bridal", url: "#" }
];

let searchTimeout;

// 1. Open Modal when Search Icon is clicked
if (searchIconTrigger) {
    searchIconTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        searchModal.classList.add('active');
        setTimeout(() => searchInputField.focus(), 100);
    });
}

// 2. Close Modal on Cross Button click
if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', () => {
        searchModal.classList.remove('active');
        // Modal band hone par input aur results bhi clear kar dein
        searchInputField.value = "";
        searchResultsContainer.innerHTML = "";
    });
}

// 3. Close Modal when clicking outside the modal box
window.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.classList.remove('active');
        searchInputField.value = "";
        searchResultsContainer.innerHTML = "";
    }
});

// 4. Live Search & 3-Dots Animation Function
function performLiveSearch() {
    const query = searchInputField.value.toLowerCase().trim();

    if (query === "") {
        searchResultsContainer.innerHTML = "";
        return;
    }

    // Pehle 3-dots loading animation show ho
    searchResultsContainer.innerHTML = `
        <div class="search-loading">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    // 300ms delay ke baad results filter hokar samne ayen
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const matchedProducts = storeProducts.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.category.toLowerCase().includes(query)
        );

        searchResultsContainer.innerHTML = "";

        if (matchedProducts.length > 0) {
            let listHTML = "<ul class='modal-search-list'>";
            matchedProducts.forEach(item => {
                listHTML += `<li><a href="${item.url}">${item.name}</a></li>`;
            });
            listHTML += "</ul>";
            searchResultsContainer.innerHTML = listHTML;
        } else {
            searchResultsContainer.innerHTML = `<p class="modal-no-result">Item currently unavailable or not found.</p>`;
        }
    }, 1000);
}

// 5. Event Listeners for Typing & Clicking
if (searchInputField) {
    searchInputField.addEventListener('input', performLiveSearch);
}

if (searchSubmitBtn) {
    searchSubmitBtn.addEventListener('click', performLiveSearch);
}









document.addEventListener("DOMContentLoaded", function() {
    const toTopBtn = document.getElementById('toTopBtn');
    const footer = document.querySelector('.site-footer');

    if (toTopBtn && footer) {
        window.addEventListener('scroll', function() {
            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Jab user footer ke bilkul kareeb/end tak pahuche
            if (footerRect.top <= windowHeight - 80 && footerRect.bottom >= windowHeight / 4) {
                toTopBtn.classList.add('show');
            } else {
                toTopBtn.classList.remove('show');
            }
        });

        // Smooth scroll to top on click
        toTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});


// --- Wishlist Badge Auto Updater for Home Page ---

function updateWishlistBadge() {
    const badge = document.querySelector('.wishlist-badge');
    if (!badge) return;

    // 'fabulous_wishlist' key se array parse karein
    const wishlist = JSON.parse(localStorage.getItem('fabulous_wishlist')) || [];
    const count = wishlist.length;

    badge.textContent = count;
    
    if (count > 0) {
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none'; // Agar 0 ho toh hide rahe
    }
}

// Page load hotay hi badge update ho jaye
document.addEventListener('DOMContentLoaded', updateWishlistBadge);

// Agar kisi aur tab ya page par wishlist update ho, toh home page par bhi foran sync ho jaye
window.addEventListener('storage', (event) => {
    if (event.key === 'fabulous_wishlist') {
        updateWishlistBadge();
    }
});





function redirectToCatalog() {
    if (!searchInputField) return;
    const query = searchInputField.value.trim();
    
    // Agar input khali na ho toh naye search/catalog page par bhej dein
    if (query !== "") {
        window.location.href = `shop-search.html?search=${encodeURIComponent(query)}`;
    }
}

// 1. Search button click karne par
if (searchSubmitBtn) {
    searchSubmitBtn.addEventListener('click', redirectToCatalog);
}

// 2. Input field mein Enter press karne par
if (searchInputField) {
    searchInputField.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            redirectToCatalog();
        }
    });
}
