const A = '12:01'
const B = '12:44'

function solution(A, B) {
    const startHours = parseInt(A[0] + A[1])
    const startMin = parseInt(A[3] + A[4])
    const endHours = parseInt(B[0] + B[1])
    const endMin = parseInt(B[3] + B[4])
    const totalTime = {
        hours: 0,
        min: 0,
    }

    if (startMin !== 0 || startMin % 15 !== 0) {
        if (startMin < 15) {
            startMin = 15
        } else if (startMin < 30) {
            startMin = 30
        } else if (startMin < 45) {
            startMin = 45
        }
    }

    if (endHours < startHours) {
        totalTime.hours = 24 - startHours + endHours
    } else if (endHours > startHours) {
        totalTime.hours = endHours - startHours
    }
    if (startMin > endMin) {
        totalTime.min = 60 - startMin + endMin
        totalTime.hours--
    } else if (startMin < endMin) {
        totalTime.min = endMin - startMin
    }
    return totalTime.hours * 4 + Math.floor(totalTime.min / 15)
}

solution(A, B)
