document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".kelompok-btn");
    const backgroundImages = document.querySelectorAll(".background-image");
    const testimonials = document.querySelectorAll(".testimonial");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const kelompok = this.getAttribute("data-kelompok").toLowerCase();

            // Update background images
            backgroundImages.forEach((img) => {
                const imgKelompok = img.getAttribute("data-kelompok").toLowerCase();
                if (kelompok === "all" || imgKelompok === kelompok) {
                    img.style.display = "block";
                    img.classList.add("active");
                } else {
                    img.style.display = "none";
                    img.classList.remove("active");
                }
            });

            // Update testimonials display
            testimonials.forEach((testimonial) => {
                const testimonialKelompok = testimonial.getAttribute("data-kelompok").toLowerCase();
                if (kelompok === "all" || testimonialKelompok === kelompok) {
                    testimonial.style.display = "block";
                } else {
                    testimonial.style.display = "none";
                }
            });
        });
    });
});
