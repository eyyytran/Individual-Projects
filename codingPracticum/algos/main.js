// Number Validation – Given a string of digits, write a function that returns true if and only if

// - There is at least one instance of two identical digits back to back
// - There are no instances of digits decreasing in value (eg: 73)

// Test Cases
// 1. 123456 – Returns false (no duplicate)
// 2. 122345 – Returns true
// 3. 122354 – Returns false (4 is less than 5 and comes after)

const testCases = ['123456', '122345', '122354', '12133']
const expectedResults = [false, true, false, false]

// string into array of numbers
//hash map counting occurrences
//make sure digits are not decreasing
//null check

const numberValidation = stringOfNums => {
    let myMap = {}
    const arrayOfNums = []
    let result = false
    stringOfNums.split('').forEach(string => arrayOfNums.push(parseInt(string)))
    const isDecreasing = (num1, num2) => num1 > num2
    for (let i = 0; i < arrayOfNums.length; i++) {
        if (isDecreasing(arrayOfNums[i], arrayOfNums[i + 1])) {
            result = false
            break
        }
        if (!myMap[arrayOfNums[i]]) {
            myMap[arrayOfNums[i]] = 1
        } else {
            if (arrayOfNums[i - 1] === arrayOfNums[i]) {
                result = true
            } else {
                myMap[arrayOfNums[i]]++
            }
        }
    }
    return result
}

// console.log(numberValidation(testCases[0]), expectedResults[0])
// console.log(numberValidation(testCases[1]), expectedResults[1])
// console.log(numberValidation(testCases[2]), expectedResults[2])
console.log(numberValidation(testCases[3]), expectedResults[3])
