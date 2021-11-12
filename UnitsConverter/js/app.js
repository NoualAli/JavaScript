const unitConverters = document.querySelectorAll('.unit-converter')
const inputElts = document.querySelectorAll('.unit-input')
if (unitConverters.length) {
    unitConverters.forEach(unitConverter => {
        const converter = getConverterFuncName(unitConverter.dataset.converter)
        inputElts.forEach(input => {
            input.addEventListener('input', e => {
                window[converter](e)
            })
        })

    })
}

function getConverterFuncName(converter) {
    return "calculate" + converter.charAt(0).toUpperCase() + converter.slice(1)
}


/**
 * Length Calculator
 * 
 * @param {Event} e
 * 
 * @return void
 */
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


/**
 * Convert to kilometer
 * 
 * @param {String} unit
 * @param {Number} value
 * 
 * @return void
 */
function toKilometer(unit, value) {
    const kmInput = Array.from(inputElts).filter((e) => e.dataset.unit == 'kilometer')[0]

    if (unit == 'meter') {
        kmInput.value = value / 1000
    } else if (unit == 'centimeter') {
        kmInput.value = value / 10000
    } else if (unit == 'milimeter') {
        kmInput.value = value / 100000
    }
}

/**
 * Convert to Meter
 * 
 * @param {String} unit
 * @param {Number} value
 * 
 * @return void
 */
function toMeter(unit, value) {
    const mInput = Array.from(inputElts).filter((e) => e.dataset.unit == 'meter')[0]
    if (unit == 'kilometer') {
        mInput.value = value * 1000
    } else if (unit == 'centimeter') {
        mInput.value = value / 100
    } else if (unit == 'milimeter') {
        mInput.value = value / 1000
    }
}

/**
 * Convert to Centimeter
 * 
 * @param {String} unit
 * @param {Number} value
 * 
 * @return void
 */
function toCentimerer(unit, value) {
    const cmInput = Array.from(inputElts).filter((e) => e.dataset.unit == 'centimeter')[0]

    if (unit == 'kilometer') {
        cmInput.value = value * 100000
    } else if (unit == 'meter') {
        cmInput.value = value * 100
    } else {
        cmInput.value = value / 100
    }
}

/**
 * Convert to Milimeter
 * 
 * @param {String} unit
 * @param {Number} value
 * 
 * @return void
 */
function toMilimeter(unit, value) {
    const mmInput = Array.from(inputElts).filter((e) => e.dataset.unit == 'milimeter')[0]
    if (unit == 'kilometer') {
        mmInput.value = value * 100000
    } else if (unit == 'meter') {
        mmInput.value = value * 10000
    } else if (unit == 'centimeter') {
        mmInput.value = value * 1000
    }
}