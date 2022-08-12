// Things to work on:
// introduction - have a rehearsed 30 second introduction that you know by heart, that sounds good
// you don't graduate with a MERN stack - you learned the MERN stack
// better variable names - name it what it is, the more clear it is the easier it will be to think as you're coding
// there are several key array methods, you should remember (or be able to quickly check via google), how they work, what they return, and so on
// join, filter, splice, find, findIndex, map, forEach, includes,

const depthChart = [
    {
        position: 'qb',
        players: [],
    },
    {
        position: 'rb',
        players: [],
    },
    {
        position: 'wr',
        players: [],
    },
]

// const initialPositions = ['QB', 'RB', 'WR', 'TE']
// const depthChart = []

// function createDepthChart(positions) {
//     initialPositions.forEach(position =>
//         depthChart.push({ position, players: [] })
//     )
// }

function printDepthChart() {
    console.log(JSON.stringify(depthChart, null, 2))
}

// createDepthChart(initialPositions)
// printDepthChart()

const addPlayer = (playerName, position, rank = null) => {
    const newPlayer = {
        name: playerName,
        rank,
    }
    const positionObject = depthChart.find(
        positionObject => positionObject.position === position
    )
    positionObject.players.push(newPlayer)
}

const removePlayer = (playerName, position) => {
    const { players } = depthChart.find(
        positionObject => positionObject.position === position
    )
    const foundIndex = players.findIndex(
        playerObject => playerObject.name === playerName
    )
    players.splice(foundIndex, 1)
    // const filteredPlayers = foundPositionObject.players.filter(
    //     item => item.name !== playerName
    // )
    // foundPositionObject.players = filteredPlayers
}

const printDepthChartV2 = () => {
    depthChart.forEach(({ position, players }) => {
        const playersString = players
            .map(({ name, rank }) => `${name}${rank ? ` (${rank})` : ''}`)
            .join(', ')
        console.log(`${position}: ${playersString}`)
    })
}

addPlayer('Alex', 'qb', 1)
addPlayer('Andrea', 'qb')
addPlayer('Bob', 'rb')

// removePlayer('Bob', 'rb')
// removePlayer('Andrea', 'qb')

// printDepthChart()
printDepthChartV2()

// console.log(JSON.stringify(team, null, 2))

// printList(team)
