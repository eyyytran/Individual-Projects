// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

const reverseString = str => {
    const newStr = str.split('').reverse().join('')
    return newStr
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

const isPalindrome = str => {
    const result = str === str.split('').reverse().join('') ? true : false
    return result
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

const reverseInt = int => {
    const reversedInt = parseInt(int.toString().split('').reverse().join(''))
    return reversedInt
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
const capitalizeLetters = str => {
    const splitSentence = str.split(' ')
    const capitalizedWords = splitSentence.map(word => {
        let newWord = word.split('')
        const capitalLetter = newWord[0].toUpperCase()
        newWord.splice(0, 1, capitalLetter)
        newWord = newWord.join('')
        return newWord
    })
    const newSentence = capitalizedWords.join(' ')
    return newSentence
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
const maxCharacter = str => {
    const map = {}
    const result = {
        letter: '',
        count: 0,
    }
    str.split('').forEach(letter => {
        if (!map[letter]) {
            map[letter] = 0
        }
        map[letter]++
    })
    Object.entries(map).forEach(([letter, count]) => {
        if (count > result.count) {
            result.letter = letter
            result.count = count
        }
    })
    return result.letter
}

maxCharacter('javascript')
// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
const fizzBuzz = () => {
    const n = 100
    const array = []
    for (let i = 1; i <= n; i++) {
        array.push(i)
    }
    array.forEach(number => {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log('fizzbuzz')
        }
        if (number % 3 === 0) {
            console.log('fizz')
        }
        if (number % 5 === 0) {
            console.log('buzz')
        } else console.log('none')
    })
}

console.log(fizzBuzz())
