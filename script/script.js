// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Responsifkan navigasi
    const navToggle = document.querySelector(".nav-toggle");
    const navList = document.querySelector(".nav ul");

    if (navToggle && navList) {
        navToggle.addEventListener("click", function () {
            navList.classList.toggle("show");
        });
    }

    // Efek hover pada produk
    const products = document.querySelectorAll(".product");

    products.forEach((product) => {
        product.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
        });

        product.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});
