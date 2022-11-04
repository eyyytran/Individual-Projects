// Given an array of sonar readings with depths from the sea floor, count the number of times a depth measurement imcreases from the previous measurement. There is no measurement before the first value.

const testCase = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
const expectedResult = 7
const fs = require('fs')

const puzzleInputs = []

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

fs.readFile('./puzzleInputs/day1inputs.txt', 'utf8', (err, data) => {
    const dataToArray = data.toString().split(/\r?\n/)
    console.log(calculateNumberOfDepthIncreases(dataToArray))
})

// console.log(
//     'input: ',
//     calculateNumberOfDepthIncreases(testCase),
//     'expected result:',
//     expectedResult
// )
