function currentTime() {
    return {
        now: new Date(),
        get hour() { return this.now.getHours() },
        get minute() { return this.now.getMinutes() },
        get second() { return this.now.getSeconds() },
    }
}

/**
 * Update digital clock
 * 
 * @return {void}
 */
function digitalClock() {

    const digitalClock = document.querySelector('#digital-clock')
    const hoursElt = digitalClock.querySelector('#hours')
    const minutesElt = digitalClock.querySelector('#minutes')
    const secondsElt = digitalClock.querySelector('#seconds')

    updateText(hoursElt, currentTime().hour)
    updateText(minutesElt, currentTime().minute)
    updateText(secondsElt, currentTime().second)
}

/**
 * Update clock
 * 
 * @param {HTMLParagraphElement} elt
 * @param {String} currentTime
 * 
 * @return {void}
 */
function updateText(elt, currentTime) {
    /**
     * For performance optimization update only if the value changes
     */
    if (elt.textContent != currentTime) {
        elt.textContent = addZero(currentTime)
    }
}

/**
 * Analog clock
 * 
 * @return {void}
 */
function analogClock() {
    const analogClock = document.querySelector('#analog-clock')
    const hoursElt = analogClock.querySelector('.hand.hour')
    const minutesElt = analogClock.querySelector('.hand.minute')
    const secondsElt = analogClock.querySelector('.hand.second')


    const secondsRatio = currentTime().second / 60
    const minutesRatio = (secondsRatio + currentTime().minute) / 60
    const hoursRatio = (minutesRatio + currentTime().hour) / 12

    setRotation(secondsElt, secondsRatio)
    setRotation(minutesElt, minutesRatio)
    setRotation(hoursElt, hoursRatio)

}


/**
 * Update hands rotation
 * @param {HTMLDivElement} elt
 * @param {String|Number} rotationRatio
 * 
 * @return {void}
 */
function setRotation(elt, rotationRatio) {
    elt.style.setProperty('--rotate', rotationRatio * 360)
}

/**
 * Add zero for numbers smaller than 10
 * @param {String|Number} str
 * 
 * @return {String} str
 */
function addZero(str) {
    str = Number.parseInt(str)
    return str < 10 ? ('0' + str).toString() : str.toString()
}

window.addEventListener('DOMContentLoaded', () => {
    digitalClock()
    analogClock()
    setInterval(() => {
        digitalClock()
        analogClock()
    }, 1000)
})