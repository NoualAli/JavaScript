/**
 * Variables that contains $ sign at start are HTML elements
 */

$btns = document.querySelectorAll('button')

$btns.forEach($btn => {
    $btn.addEventListener('click', (e) => {
        e.preventDefault()
        copy($btn)
    })
})

/**
 * Copy text to clipboard
 * 
 * @param {HTMLButtonElement} $btn
 * 
 * @return {void}
 */
function copy($btn) {
    const $eltToCopy = $btn.nextElementSibling
    navigator.clipboard.writeText($eltToCopy.textContent.trim())
    $btn.classList.remove('btn-primary')
    $btn.classList.add('btn-success')
    $btn.disabled = true
    $btn.innerHTML = "Text copied &#x2714;"
}