// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
const longestWord = sentence => {
    const map = {}
    const resultObj = {
        word: '',
        length: 0,
    }
    const splitSentence = sentence.split(' ')
    splitSentence.forEach(word => {
        map[word] = word.length
    })
    Object.entries(map).forEach(([word, length]) => {
        if (length > resultObj.length) {
            resultObj.word = word
            resultObj.length = length
        }
    })
    return resultObj.word
}

const longestWord2 = sentence => {
    const map = {}
    const resultObj = {
        word: [],
        length: 0,
    }
    const splitSentence = sentence.split(' ')
    splitSentence.forEach(word => {
        map[word] = word.length
    })
    Object.entries(map).forEach(([word, length]) => {
        if (length > resultObj.length) {
            resultObj.word.pop()
            resultObj.word.push(word)
            resultObj.length = length
        } else if (length === resultObj.length) {
            resultObj.word.push(word)
            resultObj.length = length
        }
    })
    return resultObj
}

const longestWord3 = sentence => {
    const map = {}
    const resultObj = {
        word: [],
        length: 0,
    }
    const splitSentence = sentence.split(' ')
    splitSentence.forEach(word => {
        map[word] = word.length
    })
    Object.entries(map).forEach(([word, length]) => {
        if (length > resultObj.length) {
            resultObj.word.pop()
            resultObj.word.push(word)
            resultObj.length = length
        } else if (length === resultObj.length) {
            resultObj.word.push(word)
            resultObj.length = length
        }
    })
    const result =
        resultObj.word.length === 1 ? resultObj.word.toString() : resultObj.word
    return result
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

const chunkArray = (arr, len) => {
    const chunkedArray = []
    let i = 0
    while (i < arr.length) {
        chunkedArray.push(arr.slice(i, i + len))
        i += len
    }

    return chunkedArray
}

const chunkArray2 = (arr, len) => {
    const chunkedArray = []

    arr.forEach(number => {
        const lastChunk = chunkedArray[chunkedArray.length - 1]
        if (!lastChunk || lastChunk.length === len) {
            chunkedArray.push([number])
        } else {
            lastChunk.push(number)
        }
    })
    return chunkedArray
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
const arr1 = [[1, 2], [3, 4], [5, 6], [7]]

const flattenArray = arrays => {
    const result = arrays.flat()
    return result
}

const flattenArray2 = arrays => {
    const stack = [...arrays]
    const result = []
    while (stack.length > 0) {
        const nextCheck = stack.pop()
        if (Array.isArray(nextCheck)) {
            stack.push(...nextCheck)
        } else {
            result.push(nextCheck)
        }
    }
    return result.reverse()
}

const flattenArray3 = (arrays, d = 1) => {
    if (!Array.isArray(arrays)) {
        return arrays
    }
    return d > 0
        ? arrays.reduce(
              (accumulator, value) =>
                  accumulator.concat(flattenArray3(value, d - 1)),
              []
          )
        : arrays.slice()
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

const isAnagram = (str1, str2) => {
    const map1 = {}
    str1.split('').forEach(letter => {
        if (!map1[letter]) {
            map1[letter] = 1
            return
        }
        map1[letter]++
    })
    str2.split('').forEach(letter => {
        if (!map1[letter]) {
            map1[letter] = 1
            return
        }
        map1[letter]++
    })
    let result = true
    Object.values(map1).forEach(value => {
        if (value % 2 !== 0) {
            return (result = false)
        }
    })
    return result
}

console.log(isAnagram('elcbow', 'below'))

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

const letterChanges = str => {}
