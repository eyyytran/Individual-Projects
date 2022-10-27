const testCases = [[1, 3, 6, 4, 1, 2], [1, 2, 3], [-1, -5], [0], [5]]
const results = [5, 4, 1, 1, 1]

const findSmallestInteger = arr => {
    const mySet = new Set(arr)
    let counter = 1
    while (mySet.has(counter)) {
        counter++
    }
    return counter
}

testCases.map((testCase, index) =>
    console.log({
        testCase,
        expected: results[index],
        actual: findSmallestInteger(testCase),
    })
)
