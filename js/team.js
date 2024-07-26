// let currentIndex = 0;
// const members = document.querySelectorAll('.team-member');
// const slider = document.querySelector('.team-slider');

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % (members.length / 4); // 4 members per slide
//     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// // Automatically move to the next slide every 3 seconds
// setInterval(nextSlide, 5000);
// scripts.js



// let currentIndex = 0;
// const members = document.querySelectorAll('.team-member');
// const slider = document.querySelector('.team-slider');

// function nextSlide() {
//     const totalColumns = getComputedStyle(slider).gridTemplateColumns.split(' ').length;
//     const slidesToShow = Math.ceil(members.length / totalColumns);

    
//     currentIndex = (currentIndex + 1) % slidesToShow;
//     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// // Automatically move to the next slide every 5 seconds
// setInterval(nextSlide, 5000);

// // Function to adjust slide on window resize
// window.addEventListener('resize', () => {
//     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// });


// scripts.js

// let currentIndex = 0;
// const members = document.querySelectorAll('.team-member');
// const slider = document.querySelector('.team-slider');

// function nextSlide() {
//     const isMobile = window.innerWidth < 768;
    
//     if (!isMobile) {
//         const totalSlides = Math.ceil(members.length / 4);
//         currentIndex = (currentIndex + 1) % totalSlides;
//         slider.style.transform = `translateX(-${currentIndex * 100}%)`;
//     } else {
//         slider.style.transform = `translateX(0)`; // Reset transform for mobile view
//     }
// }

// // Automatically move to the next slide every 5 seconds
// setInterval(nextSlide, 5000);

// // Function to adjust slide on window resize
// window.addEventListener('resize', () => {
//     currentIndex = 0; // Reset to first slide
//     slider.style.transform = `translateX(0)`;
//     nextSlide(); // Re-evaluate the slide position on resize
// });

// // Initial setup
// nextSlide();

const slider = document.querySelector('.team-slider');
const members = document.querySelectorAll('.team-member');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;

function showNextSlide() {
    if (currentIndex < members.length - 4) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    slider.style.transform = `translateX(-${currentIndex * 100 / 4}%)`;
}

function showPrevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = members.length - 4;
    }
    slider.style.transform = `translateX(-${currentIndex * 100 / 4}%)`;
}

nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

setInterval(showNextSlide, 3000);