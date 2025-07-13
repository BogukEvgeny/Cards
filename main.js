function slidePlugin(activeSlide = null) {
    const slides = document.querySelectorAll('.slide');

    //select random slide
    const initialActiveSlide = activeSlide !== null
        ? activeSlide
        : Math.floor(Math.random() * slides.length);

    slides[initialActiveSlide].classList.add('active');

    //add when you click on slide
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClass();
            slide.classList.add('active');
        })
    }

    //when you click at different clide previous slide becomes unactive
    function clearActiveClass() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }
}

slidePlugin();