const lengthConverter = document.querySelector('#length-converter')
const lengthInputs = lengthConverter.querySelectorAll('input')

lengthInputs.forEach(input => {
    input.addEventListener('input', e => {
        calculateLength(e)
    })
})

function calculateLength(e) {
    const unit = e.target.dataset.unit
    const value = e.target.value

    switch (unit) {
        case 'kilometer':
            toMeter(unit, value)
            toCentimerer(unit, value)
            toMilimeter(unit, value)
            break;
        case 'meter':
            toKilometer(unit, value)
            toCentimerer(unit, value)
            toMilimeter(unit, value)
            break;
        case 'centimeter':
            toKilometer(unit, value)
            toMeter(unit, value)
            toMilimeter(unit, value)
            break;
        case 'milimeter':
            toKilometer(unit, value)
            toMeter(unit, value)
            toCentimerer(unit, value)
            break;
        default:
            break;
    }
}


function toKilometer(unit, value) {
    const kmInput = Array.from(lengthInputs).filter((e) => e.dataset.unit == 'kilometer')[0]

    if (unit == 'meter') {
        kmInput.value = value / 1000
    } else if (unit == 'centimeter') {
        kmInput.value = value / 10000
    } else if (unit == 'milimeter') {
        kmInput.value = value / 100000
    }
}

function toMeter(unit, value) {
    const mInput = Array.from(lengthInputs).filter((e) => e.dataset.unit == 'meter')[0]
    if (unit == 'kilometer') {
        mInput.value = value * 1000
    } else if (unit == 'centimeter') {
        mInput.value = value / 100
    } else if (unit == 'milimeter') {
        mInput.value = value / 1000
    }
}

function toCentimerer(unit, value) {
    const cmInput = Array.from(lengthInputs).filter((e) => e.dataset.unit == 'centimeter')[0]

    if (unit == 'kilometer') {
        cmInput.value = value * 100000
    } else if (unit == 'meter') {
        cmInput.value = value * 100
    } else {
        cmInput.value = value / 100
    }
}

function toMilimeter(unit, value) {
    const mmInput = Array.from(lengthInputs).filter((e) => e.dataset.unit == 'milimeter')[0]
    if (unit == 'kilometer') {
        mmInput.value = value * 100000
    } else if (unit == 'meter') {
        mmInput.value = value * 10000
    } else if (unit == 'centimeter') {
        mmInput.value = value * 1000
    }
}