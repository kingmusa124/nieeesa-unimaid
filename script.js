// Wait for the webpage to fully load
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Toggle mobile menu open/close when hamburger is tapped
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            // Change icon between ☰ and ✕ when open/closed
            hamburger.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
        });
    }
});