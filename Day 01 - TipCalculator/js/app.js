/**
 * The tip is calculated using the formula
 *  tip = (total amount * service quality) / number of person
 *  tip = (tip * tip percent) / 100
 *  tip = total amount - tip
 * 
 * Show total amount and tip amount separately
 * 
 * Variables that contains $ sign at start are HTML elements
 */

const tipPercent = 5

/**
 * HTML Elements
 */
const $tipCalculator = document.querySelector('#tip-calculator')
const $serviceQuality = document.querySelector('#service-quality')
const $tipAmount = document.querySelector('#tip-amount')
const $totalAmount = document.querySelector('#total-amount')
const $billAmount = document.querySelector('#bill-amount')
const $numberOfPeople = document.querySelector('#number-of-people')



/**
 * Function that handle tip calculator
 * 
 * @return bool
 */
function handleTipCalculator() {
    $tipCalculator.addEventListener('submit', (e) => {
        e.preventDefault()
        calculate()
        return false
    })
}


/**
 * Calculate both total and tip amount
 * @return void
 */
function calculate() {
    let tip = calculateTip()
    calculateTotal(tip)
}

/**
 * Calculate total amount from bill amount and tip amount
 * 
 * @param number tip
 * 
 * @return void
 */
function calculateTotal(tip){
    let total = parseInt($billAmount.value) + parseInt(tip)
    $totalAmount.value = total.toFixed(2)
}

/**
 * calculate tip value
 * 
 * @return number
 */
function calculateTip() {
    let tip = 0
    if($serviceQuality.value >= 5){
        tip = ($billAmount.value * $serviceQuality.value) / $numberOfPeople.value;
        tip = (Math.round(tip * tipPercent) / 100);
    }
    $tipAmount.value = tip.toFixed(2)
    return tip.toFixed(2)
}

/**
 * Show service quality value range when dom is loaded and when user set new value
 * 
 * @return void
 */
function showServiceQuality() {
    document.addEventListener('DOMContentLoaded', () => {
        setServiceQualityValue()
    })
    
    $serviceQuality.addEventListener('input', () => {
        setServiceQualityValue()
    })
}

/**
 * set service quality range value
 * 
 * @return void
 */
function setServiceQualityValue() {
    const $serviceQualityValue = document.querySelector('#service-quality-value')
    $serviceQualityValue.textContent = $serviceQuality.value
}

showServiceQuality()
handleTipCalculator()