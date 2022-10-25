function Horse(name) {
    this.name = console.log(name)
    this.callHorse = function () {
        console.log('Hi Bob')
    }
}

const myHorse = new Horse('Bob')

myHorse.name

const myHorseName = myHorse.name
console.log(myHorseName)
