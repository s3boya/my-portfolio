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

};


/* =========================================================
   BUDGETBASICS — TESTIMONIAL CAROUSEL
   10 TESTIMONIALS / 10 SECOND CYCLE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const card = document.querySelector(".bb-testimonial-card");
    const avatar = document.querySelector(".bb-avatar");
    const studentName = document.querySelector(".bb-student-info strong");
    const studentRole = document.querySelector(".bb-student-info span");
    const quote = document.querySelector(".bb-quote");
    const progressBar = document.querySelector(".bb-progress-bar");
    const currentCounter = document.querySelector(".bb-current");

    if (
        !card ||
        !avatar ||
        !studentName ||
        !studentRole ||
        !quote ||
        !progressBar
    ) {
        return;
    }


    /* =====================================================
       TESTIMONIALS
    ===================================================== */

    const testimonials = [

        {
            name: "Ayaan",
            role: "Web Development Learner",
            quote: "BudgetBasics made tracking expenses and understanding financial fundamentals so simple and practical.",
            initial: "A"
        },

        {
            name: "Sarah",
            role: "Computer Science Student",
            quote: "I finally understood where my money was going and how small spending habits can make a difference.",
            initial: "S"
        },

        {
            name: "Hamza",
            role: "College Student",
            quote: "The lessons are straightforward and actually useful. Budgeting doesn't feel confusing anymore.",
            initial: "H"
        },

        {
            name: "Maya",
            role: "Business Student",
            quote: "BudgetBasics helped me organize my expenses and become much more aware of my everyday spending.",
            initial: "M"
        },

        {
            name: "Daniel",
            role: "University Student",
            quote: "Everything is explained in a way that makes financial concepts much easier to understand.",
            initial: "D"
        },

        {
            name: "Zoya",
            role: "Design Student",
            quote: "I liked how practical everything was. I could immediately apply what I learned to my own budget.",
            initial: "Z"
        },

        {
            name: "Ali",
            role: "Software Engineering Student",
            quote: "The simple explanations helped me understand budgeting without feeling overwhelmed by financial terms.",
            initial: "A"
        },

        {
            name: "Emma",
            role: "College Learner",
            quote: "BudgetBasics gave me a much clearer idea of how to manage my money and plan my expenses.",
            initial: "E"
        },

        {
            name: "Usman",
            role: "Student & Freelancer",
            quote: "Learning how to separate needs from wants completely changed the way I look at my spending.",
            initial: "U"
        },

        {
            name: "Noor",
            role: "Finance Learner",
            quote: "It's simple, practical, and easy to follow. I actually enjoy learning about money now.",
            initial: "N"
        }

    ];


    /* =====================================================
       SETTINGS
    ===================================================== */

    const SLIDE_DURATION = 10000;
    const FADE_DURATION = 450;

    let currentIndex = 0;

    let timer = null;

    let isPaused = false;

    let startTime = 0;
    let elapsedTime = 0;


    /* =====================================================
       UPDATE TESTIMONIAL
    ===================================================== */

    function updateTestimonial(index) {

        const item = testimonials[index];

        avatar.textContent = item.initial;

        studentName.textContent = item.name;

        studentRole.textContent = item.role;

        quote.textContent = `“${item.quote}”`;

        if (currentCounter) {
            currentCounter.textContent =
                String(index + 1).padStart(2, "0");
        }
    }


    /* =====================================================
       GET SLIDER DISTANCE
       
       Slider = 10% width.
       It travels from 0 → 90%.
    ===================================================== */

    function getTravelDistance() {

        const trackWidth =
            progressBar.parentElement.offsetWidth;

        const sliderWidth =
            progressBar.offsetWidth;

        return trackWidth - sliderWidth;
    }


    /* =====================================================
       START SLIDER
    ===================================================== */

    function startSlider(remaining = SLIDE_DURATION) {

        const distance = getTravelDistance();

        const progress =
            elapsedTime / SLIDE_DURATION;

        const currentPosition =
            distance * progress;


        progressBar.style.transition = "none";

        progressBar.style.transform =
            `translateX(${currentPosition}px)`;


        /* Force browser reflow */

        progressBar.offsetHeight;


        if (!isPaused) {

            const remainingDistance =
                distance - currentPosition;

            const speed =
                remainingDistance / remaining;


            progressBar.style.transition =
                `transform ${remaining}ms linear`;

            progressBar.style.transform =
                `translateX(${distance}px)`;


            startTime =
                performance.now() - elapsedTime;


            timer = setTimeout(() => {

                if (!isPaused) {
                    nextTestimonial();
                }

            }, remaining);
        }
    }


    /* =====================================================
       PAUSE
       
       Freezes at EXACT current position.
    ===================================================== */

    function pauseSlider() {

        if (isPaused) return;

        isPaused = true;

        clearTimeout(timer);


        const now =
            performance.now();

        elapsedTime =
            Math.min(
                now - startTime,
                SLIDE_DURATION
            );


        const distance =
            getTravelDistance();

        const progress =
            elapsedTime / SLIDE_DURATION;

        const currentPosition =
            distance * progress;


        progressBar.style.transition = "none";

        progressBar.style.transform =
            `translateX(${currentPosition}px)`;
    }


    /* =====================================================
       RESUME
    ===================================================== */

    function resumeSlider() {

        if (!isPaused) return;

        isPaused = false;


        const remaining =
            Math.max(
                SLIDE_DURATION - elapsedTime,
                0
            );


        startSlider(remaining);
    }


    /* =====================================================
       NEXT TESTIMONIAL
    ===================================================== */

    function nextTestimonial() {

        clearTimeout(timer);

        isPaused = false;

        elapsedTime = 0;


        /* -----------------------------
           LEAVE
        ----------------------------- */

        card.classList.remove("is-visible");

        card.classList.add("is-leaving");


        setTimeout(() => {

            currentIndex++;

            if (
                currentIndex >=
                testimonials.length
            ) {
                currentIndex = 0;
            }


            /* -----------------------------
               UPDATE CONTENT
            ----------------------------- */

            updateTestimonial(currentIndex);


            /* -----------------------------
               RESET CARD
            ----------------------------- */

            card.classList.remove("is-leaving");

            card.classList.add("is-entering");


            /* -----------------------------
               RESET SLIDER
            ----------------------------- */

            progressBar.style.transition = "none";

            progressBar.style.transform =
                "translateX(0)";


            /* Force reflow */

            progressBar.offsetHeight;


            /* -----------------------------
               ENTER
            ----------------------------- */

            requestAnimationFrame(() => {

                card.classList.remove("is-entering");

                card.classList.add("is-visible");

            });


            /* -----------------------------
               NEW 10 SECOND CYCLE
            ----------------------------- */

            startTime =
                performance.now();

            elapsedTime = 0;

            startSlider(SLIDE_DURATION);


        }, FADE_DURATION);
    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    updateTestimonial(currentIndex);

    card.classList.add("is-visible");

    progressBar.style.transition = "none";

    progressBar.style.transform =
        "translateX(0)";


    requestAnimationFrame(() => {

        startTime =
            performance.now();

        elapsedTime = 0;

        startSlider(SLIDE_DURATION);

    });


    /* =====================================================
       HOVER PAUSE
    ===================================================== */

    card.addEventListener("mouseenter", () => {

        pauseSlider();

    });


    /* =====================================================
       HOVER RESUME
    ===================================================== */

    card.addEventListener("mouseleave", () => {

        resumeSlider();

    });

});


