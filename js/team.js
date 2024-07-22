let currentIndex = 0;
const members = document.querySelectorAll('.team-member');
const slider = document.querySelector('.team-slider');

function nextSlide() {
    currentIndex = (currentIndex + 1) % (members.length / 4); // 4 members per slide
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 5000);
