/**
 * Variables that contains $ sign at start are HTML elements
 */

const $counters = document.querySelectorAll('.counter')
let startInterval;
$counters.forEach($counter => {
    const $counterState = $counter.querySelector('.counter-state')
    setDefaultValue($counterState)
    const $counterBtns = $counter.querySelectorAll('button')
    $counterBtns.forEach($btn => {
        const operation = $btn.dataset.operation
        $btn.addEventListener('click', (e) => {
            e.preventDefault()
            if (typeof window[operation] === "function") {
                window[operation]($counterState, $btn)
            }
        })
    })
})


/**
 * Set default start value
 * 
 * @param {HTMLElement} $counterState
 * 
 * @return {void}
 */
function setDefaultValue($counterState) {
    $counterState.textContent = $counterState.dataset.start
}

/**
 * Reset default counter value
 * 
 * @param {HTMLElement} $state
 * 
 * @return {void}
 */
function reset($state) {
    setDefaultValue($state)
}

/**
 * Increment counter value
 * 
 * @param {HTMLElement} $state
 * @param {HTMLButtonElement} $btn
 * 
 * @return {void}
 */
function increment($state, $btn) {
    const increment = $btn.hasAttribute('data-increment') ? $btn.dataset.increment : 1
    let content = $state.textContent
    content = parseInt(content) + parseInt(increment)
    $state.textContent = content
}

/**
 * Decrement counter value
 * 
 * @param {HTMLElement} $state
 * @param {HTMLButtonElement} $btn
 * 
 * @return {void}
 */
function decrement($state, $btn) {
    const decrement = $btn.dataset.decrement
    let content = $state.textContent
    content = parseInt(content) - parseInt(decrement)
    $state.textContent = content
}

/**
 * Start counter
 * 
 * @param {HTMLElement} $state
 * @param {HTMLButtonElement} $btn
 * 
 * @return {void}
 */
function start($state, $btn) {
    startInterval = setInterval(() => {
        increment($state, $btn)
    }, 1000)
    $startBtn = $btn.parentElement.querySelector('button[data-operation="stop"]')
    $startBtn.disabled = false
    $btn.disabled = true


}

/**
 * Stop counter
 * 
 * @param {HTMLElement} $state
 * @param {HTMLButtonElement} $btn
 * 
 * @return {void}
 */
function stop($state, $btn) {
    $startBtn = $btn.parentElement.querySelector('button[data-operation="start"]')
    $startBtn.disabled = false
    $btn.disabled = true
    clearInterval(startInterval)
}