const fs = require('fs')

fs.readFile('./puzzleInputs/rawData/day2Inputs.txt', 'utf-8', (error, data) => {
    const cleanedData = []
    const dataToArray = data.toString().split(/\r?\n/)
    dataToArray.forEach(command => {
        const [direction, numberOfSpaces] = command.split(' ')
        cleanedData.push([direction, parseInt(numberOfSpaces)])
    })
    try {
        fs.writeFileSync(
            './puzzleInputs/cleanedData/cleanedDay2Inputs.json',
            JSON.stringify(cleanedData, null, 1)
        )
        console.log('finished updating file')
    } catch (error) {
        console.log(error)
    }
})

const puzzleInputs = require('./puzzleInputs/cleanedData/cleanedDay2Inputs.json')

const testCase = [
    ['forward', 5],
    ['down', 5],
    ['forward', 8],
    ['up', 3],
    ['down', 8],
    ['forward', 2],
]
const expectedResult = 150

const getProductOfFinalDepthAndHorizontalPosition = arrayOfCommands => {
    let horizontalPosition = 0
    let depth = 0
    for (let i = 0; i < arrayOfCommands.length; i++) {
        const [command, numberOfSpaces] = arrayOfCommands[i]
        if (command === 'forward') {
            horizontalPosition += numberOfSpaces
        } else if (command === 'back') {
            horizontalPosition -= numberOfSpaces
        } else if (command === 'down') {
            depth += numberOfSpaces
        } else {
            depth -= numberOfSpaces
        }
    }
    return depth * horizontalPosition
}

console.log(getProductOfFinalDepthAndHorizontalPosition(puzzleInputs))
