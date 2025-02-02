const navLinks = document.querySelectorAll('.nav-menu .nav-link');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
menuOpenButton?.addEventListener('click', () => {
    document.body.classList.add('show-mobile-menu');
});
menuCloseButton?.addEventListener('click', () => menuOpenButton?.click());

navLinks.forEach(link => {
    link.addEventListener('click', () => menuOpenButton.click()); 
});
//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
        0:{
            slidePerView: 1
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    }

  });

// existing JavaScript code



const gameButtons = document.querySelectorAll('.game-btn');

const sections = document.querySelectorAll('.testimonials-section');

gameButtons.forEach(button => {
    button.addEventListener('click', function() {
        const game = this.getAttribute('data-game');
        sections.forEach(section => {
            if (section.id === game) {
                section.style.display = 'block';
                section.classList.add('active-game'); // Add background class
            } else {
                section.style.display = 'none';
                section.classList.remove('active-game'); // Remove background class
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const regionButtons = document.querySelectorAll(".region-btn");
    const kelompokButtons = document.querySelectorAll(".kelompok-btn");
    const sekolahButtons = document.querySelectorAll(".sekolah-btn");
    const faksiButtons = document.querySelectorAll(".faksi-btn");
    const testimonials = document.querySelectorAll(".testimonial");

    const filterTestimonials = (attribute, value) => {
        testimonials.forEach(testimonial => {
            const testimonialValue = testimonial.getAttribute(attribute);
            if (value === "all" || testimonialValue === value) {
                testimonial.style.display = "flex"; // Pastikan tetap sesuai dengan Swiper
            } else {
                testimonial.style.display = "none";
            }
        });
    };

    regionButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedRegion = button.getAttribute("data-region");
            filterTestimonials("data-region", selectedRegion);
        });
    });

    kelompokButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedKelompok = button.getAttribute("data-kelompok");
            filterTestimonials("data-kelompok", selectedKelompok);
        });
    });

    sekolahButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedSekolah = button.getAttribute("data-sekolah");
            filterTestimonials("data-sekolah", selectedSekolah);
        });
    });

    faksiButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedFaksi = button.getAttribute("data-faksi");
            filterTestimonials("data-faksi", selectedFaksi);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const regionButtons = document.querySelectorAll(".region-btn");
    const kelompokButtons = document.querySelectorAll(".kelompok-btn");
    const sekolahButtons = document.querySelectorAll(".sekolah-btn");
    const faksiButtons = document.querySelectorAll(".faksi-btn");
    const testimonials = document.querySelectorAll(".testimonial");

    const filterTestimonials = (attribute, value) => {
        testimonials.forEach(testimonial => {
            const testimonialValue = testimonial.getAttribute(attribute);
            if (value === "all" || testimonialValue === value) {
                testimonial.style.display = "flex"; // Pastikan tetap sesuai dengan Swiper
            } else {
                testimonial.style.display = "none";
            }
        });
    };

    regionButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedRegion = button.getAttribute("data-region");
            filterTestimonials("data-region", selectedRegion);
        });
    });

    kelompokButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedKelompok = button.getAttribute("data-kelompok");
            filterTestimonials("data-kelompok", selectedKelompok);
        });
    });

    sekolahButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedSekolah = button.getAttribute("data-sekolah");
            filterTestimonials("data-sekolah", selectedSekolah);
        });
    });

    faksiButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedFaksi = button.getAttribute("data-faksi");
            filterTestimonials("data-faksi", selectedFaksi);
        });
    });
});


// existing JavaScript code




