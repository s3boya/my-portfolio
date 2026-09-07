// Complete Products Database (Aapke asal products ke sath)
const allProducts = [
    {
        id: "72618",
        title: "SILVER CASCADE",
        category: "Lariat Necklace",
        designer: "By Marcelline Rowe",
        image: "images/ChatGPT Image Aug 31, 2026, 06_59_55 PM.png",
        bgSize: "263px"
    },
    {
        id: "72615",
        title: "CRYSTAL LATTICE",
        category: "Plated Necklace",
        designer: "By Keira Tong",
        image: "images/ChatGPT Image Aug 31, 2026, 07_05_53 PM.png",
        bgSize: "255px"
    },
    {
        id: "72616",
        title: "PEARL NOCTURNE",
        category: "Pearl Pendant",
        designer: "By Elara Voss",
        image: "images/ChatGPT Image Aug 31, 2026, 07_10_33 PM.png",
        bgSize: "260px"
    },
    {
        id: "72617",
        title: "MIDNIGHT ORBIT",
        category: "Layered Necklace",
        designer: "By Sienna Marlowe",
        image: "images/ChatGPT Image Aug 31, 2026, 07_17_20 PM.png",
        bgSize: "260px"
    },
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
        bgSize: "270px"
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
    {
        id: "72622",
        title: "SILVER WHISPER",
        category: "Bow Neck Tee",
        designer: "By Elowne Hartley",
        image: "images/ChatGPT Image Aug 31, 2026, 08_49_49 PM.png",
        bgSize: "270px"
    },
    {
        id: "72619",
        title: "CLOUDLINE ESSENTIA",
        category: "Scoop Neck Tee",
        designer: "By Valen Mireaux",
        image: "images/ChatGPT Image Aug 31, 2026, 08_41_27 PM.png",
        bgSize: "255px"
    },
    {
        id: "72620",
        title: "LEMON SILHOUETTE",
        category: "Square Neck Tee",
        designer: "By Celeste Arwyn",
        image: "images/ChatGPT Image Aug 31, 2026, 08_44_45 PM.png",
        bgSize: "265px"
    },
    {
        id: "72623",
        title: "MOCHA LACE",
        category: "Ribbed Henley",
        designer: "By Aurelia Venn",
        image: "images/ChatGPT Image Aug 31, 2026, 09_03_25 PM.png",
        bgSize: "265px"
    },
    {
        id: "69432",
        title: "GOLDEN HEIRLOOM",
        category: "Draped Gown",
        designer: "By Seraphine Vale",
        image: "images/ChatGPT Image Aug 30, 2026, 08_05_43 PM.png",
        bgSize: "270px"
    },
    {
        id: "58321",
        title: "MIDNIGHT BLOOM",
        category: "Mermaid Gown",
        designer: "Elara Voss",
        image: "images/ChatGPT Image Aug 31, 2026, 08_26_20 PM.png",
        bgSize: "260px"
    },
    {
        id: "48231",
        title: "LUMIÈRE CUTOUT",
        category: "Evening Gown",
        designer: "By Amélie Rousseau",
        image: "images/ChatGPT Image Aug 30, 2026, 08_24_56 PM.png",
        bgSize: "280px"
    },
    {
        id: "69432",
        title: "SUNSET SCULPTURE",
        category: "Draped Column Gown",
        designer: "By Alina Rick",
        image: "images/ChatGPT Image Aug 30, 2026, 08_46_53 PM.png",
        bgSize: "240px"
    },
    {
        id: "72618",
        title: "CITY NOIR",
        category: "Corset Midi",
        designer: "By Marcelline Rowe",
        image: "images/ChatGPT Image Aug 31, 2026, 04_44_02 AM.png",
        bgSize: "260px"
    },
    {
        id: "72614",
        title: "TAUPE ELEGANCE",
        category: "Corset Jumpsuit",
        designer: "By Keira Tong",
        image: "images/ChatGPT Image Aug 31, 2026, 04_53_35 AM.png",
        bgSize: "260px"
    },
    {
        id: "72616",
        title: "BLUE TIE SET",
        category: "Striped Jumpsuit",
        designer: "By Cider",
        image: "images/ChatGPT Image Aug 31, 2026, 04_58_31 AM.png",
        bgSize: "260px"
    },
    {
        id: "72617",
        title: "MIDNIGHT TASSELS",
        category: "Wrap Jumpsuit",
        designer: "By Marcelline Rowe",
        image: "images/ChatGPT Image Aug 31, 2026, 05_01_42 AM.png",
        bgSize: "260px"
    },
    {
        id: "55120",
        title: "SOLARIS BLOOM",
        category: "Summer Linen",
        image: "images/white.png",
        bgSize: "270px",
        designer: "By Lyra Sol"
    },
    {
        id: "54219",
        title: "CERULEAN BREEZE",
        category: "Summer Casual",
        image: "images/black3.png",
        bgSize: "270px",
        designer: "By Kai Thorne",
    },
     {
        id: "53982",
        title: "AMBER HORIZON",
        category: "Summer Wrap",
        image: "images/red.png",
        bgSize: "270px",
        designer: "By Elena Rostova",
    },
     {
        id: "52843",
        title: "IVORY OASIS",
        category: "Summer Midi",
        image: "images/pink3.png",
        bgSize: "270px",
        designer: "By Soren Kael",
    },
    {
        id: "53945",
        title: "MIDNIGHT LACE",
        category: "Velvet Dress",
        image: "images/ChatGPT Image Aug 30, 2026, 05_52_17 PM.png",
        bgSize: "230px",
        designer: "By Éloise Marcell",
    },
     {
        id: "52867",
        title: "BLUSH SERENADE",
        category: "Summer Satin",
        image: "images/ChatGPT Image Aug 30, 2026, 06_49_59 PM.png",
        bgSize: "270px",
        designer: "By Mirelle Beaumont",
    },
    {
        id: "53992",
        title: "WHITE RENAISSANCE",
        category: "Shirt Dress",
        image: "images/ChatGPT Image Aug 30, 2026, 07_37_28 PM.png",
        bgSize: "270px",
        designer: "By Camille Laurent",
    },
     {
        id: "52837",
        title: "IVORY TASSELED REVERIE",
        category: "Empire Gown",
        image: "images/ChatGPT Image Aug 30, 2026, 07_46_38 PM.png",
        bgSize: "270px",
        designer: "By Elara Voss",
    },
];

