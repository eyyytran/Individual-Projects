const person = {
    name: 'Andrea',
    sayName: function () {
        console.log(this.name) //this refers to person
    },
}

person.sayName() //person is calling the function, so this = person

const localSayName = person.sayName
localSayName() //global context is calling the function, so this = global object

const boundSayName = person.sayName.bind(person) //ignore the context, when this is called, this = person
boundSayName()

//arrow functions can change the behavior of this

const horse = {
    name: 'Bob',
    sayName: () => {
        console.log(this.name) //to make this work, replace this.name with horse.name
    },
}

horse.sayName() //the arrow function is defining 'this' as what it was at time of declaration, which ^ is this = global
