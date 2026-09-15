document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll-to-Top Button Logic
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
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 2. Products Database
    const productsDatabase = {
        "64421": {
            category: "Couture Collection",
            title: "OBSIDIAN DRAPE",
            designer: "Designed by Shazain Ali",
            material: "Silk Organza & Satin",
            stock: "In Stock",
            id: "64421",
            images: [
                "images/ChatGPT Image Aug 29, 2026, 02_17_19 AM.png",
                "images/ChatGPT Image Sep 2, 2026, 08_15_05 PM.png",
                "images/ChatGPT Image Sep 2, 2026, 08_14_56 PM.png",
                "images/ChatGPT Image Sep 2, 2026, 08_15_12 PM.png"
            ]
        },
        "63405": {
            category: "Couture Collection",
            title: "ICY CRYSTAL",
            designer: "Designed by Maison Noir",
            material: "Embellished Tulle & Silk Satin",
            stock: "In Stock",
            id: "63405",
            images: [
                "images/ChatGPT Image Aug 29, 2026, 04_16_09 AM.png",
                "images/ChatGPT Image Sep 2, 2026, 11_00_00 PM.png",
                "images/ChatGPT Image Sep 2, 2026, 11_02_25 PM.png",
                "images/ChatGPT Image Sep 2, 2026, 11_07_08 PM.png"
            ]
        },
        "67351": {
            category: "Couture Collection",
            title: "CELESTIAL TIDE",
            designer: "Designed by Aurelia Vance",
            material: "Layered Chiffon Tulle",
            stock: "In Stock",
            id: "67351",
            images: [
                "images/pink.png",
                "images/ChatGPT Image Sep 2, 2026, 11_41_35 PM.png",
                "images/ChatGPT Image Sep 2, 2026, 11_42_30 PM.png",
                "images/ChatGPT Image Sep 2, 2026, 11_42_37 PM.png"
            ]
        },
        "66177": {
            category: "Couture Collection",
            title: "ROYAL COBALT",
            designer: "Designed by Elain Sterling",
            material: "Stretch Velvet & Sheer Tulle",
            stock: "In Stock",
            id: "66177",
            images: [
                "images/black.png",
                "images/ChatGPT Image Sep 3, 2026, 12_14_38 AM.png",
                "images/ChatGPT Image Sep 3, 2026, 12_17_28 AM.png",
                "images/ChatGPT Image Sep 3, 2026, 12_19_45 AM.png"
            ]
        },
        "54423": {
            category: "Couture Collection",
            title: "CELESTIAL BLOOM",
            designer: "Designed by Maison Élaris",
            material: "Floral Lace & Chiffon",
            stock: "Out of Stock",
            id: "54423",
            images: [
                "images/ChatGPT Image Aug 29, 2026, 05_08_15 AM.png",
                "images/ChatGPT Image Sep 3, 2026, 12_55_30 AM.png",
                "images/ChatGPT Image Sep 3, 2026, 12_46_14 AM.png",
                "images/ChatGPT Image Sep 3, 2026, 12_50_22 AM.png"
            ]
        },
        "58431": {
            category: "Couture Collection",
            title: "IVORY SERENADE",
            designer: "Designed by Valentina Sorei",
            material: "Chiffon & Mesh",
            stock: "In Stock",
            id: "58431",
            images: [
                "images/ChatGPT_Image_Aug_29__2026__07_13_54_AM-removebg-preview.png",
                "images/ChatGPT Image Sep 3, 2026, 02_59_02 AM.png",
                "images/ChatGPT Image Sep 3, 2026, 02_27_01 AM.png",
                "images/ChatGPT Image Sep 3, 2026, 02_30_18 AM.png"
            ]
        },
        "61238": {
            category: "Couture Collection",
            title: "MIDNIGHT ALLURE",
            designer: "Designed by Valerié Noir",
            material: "Sequined Mesh",
            stock: "In Stock",
            id: "61238",
            images: [
                "images/ChatGPT Image Aug 29, 2026, 05_44_54 AM.png",
                "images/ChatGPT Image Sep 3, 2026, 03_17_16 AM.png",
                "images/ChatGPT Image Sep 3, 2026, 03_18_34 AM.png",
                "images/ChatGPT Image Sep 3, 2026, 03_21_21 AM.png"
            ]
        },
        "73910": {
            category: "Couture Collection",
            title: "SILVER ECLIPSE",
            designer: "Designed by Elara Voss",
            material: "Silver Crystal Mesh",
            stock: "Out of Stock",
            id: "73910",
            images: [
                "images/ChatGPT Image Aug 29, 2026, 05_54_22 AM.png",
                "images/ChatGPT Image Sep 3, 2026, 03_41_55 AM.png",
                "images/ChatGPT Image Sep 3, 2026, 03_41_26 AM.png",
                "images/ChatGPT Image Sep 3, 2026, 03_40_58 AM.png"
            ]
        },
        "55120": {
            category: "Summer Collection",
            title: "SOLARIS BLOOM",
            designer: "Designed by Lyra Sol",
            material: "Silver Crystal Mesh",
            stock: "In Stock",
            id: "55120",
            images: [
                "images/white.png",
                "images/ChatGPT Image Sep 4, 2026, 04_47_48 AM.png",
                "images/ChatGPT Image Sep 4, 2026, 04_51_57 AM.png",
                "images/ChatGPT Image Sep 4, 2026, 04_54_13 AM.png"
            ]
        },
        "54219": {
            category: "Summer Collection",
            title: "CERULEAN BREEZE",
            designer: "Designed by Kai Thorne",
            material: "Silver Crystal Mesh",
            stock: "In Stock",
            id: "54219",
            images: [
                "images/black3.png",
                "images/ChatGPT Image Sep 4, 2026, 05_05_27 AM.png",
                "images/ChatGPT Image Sep 4, 2026, 05_08_04 AM.png",
                "images/ChatGPT Image Sep 4, 2026, 05_12_37 AM.png"
            ]
        },
        "53982": {
            category: "Summer Collection",
            title: "AMBER HORIZON",
            designer: "Designed by Elena Rostova",
            material: "Polyester-Spandex Blend",
            stock: "In Stock",
            id: "53982",
            images: [
                "images/red.png",
                "images/ChatGPT Image Sep 5, 2026, 05_34_56 AM.png",
                "images/ChatGPT Image Sep 5, 2026, 05_37_24 AM.png",
                "images/ChatGPT Image Sep 5, 2026, 05_39_41 AM.png"
            ]
        },
        "52843": {
            category: "Summer Collection",
            title: "IVORY OASIS",
            designer: "Designed by Soren Kael",
            material: "Polyester-Spandex Blend",
            stock: "In Stock",
            id: "52843",
            images: [
                "images/pink3.png",
                "images/ChatGPT Image Sep 5, 2026, 05_44_44 AM.png",
                "images/ChatGPT Image Sep 5, 2026, 05_48_19 AM.png",
                "images/ChatGPT Image Sep 4, 2026, 06_17_31 AM.png"
            ]
        },
        "53945": {
            category: "Summer Collection",
            title: "MIDNIGHT LACE",
            designer: "Designed by Élosie Marcell",
            material: "Polyester-Spandex Blend",
            stock: "In Stock",
            id: "53945",
            images: [
                "images/ChatGPT Image Aug 30, 2026, 05_52_17 PM.png",
                "images/ChatGPT Image Sep 5, 2026, 05_54_46 AM.png",
                "images/ChatGPT Image Sep 5, 2026, 05_46_20 AM.png",
                "images/ChatGPT Image Sep 5, 2026, 05_59_23 AM.png"
            ]
        }
    };

    // 3. URL se Product ID fetch karna
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id") || "64421";
    const baseProduct = productsDatabase[productId] || productsDatabase["64421"];

    let allProducts = JSON.parse(localStorage.getItem('fabulous_products')) || {};
    let currentStock = baseProduct.stock;

    if (allProducts[productId] && allProducts[productId].manualOverride) {
        currentStock = allProducts[productId].stock;
    } else {
        if (!allProducts[productId]) allProducts[productId] = {};
        allProducts[productId].stock = baseProduct.stock;
        allProducts[productId].manualOverride = false;
        localStorage.setItem('fabulous_products', JSON.stringify(allProducts));
        currentStock = baseProduct.stock;
    }

    const currentProduct = { ...baseProduct, stock: currentStock };

    // 4. Text Data inject karna
    document.getElementById("prodCategory").textContent = currentProduct.category;
    document.getElementById("prodTitle").textContent = currentProduct.title;
    document.getElementById("prodDesigner").textContent = currentProduct.designer;
    document.getElementById("prodMaterial").textContent = currentProduct.material;

    const stockElement = document.getElementById("prodStock");
    const stockDot = document.getElementById("stockDot");
    const inquireBtn = document.getElementById("inquireBtn");

    stockElement.textContent = currentProduct.stock;

    if (currentProduct.stock.toLowerCase() === "in stock") {
        stockDot.className = "stock-dot green";
        if (inquireBtn) inquireBtn.style.display = "block";
    } else {
        stockDot.className = "stock-dot red";
        if (inquireBtn) inquireBtn.style.display = "none";
    }

    document.getElementById("prodId").textContent = currentProduct.id;

    // 5. Main Image & Magnifier Zoom Logic Setup
    const mainImg = document.getElementById("mainProductImg");
    const imgZoomContainer = document.getElementById("imgZoomContainer");
    const imgZoomLens = document.getElementById("imgZoomLens");
    const thumbnailsContainer = document.getElementById("thumbnailsContainer");

    function updateMainImage(imgSrc, animate = false) {
        if (animate) {
            mainImg.classList.add("fade-anim");
            setTimeout(() => {
                mainImg.src = imgSrc;
                imgZoomLens.style.backgroundImage = `url('${imgSrc}')`;
                imgZoomLens.style.backgroundRepeat = "no-repeat";
                mainImg.classList.remove("fade-anim");
            }, 250);
        } else {
            mainImg.src = imgSrc;
            imgZoomLens.style.backgroundImage = `url('${imgSrc}')`;
            imgZoomLens.style.backgroundRepeat = "no-repeat";
        }
    }

    if (currentProduct.images && currentProduct.images.length > 0) {
        updateMainImage(currentProduct.images[0], false);

        if (thumbnailsContainer) {
            thumbnailsContainer.innerHTML = "";
            currentProduct.images.forEach((imgSrc, index) => {
                const thumb = document.createElement("div");
                thumb.className = `thumbnail-item ${index === 0 ? 'active' : ''}`;
                thumb.style.background = `url('${imgSrc}') no-repeat center center`;

                thumb.addEventListener("click", () => {
                    document.querySelectorAll('.thumbnail-item').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                    updateMainImage(imgSrc, true);
                });

                thumbnailsContainer.appendChild(thumb);
            });
        }
    }

    // --- MAGNIFIER / ZOOM LENS INTERACTION ---
    function imageZoom() {
        if (!imgZoomContainer || !imgZoomLens || !mainImg) return;

        imgZoomLens.style.display = "none";

        imgZoomContainer.addEventListener("mouseenter", () => {
            imgZoomLens.style.display = "block";
            let rect = mainImg.getBoundingClientRect();
            imgZoomLens.style.backgroundSize = `${rect.width * 2.5}px ${rect.height * 2.5}px`;
        });

        imgZoomContainer.addEventListener("mouseleave", () => {
            imgZoomLens.style.display = "none";
        });

        imgZoomContainer.addEventListener("mousemove", moveLens);
        imgZoomLens.addEventListener("mousemove", moveLens);

        function moveLens(e) {
            let pos, x, y;
            e.preventDefault();
            pos = getCursorPos(e);
            x = pos.x - (imgZoomLens.offsetWidth / 2);
            y = pos.y - (imgZoomLens.offsetHeight / 2);

            let maxW = imgZoomContainer.offsetWidth - imgZoomLens.offsetWidth;
            let maxH = imgZoomContainer.offsetHeight - imgZoomLens.offsetHeight;

            if (x > maxW) { x = maxW; }
            if (x < 0) { x = 0; }
            if (y > maxH) { y = maxH; }
            if (y < 0) { y = 0; }

            imgZoomLens.style.left = x + "px";
            imgZoomLens.style.top = y + "px";

            let bgPosX = (x / imgZoomContainer.offsetWidth) * 100;
            let bgPosY = (y / imgZoomContainer.offsetHeight) * 100;
            imgZoomLens.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
        }

        function getCursorPos(e) {
            let a, x = 0, y = 0;
            e = e || window.event;
            a = mainImg.getBoundingClientRect();
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {x : x, y : y};
        }
    }

    imageZoom();

    // 6. Size Selection Logic
    const sizeBtns = document.querySelectorAll('.size-btn');
    let selectedSize = 'M';

    sizeBtns.forEach(btn => {
        if (btn.classList.contains('active')) {
            selectedSize = btn.textContent.trim();
        }
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = btn.textContent.trim();
        });
    });

    // --- Inquire Button Click Event: saves data to localStorage, then goes to inquiry.html ---
    if (inquireBtn) {
        inquireBtn.addEventListener("click", (e) => {
            e.preventDefault();

            let currentImgSrc = "";
            if (currentProduct.images && currentProduct.images.length > 0) {
                currentImgSrc = currentProduct.images[0];
            } else if (mainImg) {
                currentImgSrc = mainImg.getAttribute('src');
            }

            const inquiryData = {
                id: currentProduct.id,
                title: currentProduct.title,
                size: selectedSize,
                img: currentImgSrc
            };

            localStorage.setItem('fabulous_current_inquiry', JSON.stringify(inquiryData));

            window.location.href = "inquiry.html?id=" + currentProduct.id;
        });
    }

    // Global stock update function with Manual Override Flag
    window.updateProductStock = function(targetId, newStockStatus) {
        let storedProducts = JSON.parse(localStorage.getItem('fabulous_products')) || {};
        if (!storedProducts[targetId]) {
            storedProducts[targetId] = {};
        }
        storedProducts[targetId].stock = newStockStatus;
        storedProducts[targetId].manualOverride = true;
        localStorage.setItem('fabulous_products', JSON.stringify(storedProducts));

        let wishlist = JSON.parse(localStorage.getItem('fabulous_wishlist')) || [];
        let updatedWishlist = wishlist.map(item => {
            if (item.id === targetId) {
                return { ...item, stock: newStockStatus };
            }
            return item;
        });
        localStorage.setItem('fabulous_wishlist', JSON.stringify(updatedWishlist));
    };

    const saveWishlistBtn = document.getElementById("saveWishlistBtn");

    function updateWishlistButtonState() {
        if (!saveWishlistBtn) return;
        let wishlist = JSON.parse(localStorage.getItem('fabulous_wishlist')) || [];
        const exists = wishlist.some(item => item.id === currentProduct.id);

        if (exists) {
            saveWishlistBtn.textContent = "REMOVE FROM WISHLIST";
            saveWishlistBtn.style.backgroundColor = "#111";
            saveWishlistBtn.style.color = "#fff";
        } else {
            saveWishlistBtn.textContent = "SAVE TO WISHLIST";
            saveWishlistBtn.style.backgroundColor = "";
            saveWishlistBtn.style.color = "";
        }
    }

    updateWishlistButtonState();

    if (saveWishlistBtn) {
        saveWishlistBtn.addEventListener("click", () => {
            let wishlist = JSON.parse(localStorage.getItem('fabulous_wishlist')) || [];
            const index = wishlist.findIndex(item => item.id === currentProduct.id);

            if (index > -1) {
                wishlist.splice(index, 1);
                localStorage.setItem('fabulous_wishlist', JSON.stringify(wishlist));
                alert(`${currentProduct.title} has been removed from your Wishlist.`);
            } else {
                wishlist.push({ ...currentProduct, image: currentProduct.images[0], size: selectedSize, stock: currentStock });
                localStorage.setItem('fabulous_wishlist', JSON.stringify(wishlist));
                alert(`${currentProduct.title} has been added to your Wishlist!`);
            }

            updateWishlistButtonState();

            if (typeof updateWishlistBadge === 'function') {
                updateWishlistBadge();
            }
        });
    }
});

