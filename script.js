/* =========================================================
   MD. MAHDI HASAN RAHAT
   PORTFOLIO JAVASCRIPT
   ========================================================= */


/* ================= ELEMENTS ================= */

const navbar = document.getElementById("navbar");

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

const themeToggle = document.getElementById("themeToggle");

const backToTop = document.getElementById("backToTop");

const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section[id]");

const currentYear = document.getElementById("currentYear");


/* ================= CURRENT YEAR ================= */

currentYear.textContent = new Date().getFullYear();


/* ================= MOBILE MENU ================= */

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ================= NAVBAR SCROLL ================= */

function handleScroll() {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleScroll);

handleScroll();


/* ================= ACTIVE NAVIGATION ================= */

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* ================= THEME ================= */

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    updateThemeIcon();

}


function updateThemeIcon() {

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-theme")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const theme =
        document.body.classList.contains("light-theme")
            ? "light"
            : "dark";

    localStorage.setItem(
        "portfolio-theme",
        theme
    );

    updateThemeIcon();

});


/* ================= BACK TO TOP ================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".interest-card, .project-card, .skill-item, .timeline-item, .publication-card, .contact-card, .research-feature"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* ================= SKILL BAR ANIMATION ================= */

const skillBars = document.querySelectorAll(
    ".skill-bar span"
);


skillBars.forEach(bar => {

    const width = bar.style.width;

    bar.style.width = "0";

    const barObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        bar.style.transition =
                            "width 1.2s ease";

                        bar.style.width = width;

                    }, 150);

                    barObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.5
        }

    );

    barObserver.observe(bar);

});


/* ================= ESC KEY ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* ================= IMAGE FALLBACK ================= */

const profileImage =
    document.querySelector(".profile-image");

if (profileImage) {

    profileImage.addEventListener("error", () => {

        profileImage.style.display = "none";

        const placeholder =
            document.querySelector(
                ".profile-placeholder"
            );

        if (placeholder) {

            placeholder.style.display = "flex";

        }

    });

}
