/**
 * Variables that contains $ sign at start are HTML elements
 */

const $alertContainer = document.querySelector('.alert-container')
const $buttons = document.querySelectorAll('.alert-button')

if ($alertContainer) {
    $alertContainer.addEventListener('click', (e) => {
        e.stopPropagation()
        if(e.target.classList.contains('alert-container')){
            close()
        }
    })
    if ($buttons) {
        $buttons.forEach($button => {
            $button.addEventListener('click', (e) => {
                handleConfirmation($button)
            })
        })
    }
}

/**
 * @param {HTMLButtonElement} $button
 * 
 * @return {void}
 */
function handleConfirmation($button) {
    const operation = $button.dataset.operation
    if (typeof window[operation] === "function") {
        if ($button.hasAttribute('data-url')) {
            const url = $button.dataset.url
            const $target = [...$buttons].filter($button => $button.hasAttribute('data-operation') && $button.dataset.operation == 'accept')[0]
            if ($target) {
                $target.setAttribute('data-target', $button.dataset.source)
                $target.setAttribute('data-goto', url)
            } else {
                console.error('No target specified')
            }
        }
        window[operation]($button)
    }
}

/**
 * @param {HTMLButtonElement} $button
 * 
 * @return {void}
 */
function close($button = null) {
    $alertContainer.classList.remove('active')
}

/**
 * @param {HTMLButtonElement} $button
 * 
 * @return {void}
 */
function confirmation($button) {
    $alertContainer.classList.add('active')
}

/**
 * @param {HTMLButtonElement} $button
 * 
 * @return {void}
 */
function accept($button) {
    if ($button.hasAttribute('data-goto')) {
        close($button)
        // console.log($button.dataset.goto)
        window.location.href = $button.dataset.goto
    }
}