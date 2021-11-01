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

function setDefaultValue($counterState) {
    $counterState.textContent = $counterState.dataset.start
}

function reset($state) {
    setDefaultValue($state)
}

function increment($state, $btn) {
    const increment = $btn.dataset.increment
    let content = $state.textContent
    content = parseInt(content) + parseInt(increment)
    $state.textContent = content
}

function decrement($state, $btn) {
    const decrement = $btn.dataset.decrement
    let content = $state.textContent
    content = parseInt(content) - parseInt(decrement)
    $state.textContent = content
}

function start($state, $btn) {
    interval = setInterval(() => {
        increment($state)
    }, 1000)
    $startBtn = $btn.parentElement.querySelector('button[data-operation="stop"]')
    $startBtn.disabled = false
    $btn.disabled = true


}

function stop($state, $btn) {
    $startBtn = $btn.parentElement.querySelector('button[data-operation="start"]')
    $startBtn.disabled = false
    $btn.disabled = true
    clearInterval(startInterval)
}