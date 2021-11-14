/**
 * Update digital clock
 * 
 * @return {void}
 */
function updateDigitalClock() {
    const digitalClock = document.querySelector('#digital-clock')
    const hoursElt = digitalClock.querySelector('#hours')
    const minutesElt = digitalClock.querySelector('#minutes')
    const secondsElt = digitalClock.querySelector('#seconds')

    const today = new Date()
    const currentHour = today.getHours()
    const currentMinute = today.getMinutes()
    const currentSecond = today.getSeconds()

    if (hoursElt.textContent != currentHour) {
        hoursElt.textContent = addZero(currentHour)
    }

    if (minutesElt.textContent != currentMinute) {
        minutesElt.textContent = addZero(currentMinute)
    }

    if (secondsElt.textContent != currentSecond) {
        secondsElt.textContent = addZero(currentSecond)
    }
}

updateDigitalClock()

setInterval(() => updateDigitalClock(), 1000)


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