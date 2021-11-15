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

    /**
     * For performance optimization update only if the value changes
     */
    if (hoursElt.textContent != currentTime().hour) {
        hoursElt.textContent = addZero(currentTime().hour)
    }
    
    if (minutesElt.textContent != currentTime().minute) {
        minutesElt.textContent = addZero(currentTime().minute)
    }
    
    if (secondsElt.textContent != currentTime().second) {
        secondsElt.textContent = addZero(currentTime().second)
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
 * @return {Number} str
 */
function addZero(str) {
    str = Number.parseInt(str)
    return str < 10 ? '0' + str : str
}

window.addEventListener('DOMContentLoaded', () => {
    digitalClock()
    analogClock()
    setInterval(() => {
        digitalClock()
        analogClock()
    }, 1000)
})