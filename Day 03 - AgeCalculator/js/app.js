/**
* Variables that contains $ sign at start are HTML elements
*/

const $ageCalculator = document.querySelector('#age-calculator')
const $birthday = $ageCalculator.querySelector('#birthday')
const $age = $ageCalculator.querySelector('#age')

$ageCalculator.addEventListener('submit', (e) => {
    e.preventDefault()
    calculate()
})


/**
 * Calculate age
 * 
 * @return {void}
 */
function calculate() {
    const birthday = new Date($birthday.value)
    const difference = Date.now() - birthday.getTime()
    const age = new Date(difference)
    $age.value = Math.abs(age.getUTCFullYear() - 1970)
}