// --- Announcement Slider Logic (Product Detail Page) ---
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

// --- Search & Wishlist Badge Helpers ---
function updateBadgeDisplay() {
    const badge = document.querySelector('.wishlist-badge');
    if (!badge) return;

    const wishlist = JSON.parse(localStorage.getItem('fabulous_wishlist')) || [];
    const count = wishlist.length;

    badge.textContent = count;

    if (count > 0) {
        badge.style.display = 'flex';
        badge.classList.remove('hidden');
    } else {
        badge.style.display = 'none';
        badge.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', updateBadgeDisplay);

window.addEventListener('storage', (event) => {
    if (event.key === 'fabulous_wishlist') {
        updateBadgeDisplay();
    }
});

const searchIconTrigger = document.querySelector('.nav-icon[title="Search"]');
const searchModal = document.getElementById('searchModal');
const closeSearchBtn = document.getElementById('closeSearchBtn');
const searchInputField = document.getElementById('searchInputField');
const searchSubmitBtn = document.getElementById('searchSubmitBtn');
const searchResultsContainer = document.getElementById('searchResultsContainer');

const storeProductsList = [
    { name: "New Couture Dress", category: "couture", url: "#" },
    { name: "Velvet Evening Gown", category: "gown", url: "#" },
    { name: "Summer Floral Maxi", category: "maxi", url: "#" },
    { name: "Luxury Silk Corset", category: "corset", url: "#" },
    { name: "Bridal White Suit", category: "bridal", url: "#" }
];

let searchTimeoutRef;

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

    clearTimeout(searchTimeoutRef);
    searchTimeoutRef = setTimeout(() => {
        const matchedProducts = storeProductsList.filter(product =>
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