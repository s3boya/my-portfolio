const mobileMenu = document.getElementById('mobileMenu');
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const closeBtn = document.getElementById('closeBtn');
const sidebarLinks = document.querySelectorAll('.sidebar-links a');

// Open Sidebar
function openSidebar() {
    sidebarMenu.classList.add('active');
    sidebarOverlay.classList.add('active');
}

// Close Sidebar
function closeSidebar() {
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
}

mobileMenu.onclick = openSidebar;
closeBtn.onclick = closeSidebar;
sidebarOverlay.onclick = closeSidebar;

// Close sidebar automatically when a link inside is clicked
sidebarLinks.forEach(link => {
    link.onclick = closeSidebar;
});


/* =========================================================
   VIDEO PLAY / PAUSE TOGGLE
========================================================= */

const budgetVideo = document.getElementById("budgetVideo");
const videoToggle = document.getElementById("videoToggle");

if (budgetVideo && videoToggle) {

    videoToggle.addEventListener("click", () => {

        if (budgetVideo.paused) {

            budgetVideo.play();

            videoToggle.classList.remove("paused");

            videoToggle.setAttribute(
                "aria-label",
                "Pause video"
            );

        } else {

            budgetVideo.pause();

            videoToggle.classList.add("paused");

            videoToggle.setAttribute(
                "aria-label",
                "Play video"
            );

        }

    });

}