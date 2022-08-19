// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

const addAll = (...numbers) => {
    return numbers.reduce((sum, num) => {
        return sum + num
    }, 0)
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

const sumAllPrimes = num => {
    let total = 0
    const checkPrime = i => {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                return false
            }
        }
        return true
    }
    for (let i = 2; i <= num; i++) {
        if (checkPrime(i)) {
            total += i
        }
    }
    return total
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

const seekAndDestroy = (arr, ...rest) => {
    return arr.filter(val => !rest.includes(val))
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

const sortByHeight = arr => {
    const people = []
    const trees = []
    arr.forEach((val, i) => (val === -1 ? trees.push(i) : people.push(val)))
    const result = people.sort((a, b) => (a > b ? 1 : -1))
    trees.forEach(tree => result.splice(tree, 0, -1))
    return result
}

// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

const missingLetters = string => {
    const stack = [...string].reverse()
    while (stack.length > 0) {
        const currentCheck = stack.pop()
        const nextLetter = String.fromCharCode(currentCheck.charCodeAt(0) + 1)
        const nextCheck = stack.pop()
        if (nextCheck !== nextLetter) {
            return nextLetter
        } else {
            stack.push(nextCheck)
        }
    }
}

function missingLetters2(str) {
    let compare = str.charCodeAt(0)
    let missing

    str.split('').forEach((char, i) => {
        console.log({ compare, index: i })
        if (str.charCodeAt(i) == compare) {
            ++compare
        } else {
            missing = String.fromCharCode(compare)
        }
    })

    return missing
}

function findMissingLetter(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < s.length && i < alphabet.length; i++) {
        console.log({ index: i })
        if (s[i] !== alphabet[i]) return alphabet[i]
    }
    return undefined
}

// console.log(
//     missingLetters2('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz')
// )

console.log(
    findMissingLetter('bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz')
)

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {}
