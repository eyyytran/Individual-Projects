const fs = require('fs')

const testCase = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
]

const expectedResults = {
    gamma: 10110,
}

fs.readFile('./puzzleInputs/rawData/day3inputs.txt', 'utf-8', (err, data) => {
    const cleanedData = []
    const dataToArray = data.toString().split(/\r?\n/)
    dataToArray.forEach(string => cleanedData.push(string))
    try {
        fs.writeFileSync(
            './puzzleInputs/cleanedData/cleanedDay3Inputs.json',
            JSON.stringify(cleanedData, null, 4)
        )
        console.log('finished loading data')
    } catch (error) {
        console.log(error)
    }
})

const getPowerConsumption = arrayOfBinarys => {
    const bitLength = arrayOfBinarys[0].length
    const bitPosition = {}
    Array(bitLength)
        .fill()
        .forEach((_, index) => {
            bitPosition[index] = []
        })
    for (const bit in bitPosition) {
        let ones = 0
        let zeros = 0
        for (let i = 0; i < arrayOfBinarys.length; i++) {
            if (arrayOfBinarys[i][bit] === '0') {
                zeros++
            } else {
                ones++
            }
        }
        bitPosition[bit] = ones > zeros ? 1 : 0
    }
    const gammaRate = []
    const epsilonRate = []
    Object.entries(bitPosition).forEach(([_, value]) => {
        gammaRate.push(value)
        epsilonRate.push(value === 0 ? 1 : 0)
    })

    //the radix 2 is needed to turn the binary number into a decimal
    return parseInt(gammaRate.join(''), 2) * parseInt(epsilonRate.join(''), 2)
}

// console.log(getPowerConsumption(require('./puzzleInputs/cleanedData/cleanedDay3Inputs.json')))

const getOxygenAndCO2Rating = arrayOfBinarys => {
    const bitLength = arrayOfBinarys[0].length
    let oxygenArray = Array.from(arrayOfBinarys)
    let co2Array = Array.from(arrayOfBinarys)

    for (let i = 0; i < bitLength; i++) {
        if (oxygenArray.length > 1) {
            const currentOxygen = oxygenArray.map(bin => bin[i])
            const oxyZeros = currentOxygen.filter(num => num === '0').length
            const oxyOnes = currentOxygen.filter(num => num === '1').length
            const oxyBit = oxyZeros === oxyOnes ? '1' : oxyZeros > oxyOnes ? '0' : '1'
            oxygenArray = oxygenArray.filter(bin => bin[i] === oxyBit)
        }
        if (co2Array.length > 1) {
            const currentCarbon = co2Array.map(bin => bin[i])
            const carbonZeros = currentCarbon.filter(num => num === '0').length
            const carbonOnes = currentCarbon.filter(num => num === '1').length
            const carbonBit =
                carbonZeros === carbonOnes ? '0' : carbonZeros < carbonOnes ? '0' : '1'
            co2Array = co2Array.filter(bin => bin[i] === carbonBit)
        }
    }
    return parseInt(oxygenArray[0], 2) * parseInt(co2Array[0], 2)
}

console.log(getOxygenAndCO2Rating(require('./puzzleInputs/cleanedData/cleanedDay3Inputs.json')))
