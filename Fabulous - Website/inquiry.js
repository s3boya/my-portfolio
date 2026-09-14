document.addEventListener("DOMContentLoaded", () => {
    const inquiryData = JSON.parse(localStorage.getItem('fabulous_current_inquiry')) || {};

    const previewTitle = document.getElementById('preview-title');
    const previewSize = document.getElementById('preview-size');
    const previewImg = document.getElementById('preview-img');

    if (previewTitle) {
        previewTitle.textContent = inquiryData.title || 'Product';
    }

    if (previewSize) {
        previewSize.textContent = inquiryData.size || 'M';
    }

    if (previewImg && inquiryData.img) {
        previewImg.src = inquiryData.img;
    }

    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameField = document.getElementById('custName');
            const name = nameField ? nameField.value : 'Valued Client';

            const finalTitle = inquiryData.title || 'this piece';
            const finalSize = inquiryData.size || 'N/A';
            const finalId = inquiryData.id || 'N/A';

            alert(`Thank you ${name}! Your inquiry for ${finalTitle} (ID: ${finalId}, Size: ${finalSize}) has been submitted successfully. Our concierge team will contact you shortly.`);

            localStorage.removeItem('fabulous_current_inquiry');
            window.location.href = 'home.html';
        });
    }
});

// --- Announcement Slider Logic ---
document.addEventListener("DOMContentLoaded", () => {
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

    if (textElement && prevBtn && nextBtn && sliderContainer) {
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

        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            nextMessage();
        });

        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            prevMessage();
        });

        let autoSlide = setInterval(nextMessage, 5000);

        sliderContainer.addEventListener("mouseenter", () => clearInterval(autoSlide));
        sliderContainer.addEventListener("mouseleave", () => {
            autoSlide = setInterval(nextMessage, 5000);
        });
    }
});

// --- Sidebar Menu Logic ---
document.addEventListener("DOMContentLoaded", () => {
    const menuOpenBtn = document.getElementById("menuOpenBtn");
    const menuCloseBtn = document.getElementById("menuCloseBtn");
    const sidebarMenu = document.getElementById("sidebarMenu");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    function openMenu() {
        if (sidebarMenu) sidebarMenu.classList.add("active");
        if (sidebarOverlay) sidebarOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        if (sidebarMenu) sidebarMenu.classList.remove("active");
        if (sidebarOverlay) sidebarOverlay.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    if (menuOpenBtn) menuOpenBtn.addEventListener("click", openMenu);
    if (menuCloseBtn) menuCloseBtn.addEventListener("click", closeMenu);
    if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeMenu);
});

// --- Wishlist Badge Display Logic ---
document.addEventListener('DOMContentLoaded', () => {
    updateBadgeDisplay();
});

function updateBadgeDisplay() {
    const badge = document.querySelector('.wishlist-badge');
    if (!badge) return;

    const wishlist = JSON.parse(localStorage.getItem('fabulous_wishlist')) || [];
    const count = wishlist.length;

    badge.textContent = count;

    if (count > 0) {
        badge.style.display = 'flex';
        badge.classList.remove('hidden');
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 200);
    } else {
        badge.style.display = 'none';
        badge.classList.add('hidden');
    }
}

window.addEventListener('storage', (event) => {
    if (event.key === 'fabulous_wishlist') {
        updateBadgeDisplay();
    }
});

// --- Complete Search Modal & Live Search Logic ---
const searchIconTrigger = document.querySelector('.nav-icon[title="Search"]');
const searchModal = document.getElementById('searchModal');
const closeSearchBtn = document.getElementById('closeSearchBtn');
const searchInputField = document.getElementById('searchInputField');
const searchSubmitBtn = document.getElementById('searchSubmitBtn');
const searchResultsContainer = document.getElementById('searchResultsContainer');

const storeProducts = [
    { name: "New Couture Dress", category: "couture", url: "#" },
    { name: "Velvet Evening Gown", category: "gown", url: "#" },
    { name: "Summer Floral Maxi", category: "maxi", url: "#" },
    { name: "Luxury Silk Corset", category: "corset", url: "#" },
    { name: "Bridal White Suit", category: "bridal", url: "#" }
];

let searchTimeout;

if (searchIconTrigger && searchModal && searchInputField) {
    searchIconTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        searchModal.classList.add('active');
        setTimeout(() => searchInputField.focus(), 100);
    });
}

if (closeSearchBtn && searchModal && searchInputField && searchResultsContainer) {
    closeSearchBtn.addEventListener('click', () => {
        searchModal.classList.remove('active');
        searchInputField.value = "";
        searchResultsContainer.innerHTML = "";
    });
}

window.addEventListener('click', (e) => {
    if (searchModal && e.target === searchModal) {
        searchModal.classList.remove('active');
        if (searchInputField) searchInputField.value = "";
        if (searchResultsContainer) searchResultsContainer.innerHTML = "";
    }
});

function performLiveSearch() {
    if (!searchInputField || !searchResultsContainer) return;
    const query = searchInputField.value.toLowerCase().trim();

    if (query === "") {
        searchResultsContainer.innerHTML = "";
        return;
    }

    searchResultsContainer.innerHTML = `
        <div class="search-loading">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

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

if (searchInputField) {
    searchInputField.addEventListener('input', performLiveSearch);
}

// --- Scroll to Top Button Logic ---
document.addEventListener("DOMContentLoaded", function() {
    const toTopBtn = document.getElementById('toTopBtn');
    const footer = document.querySelector('.site-footer');

    if (toTopBtn && footer) {
        window.addEventListener('scroll', function() {
            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (footerRect.top <= windowHeight - 80 && footerRect.bottom >= windowHeight / 4) {
                toTopBtn.classList.add('show');
            } else {
                toTopBtn.classList.remove('show');
            }
        });

        toTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// --- Catalog Redirection Logic ---
function redirectToCatalog() {
    if (!searchInputField) return;
    const query = searchInputField.value.trim();

    if (query !== "") {
        window.location.href = `shop-search.html?search=${encodeURIComponent(query)}`;
    }
}

if (searchSubmitBtn) {
    searchSubmitBtn.addEventListener('click', redirectToCatalog);
}

if (searchInputField) {
    searchInputField.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            redirectToCatalog();
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const phoneInputField = document.querySelector("#phoneNum");
    if (phoneInputField) {
        window.intlTelInput(phoneInputField, {
            initialCountry: "ps",
            geoIpLookup: function(callback) {
                fetch("https://ipapi.co/json")
                    .then(res => res.json())
                    .then(data => callback(data.country_code))
                    .catch(() => callback("pk")); // Default to Pakistan agar IP fetch na ho
            },
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
        });
    }
});