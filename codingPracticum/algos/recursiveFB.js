const testCases = [5, 3, 15, 2, 0, 6, 10, 13]
const expectedResults = ['Buzz', 'Fizz', 'FizzBuzz', 1, 1, 'Fizz', 'Buzz', 1]

const classicSolution = num => {
    if (num === 0) return 1
    else if (num % 15 === 0) return 'FizzBuzz'
    else if (num % 3 === 0) return 'Fizz'
    else if (num % 5 === 0) return 'Buzz'
    else return 1
}

// testCases.map((num, index) => {
//     console.log({
//         input: num,
//         result: classicSolution(num),
//         expectedResult: expectedResults[index],
//     })
// })

const recursiveSolution = num => {
    let counter = 1
    const fizzBuzz = counter => {
        if (counter > num) return
        if (counter % 15 === 0) console.log('Fizzbuzz')
        else if (counter % 3 === 0) console.log('Fizz')
        else if (counter % 5 === 0) console.log('Buzz')
        else console.log([])
        fizzBuzz(counter + 1)
    }
    fizzBuzz(counter)
}

const downwardRecursion = num => {
    let counter = num
    const fizzBuzz = counter => {
        if (counter === 0) return
        if (counter % 15 === 0) console.log('Fizzbuzz')
        else if (counter % 3 === 0) console.log('Fizz')
        else if (counter % 5 === 0) console.log('Buzz')
        else console.log([])
        fizzBuzz(counter - 1)
    }
    fizzBuzz(counter)
}

downwardRecursion(15)
