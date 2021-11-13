const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.display')
const buttons = calculator.querySelectorAll('.calculator-btn')

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const value = e.target.textContent
        switch (value) {
            case 'C':
                display.innerText = ''
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1)
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch (error) {
                    display.innerText = 'Error!'
                    console.error(error)
                }
                break;
            default:
                display.innerText += value
                break;
        }
    })
})