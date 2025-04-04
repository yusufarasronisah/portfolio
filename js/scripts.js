// navbar menu 
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); 
        const target = this.getAttribute("href").substring(1);
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
        document.querySelectorAll(".menu a").forEach(a => a.classList.remove("active"));
        this.classList.add("active");
        window.history.replaceState(null, "", `#${target}`);
    });
});

//portfolio filter
document.querySelectorAll(".filter-portfolio").forEach(container => {
    container.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") { 
            let targetId = event.target.getAttribute("data-target");
            let contentElement = document.getElementById(targetId);
            
            let activeElementsFirst = document.querySelectorAll(".active")
            activeElementsFirst.forEach(element => element.classList.remove("active"));

            document.querySelectorAll(".content").forEach(el => {
                setTimeout(() => el.classList.remove("show"), 200);
            });

            if (contentElement) {
                setTimeout(() => contentElement.classList.add("show"), 200);
            }
        }
    });
});


//scroll menu
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#242424"; 
        navbar.style.top = 0;
        navbar.style.height = "4rem";
        navbar.style.borderBottom = "1px solid rgba(202, 88, 0, 0.44)";
    } else {
        navbar.style.top = "1.5rem";
        navbar.style.background = "transparent";
        navbar.style.height = "2.6875rem";
        navbar.style.borderBottom = "none";
    }
});

//menu reponsive
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu-mobile");
    const icon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times"); // Icon Close
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars"); // Icon Burger
        }
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove("active");
           
            if (menu.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times"); // Icon Close
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars"); // Icon Burger
            }
        }
    });
});