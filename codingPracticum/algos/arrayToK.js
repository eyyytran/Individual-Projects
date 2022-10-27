const testCasesA = [[1, 1, 2, 3, 3], [1, 1, 3], [0], [3, 1, 1]]
const testCasesK = [3, 2, 1, 3]
const answers = [true, false, false, false]

function solution(A, K) {
    var n = A.length
    //check to see if n is sorted in ascending
    for (var i = 0; i < n - 1; i++) {
        if (A[i] + 1 < A[i + 1]) {
            console.log('false on sorting')
            return false
        }
    }
    if (A[0] !== 1 || A[n - 1] !== K) {
        console.log('false on K')
        return false
    } else return true
}

testCasesA.map((testCaseA, index) =>
    console.log({
        testCaseA,
        secondVariable: testCasesK[index],
        expected: answers[index],
        actual: solution(testCaseA, testCasesK[index]),
    })
)
