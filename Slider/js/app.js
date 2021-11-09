const slider = document.querySelector('.slider-container')
const slides = slider.querySelectorAll('.img-slide')
const sliderNavBtns = slider.querySelectorAll('.slider__navigation-btn')
let step = 0;

sliderNavBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()

        /**
         * Go to next slide
         */
        if (btn.dataset.slideto == 'right') {
            step++
            if (step >= slides.length) {
                step = 0
            }
            removeAllActives(slides)
            slides[step].classList.add('active')
        }

        /**
         * Go to previous slide
         */
        if (btn.dataset.slideto == 'left') {
            step--
            if (step < 0) {
                step = slides.length - 1
            }
            removeAllActives(slides)
            slides[step].classList.add('active')
        }

    })
})
/**
 * Autoplay
 */
setInterval(() => {
    step++
    if (step >= slides.length) {
        step = 0
    }
    removeAllActives(slides)
    slides[step].classList.add('active')
}, 4000)


/**
 * Remove active class from all images
 * @param {HTMLImageElement} slides
 * 
 * @return void
 */
function removeAllActives(slides) {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}