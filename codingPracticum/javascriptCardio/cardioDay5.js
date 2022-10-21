const playerArr = ['Bob J', 'Cardi B', 'David R', 'Stevie B', 'Alexis R', 'Bob J', 'David R']
const playerArr2 = ['Bob J', 'Cardi B', 'David R', 'Stevie B', 'Alexis R']
const playerArr3 = ['Bob J']

const removeDuplicates = arr => {
    const mySet = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (mySet.has(arr[i])) {
            arr.splice(i, 1)
        } else {
            mySet.add(arr[i])
        }
    }
    return arr
}

// console.log(removeDuplicates(playerArr))

const removeDuplicates_v2 = arr => {
    let [left, right] = [0, 1]
    while (left < arr.length - 1) {
        if (arr[left] === arr[right]) {
            arr.splice(left, 1)
            left = 0
            right = 1
        }
        if (arr[left] !== arr[right]) {
            if (right === arr.length - 1) {
                left++
                right = left + 1
            } else {
                right++
            }
        }
    }
    return arr
}

console.log(removeDuplicates_v2(playerArr))
console.log(removeDuplicates_v2(playerArr2))
console.log(removeDuplicates_v2(playerArr3))
