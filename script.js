const inputNum = document.getElementById('input-num')
const inputBtn = document.getElementById('input-btn')

const meterFeet = document.getElementById('meter-feet')
const litersGallons = document.getElementById('liters-gallons')
const kilosPounds = document.getElementById('kilos-pounds')

function convertToLength(value) {
    let feet = value * 3.28084
    let meters = value / 3.28084

    return [feet, meters]
}

function convertToVolume(value) {
    let gallons = value * 0.264172
    let liters = value * 3.78541

    return [gallons, liters]
}

function convertToMass(value) {
    let pounds = value * 2.20462
    let kilos = value / 2.20462

    return [pounds, kilos]
}

function renderConversion(element, inputValue, value1, value2, unit1, unit2) {
    element.textContent = `${inputValue} ${unit1} = ${value1.toFixed(3)} ${unit2} | ${inputValue} ${unit2} = ${value2.toFixed(3)} ${unit1}`
}

inputBtn.addEventListener('click', function() {
    const inputValue = inputNum.value
    if(!inputValue) {
        alert("Add a number")
        return
    }

    const lengthValue = convertToLength(inputValue)
    renderConversion(meterFeet, inputValue, lengthValue[0], lengthValue[1], 'meters', 'feet')

    const volumeValue = convertToVolume(inputValue)
    renderConversion(litersGallons, inputValue, volumeValue[0], volumeValue[1], 'liters', 'gallons')

    const massValue = convertToMass(inputValue)
    renderConversion(kilosPounds, inputValue, massValue[0], massValue[1], 'kilos', 'pounds')

    inputNum.value = ""
})