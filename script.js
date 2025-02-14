document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            // If the link is an external page (e.g., education.html), allow normal navigation
            if (!targetId.startsWith("#")) {
                return; 
            }

            // Internal page scrolling for #id links
            const targetElement = document.getElementById(targetId.substring(1));
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Resume link behavior (open PDF in a new tab)
    const resumeLink = document.getElementById("resume-link");
    if (resumeLink) {
        resumeLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("documents/Siri_Varshini_Resume(1).pdf", "_blank");
        });
    }

    // Smooth scrolling for "Contact Me" button
    const contactButton = document.querySelector(".contact");
    const contactSection = document.getElementById("contact");

    if (contactButton && contactSection) {
        contactButton.addEventListener("click", function (event) {
            event.preventDefault();
            contactSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
