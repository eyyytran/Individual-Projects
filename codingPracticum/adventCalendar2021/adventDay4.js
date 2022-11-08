const { execFileSync } = require('child_process')
const fs = require('fs')

fs.readFile('./puzzleInputs/rawData/day4Inputs.txt', (err, data) => {
    const cleanedData = {}
    const dataToArray = data.toString().split(/\r?\n/)

    cleanedData.bingoNums = dataToArray.shift().split(',')
    cleanedData.bingoNums.forEach((str, idx) => {
        cleanedData.bingoNums[idx] = parseInt(str)
    })

    cleanedData.boards = []
    let result = []

    for (let i = 0; i < dataToArray.length; i++) {
        if (dataToArray[i] && result.length < 5) {
            const numsArray = dataToArray[i].split(' ')
            numsArray.forEach((str, idx) => {
                if (str === '') {
                    numsArray.splice(idx, 1)
                    i--
                } else numsArray[idx] = parseInt(str)
            })
            result.push(numsArray)
        }
        if (result.length === 5) {
            cleanedData.boards.push(result)
            result = []
        }
    }

    try {
        fs.writeFileSync(
            './puzzleInputs/cleanedData/cleanedDay4Inputs.json',
            JSON.stringify(cleanedData, null, 4)
        )
        console.log('Updated File')
    } catch (error) {
        console.log(error)
    }
})
