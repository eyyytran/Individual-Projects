// const fs = require('fs')

// fs.readFile('./puzzleInputs/rawData/day1inputs.txt', 'utf8', (err, data) => {
//     const cleanedData = []
//     const dataToArray = data.toString().split(/\r?\n/)
//     dataToArray.forEach(string => cleanedData.push(parseInt(string)))
//     try {
//         fs.writeFileSync(
//             './puzzleInputs/cleanedData/cleanedDay1Inputs.json',
//             JSON.stringify(cleanedData, null, 4)
//         )
//         console.log('finished loading data')
//     } catch (error) {
//         console.log(error)
//     }
// })

const puzzleInputs = require('./puzzleInputs/cleanedData/cleanedDay1Inputs.json')
const testCase = [
    1000,
    2000,
    3000,
    null,
    4000,
    null,
    5000,
    6000,
    null,
    7000,
    8000,
    9000,
    null,
    10000,
]
const answer_part1 = 24000
const answer_part2 = 45000

const findMostCaloricPack = arrayOfCalories => {
    let mostCaloric = 0
    let currentCount = 0

    for (let i = 0; i < arrayOfCalories.length; i++) {
        if (arrayOfCalories[i] != null) {
            currentCount += arrayOfCalories[i]
        } else {
            mostCaloric = Math.max(mostCaloric, currentCount)
            currentCount = 0
        }
    }
    return mostCaloric
}

// console.log(findMostCaloricPack(puzzleInputs))

const findSumOfTopThreePacks = arrayOfCalories => {
    let arrayOfTotals = []
    let currentCount = 0

    for (let i = 0; i < arrayOfCalories.length; i++) {
        if (arrayOfCalories[i] === null) {
            arrayOfTotals.push(currentCount)
            currentCount = 0
        } else if (i === arrayOfCalories.length - 1) {
            arrayOfTotals.push(arrayOfCalories[i])
        } else {
            currentCount += arrayOfCalories[i]
        }
    }

    arrayOfTotals.sort((a, b) => b - a)

    return arrayOfTotals[0] + arrayOfTotals[1] + arrayOfTotals[2]
}

console.log(findSumOfTopThreePacks(puzzleInputs))
