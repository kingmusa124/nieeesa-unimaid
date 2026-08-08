console.log("%cBuilt with 💻 and ⚡ by Musa Gabriel Gadzama - NIEEESA UNIMAID", "color: #002147; font-size: 14px; font-weight: bold; background: #f4f7f9; padding: 10px; border-radius: 5px; border: 1px solid #002147;");
//
//====================================================================
  // NIEEESA UNIMAID - OFFICIAL STUDENT PORTAL
  // System Architecture & Frontend Development by Musa Gabriel Gadzama
  // Built for the Department of Electrical and Electronics Engineering
  // Session: 2025/2026
//==================================================================== 
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