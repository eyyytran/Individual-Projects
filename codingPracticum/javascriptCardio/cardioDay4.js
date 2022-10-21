function solve(intervals) {
    if (!intervals?.length) return []
    const newIntervals = Array.from(intervals)
    newIntervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < newIntervals.length - 1; i++) {
        const current = newIntervals[i]
        const next = newIntervals[i + 1]
        if (current[1] >= next[0]) {
            current[1] = Math.max(current[1], next[1])
            newIntervals.splice(i + 1, 1)
            i--
        }
    }
    return newIntervals
}
