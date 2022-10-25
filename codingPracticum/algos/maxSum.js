const testCases = [[1, 2, 3], [1, 2], [1], []]
const answers = [198, 66, 11, 0]

function solution(numbers = []) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            sum += parseInt(`${numbers[i]}${numbers[j]}`)
        }
    }
    return sum
}

testCases.map((testCase, index) =>
    console.log({
        testCase,
        expected: answers[index],
        actual: solution(testCase),
    })
)
