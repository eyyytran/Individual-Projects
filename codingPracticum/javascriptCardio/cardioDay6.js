// Given an array of sonar readings with depths from the sea floor, count the number of times a depth measurement imcreases from the previous measurement. There is no measurement before the first value.

const testCase = [607, 618, 618, 617, 647, 716, 769, 792]
const expectedResult = 5
const fs = require('fs')

fs.readFile('./puzzleInputs/day1inputs.txt', 'utf8', (err, data) => {
    const cleanedData = []
    const dataToArray = data.toString().split(/\r?\n/)
    dataToArray.forEach(string => cleanedData.push(parseInt(string)))
    try {
        fs.writeFileSync(
            './puzzleInputs/cleanedDay1Inputs.json',
            JSON.stringify(cleanedData, null, 4)
        )
        console.log('finished loading data')
    } catch (error) {
        console.log(error)
    }
})

const puzzleInputs = require('./puzzleInputs/cleanedDay1Inputs.json')

const calculateNumberOfDepthIncreases = arrayOfDepths => {
    let counter = 0
    let [curr, next] = [0, 1]
    while (next < arrayOfDepths.length) {
        const isIncreasing = () => arrayOfDepths[curr] < arrayOfDepths[next]
        if (isIncreasing()) {
            counter++
        }
        curr = next
        next++
    }
    return counter
}

// console.log(calculateNumberOfDepthIncreases(puzzleInputs))

const calculateNumberOfWindowIncreases = arrayOfDepths => {
    let [first, second, third] = [0, 1, 2]
    let counter = 0
    let previousSum = null
    while (third < arrayOfDepths.length) {
        const currentSum = arrayOfDepths[first] + arrayOfDepths[second] + arrayOfDepths[third]
        if (previousSum) {
            if (currentSum > previousSum) {
                counter++
            }
        }
        previousSum = currentSum
        first = second
        second = third
        third++
    }
    return counter
}

console.log(calculateNumberOfWindowIncreases(puzzleInputs))
