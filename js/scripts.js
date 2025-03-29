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

            // Sembunyikan semua elemen dengan class "content"
            document.querySelectorAll(".content").forEach(el => {
                setTimeout(() => el.classList.remove("show"), 200);
            });

            // Tampilkan elemen yang dipilih
            if (contentElement) {
                setTimeout(() => contentElement.classList.add("show"), 200);
            }
        }
    });
});
