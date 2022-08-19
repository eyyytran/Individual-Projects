const example = [2, 1, 5, 2, 3, 3, 4]
const example2 = [1, 1, 2, 3, 3, 2, 2]
const example3 = [1, 2, 3]

const duplicateNum = arr => {
    const mySet = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (!mySet.has(arr[i])) {
            mySet.add(arr[i])
        } else if (mySet.has(arr[i])) {
            return arr[i]
        }
    }
    return -1
}
