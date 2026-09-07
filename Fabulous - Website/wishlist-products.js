document.addEventListener("DOMContentLoaded", () => {
    // Scroll to Top Logic
    const toTopBtn = document.getElementById("toTopBtn");
    if (toTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                toTopBtn.classList.add("show");
            } else {
                toTopBtn.classList.remove("show");
            }
        });
        toTopBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const wishlistGrid = document.getElementById("wishlistGrid");

    function renderWishlist() {
        let wishlist = JSON.parse(localStorage.getItem('fabulous_wishlist')) || [];
        let masterProducts = JSON.parse(localStorage.getItem('fabulous_products')) || {};

        if (wishlist.length === 0) {
            wishlistGrid.innerHTML = `<p class="empty-wishlist">Your wishlist is currently empty.</p>`;
            return;
        }

        wishlistGrid.innerHTML = "";
        wishlist.forEach(item => {
            // Live stock fetch from master products or item stock fallback
            let currentStock = item.stock;
            if (masterProducts[item.id] && masterProducts[item.id].stock) {
                currentStock = masterProducts[item.id].stock;
            }

            const card = document.createElement("div");
            card.className = "wishlist-card";
            
            const isInstock = currentStock && currentStock.toLowerCase() === "in stock";
            const dotClass = isInstock ? "stock-dot green" : "stock-dot red";

            card.innerHTML = `
                <div class="wishlist-img-box">
                    <img src="${item.image || (item.images && item.images[0]) || ''}" alt="${item.title}">
                </div>
                <div class="wishlist-info">
                    <h3>${item.title}</h3>
                    <p>Size: ${item.size || 'M'} | ${currentStock} <span class="${dotClass}"></span></p>
                </div>
                <div class="wishlist-actions">
                    <a href="product-detail.html?id=${item.id}" class="view-btn">VIEW</a>
                    <button class="remove-btn" data-id="${item.id}">REMOVE</button>
                </div>
            `;
            
            wishlistGrid.appendChild(card);
        });

        // Attach Remove Event Listeners
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idToRemove = e.target.getAttribute('data-id');
                let updatedWishlist = wishlist.filter(item => item.id !== idToRemove);
                localStorage.setItem('fabulous_wishlist', JSON.stringify(updatedWishlist));
                renderWishlist(); // Refresh grid
            });
        });
    }

    renderWishlist();
});










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
