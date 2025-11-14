// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form demo (replace with backend later)
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message was sent! (Demo only)");
    this.reset();
});
