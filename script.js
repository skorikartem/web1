//Завдання 1
let obj = {}

function A(){
    return obj
}

function B(){
    return obj
}

let a = new A()
let b = new B()

alert(`A = B: ${a == b}`)

//Завдання 2
function Calculator(num1 = 0, num2 = 0) {
    this.read = function() {
        this.num1 = +prompt("Enter the first value: ", this.num1)
        this.num2 = +prompt("Enter the second value: ", this.num2)
    }
    this.sum = function() {
        alert(`Cума = ${this.num1 + this.num2}`)
    }
    this.mul = function() {
        alert(`Добуток = ${this.num1 * this.num2}`)
    }
}

let calc = new Calculator()
calc.read()
calc.sum()
calc.mul()

//Завдання 3
function Constructor(startingValue) {
    this.startingValue = startingValue
    this.read = function() {
        this.startingValue += +prompt("Enter the value: ")
    }
}

let constructor = new Constructor(20)
constructor.read()
alert(`Value = ${constructor.startingValue}`)