const catalogSearchInput = document.getElementById('catalogSearchInput');
const categoryFilter = document.getElementById('categoryFilter');
const productGrid = document.getElementById('productGrid');
const noResultsMsg = document.getElementById('noResultsMsg');

// URL se search query uthane ke liye
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery && catalogSearchInput) {
        catalogSearchInput.value = searchQuery;
    }
    filterAndDisplayProducts();
});

function filterAndDisplayProducts() {
    if (!productGrid) return;

    const searchTerm = catalogSearchInput ? catalogSearchInput.value.toLowerCase().trim() : "";
    const selectedCategory = categoryFilter ? categoryFilter.value : "all";

    const filtered = allProducts.filter(product => {
        // Search term check
        const matchesSearch = searchTerm === "" || 
                              product.title.toLowerCase().includes(searchTerm) || 
                              product.category.toLowerCase().includes(searchTerm) || 
                              product.designer.toLowerCase().includes(searchTerm) || 
                              product.id.includes(searchTerm);
                              
        // Category filter check (Strictly checking only product.category)
        let matchesCategory = true;
        if (selectedCategory !== 'all') {
            const catLower = product.category.toLowerCase();

            if (selectedCategory === 'gowns') {
                const keywords = ['gown'];
                matchesCategory = keywords.some(keyword => catLower.includes(keyword));
            } else if (selectedCategory === 'jumpsuits') {
                const keywords = ['jumpsuit'];
                matchesCategory = keywords.some(keyword => catLower.includes(keyword));
            } else if (selectedCategory === 'necklaces') {
                const keywords = ['necklace', 'bracelet', 'earring', 'pendant', 'jewellery'];
                matchesCategory = keywords.some(keyword => catLower.includes(keyword));
            } else if (selectedCategory === 'tees') {
                const keywords = ['tee', 'top', 'henley'];
                matchesCategory = keywords.some(keyword => catLower.includes(keyword));
            } else if (selectedCategory === 'summer') {
                const keywords = ['summer', 'linen', 'casual', 'wrap', 'satin', 'oasis', 'breeze'];
                matchesCategory = keywords.some(keyword => catLower.includes(keyword));
            } else if (selectedCategory === 'velvet') {
                const keywords = ['velvet', 'dress', 'heirloom'];
                matchesCategory = keywords.some(keyword => catLower.includes(keyword));
            } else {
                matchesCategory = catLower.includes(selectedCategory);
            }
        }
        
        return matchesSearch && matchesCategory;
    });

    productGrid.innerHTML = "";

    if (filtered.length > 0) {
        if (noResultsMsg) noResultsMsg.style.display = "none";
        filtered.forEach(product => {
            const card = document.createElement('a');
            card.href = `product-detail.html?id=${product.id}`;
            card.style.textDecoration = "none";
            card.style.color = "inherit";
            card.className = 'product-card';
            
            card.innerHTML = `
                <div class="category-image" style="background-image: url('${product.image}'); background-position: center; background-repeat: no-repeat; background-size: contain; height: 320px; width: 100%;"></div>
                <div class="product-details" style="padding: 15px; display: flex; justify-content: center; align-items: center; flex-direction: column;">
                    <h3 style="font-size: 12px; margin: 10px 0 5px; color: #111; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; letter-spacing: 2px;">${product.title}</h3>
                    <p style="color: #666; font-size: 12px; margin-bottom: 5px;">${product.category}</p>
                    <p style="color: #888; font-size: 11px; font-style: italic;">${product.designer}</p>
                    <p class="product-code" style="margin-top: 5px; font-size: 11px; color: #777; letter-spacing: 1px;">${product.id}</p>
                </div>
            `;
            productGrid.appendChild(card);
        });
    } else {
        if (noResultsMsg) noResultsMsg.style.display = "block";
    }
}

// Event Listeners for Search & Filter
if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', filterAndDisplayProducts);
}
if (categoryFilter) {
    categoryFilter.addEventListener('change', filterAndDisplayProducts);
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



document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById('categoryDropdown');
    const selectedBox = dropdown.querySelector('.dropdown-selected');
    const selectedText = document.getElementById('selectedText');
    const items = dropdown.querySelectorAll('.dropdown-item');
    const hiddenSelect = document.getElementById('categoryFilter');

    // Toggle dropdown open/close on click
    selectedBox.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });

    // Close dropdown when clicking outside
    window.addEventListener('click', () => {
        dropdown.classList.remove('open');
    });

    // Handle item selection
    items.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all and add to clicked
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Update selected text
            selectedText.textContent = item.textContent;

            // Update hidden select value and trigger change event for your filter function
            const value = item.getAttribute('data-value');
            hiddenSelect.value = value;
            hiddenSelect.dispatchEvent(new Event('change'));

            // Close dropdown smoothly
            dropdown.classList.remove('open');
        });
    });
});