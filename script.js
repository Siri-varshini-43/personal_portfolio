document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for all navbar links except Resume
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href").substring(1); // Remove '#'

            if (targetId === "resume") {
                return; // Do nothing, let the browser handle the download
            } else {
                event.preventDefault();
                document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Smooth scrolling for "Contact Me" button
    document.querySelector(".contact").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    });
});
