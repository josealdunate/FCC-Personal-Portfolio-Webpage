const nav = document.getElementById("navbar");
const sectionWelcome = document.getElementById("welcome-section");
const navFlexDiv = document.querySelector("nav > div");
const navLogo = document.querySelector("nav > div > h2");
const navLinks = document.getElementById("navLinks");
const navIcon = document.getElementById("navIconDiv");
const listItem = document.getElementById("workLi");


// Nav Intersection Observer
const sectionWelcomeOptions = {
    rootMargin: "-30px 0px 0px 0px"
 };
const sectionWelcomeObserver = new IntersectionObserver(
    function(entries, sectionWelcomeObserver) {
        entries.forEach(entry => {
            
            if (!entry.isIntersecting) {
                nav.classList.add("nav-animation--reveal");
                navLogo.style.display = "block";
                navFlexDiv.style.display = "flex";
                
                if (document.documentElement.clientWidth <= 550) {
                    navLinks.style.display = "none";
                    navIcon.style.display = "block";
                    nav.style.flexDirection = "column";
                } else {
                    nav.style.flexDirection = "row";
                }

            } else {
                nav.classList.remove("nav-animation--reveal");
                navLogo.style.display = "none";
                navFlexDiv.style.display = "none";
                if (window.innerHeight > window.innerWidth) {
                    nav.style.flexDirection = "column";
                }
                if (document.documentElement.clientWidth <= 550) {
                    navLinks.style.display = "flex";
                    navIcon.style.display = "none";
                }
            }
        });
    }, 
sectionWelcomeOptions);

// Nav elements alignment when screen resizes
const alignNavElements = () => {
    if ((window.innerHeight > window.innerWidth) && (! nav.classList.contains("nav-animation--reveal"))) {
        nav.style.flexDirection = "column";
    } else if (window.innerWidth > window.innerHeight) {
        nav.style.flexDirection = "row";
    }
};

// Nav Icon-Links toggle when screen resizes
const switchNavIcon = () => {
    if ((window.innerWidth <= 550) && (nav.classList.contains("nav-animation--reveal"))) {
        navLinks.style.display = "none";
        navIcon.style.display = "block";
        nav.style.flexDirection = "column";
    } else if ((window.innerWidth > 550) && (nav.classList.contains("nav-animation--reveal"))) {
        navLinks.style.display = "flex";
        navIcon.style.display = "none";
        nav.style.flexDirection = "row";
    }
}



function toggleNav() {
    if (navLinks.style.display === "none") {
        navLinks.style.display = "block";
        listItem.style.borderRight = "none";
    } else {
        navLinks.style.display = "none";
        listItem.style.borderRight = "1px solid var(--white)";
    }
}

function hideNav() {
    if (document.documentElement.clientWidth <= 550) {
        toggleNav();
    }
}



window.addEventListener("resize", () => {
    alignNavElements();
    switchNavIcon();    
});

sectionWelcomeObserver.observe(sectionWelcome);


// CUANDO INTERSECTA: 
//      esconder navegador
//      if orientación retrato: 
//          flex-direction column
//      else if orientacion apaisado: 
//          flex-direction row

// CUANDO NO INTERSECTA
//      mostrar navegador
//      flex-direction; row