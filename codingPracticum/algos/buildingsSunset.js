const testCases = [[], [7, 4, 8, 2, 9], [2, 3, 4, 5], [4, 2, 3, 1], [8, 1, 5, 7]]
const answers = [0, 3, 4, 1]
const answers_v2 = [[], [9], [5], [1, 3, 4], [7, 8]]

const solution = arrayOfBuildings => {
    if (arrayOfBuildings.length === 0) return 0
    let counter = 1
    let current = arrayOfBuildings[0]
    for (let i = 1; i < arrayOfBuildings.length; i++) {
        if (arrayOfBuildings[i] > current) {
            counter++
            current = arrayOfBuildings[i]
        }
    }
    return counter
}

// testCases.map((testCase, index) =>
//     console.log({
//         testCase,
//         expected: answers[index],
//         actual: solution(testCase),
//     })
// )

const solution_v2 = arr => {
    if (arr.length === 0) return []
    let result = []
    let tallest = arr[arr.length - 1]
    result.push(tallest)
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > tallest) {
            result.push(arr[i])
            tallest = arr[i]
        }
    }
    return result
}

testCases.map((testCase, index) =>
    console.log({
        testCase,
        expected: answers_v2[index],
        actual: solution_v2(testCase),
    })
)
