function sayHello() {
	console.log("Hello there!")	
}

sayHello()   //this calls the function


function sayHelloToYou(name) {
	console.log(`Hello there ${name}!`) //string interpolation - must use back ticks
console.log("Hello there " + name + "!") //string concatenation
}

sayHelloToYou("person")

function addTwoNumbers(num1, num2) {
	const sum = num1 + num2
	return sum
}
const sum = addTwoNumbers(4,6)

console.log(sum)

	//anonymous function

//(function (num) {	return num ** 2 //num * num})
	
const squaredNumber = function (num){
		return num ** 2 //num * num
}

const square = squaredNumber(6)

console.log(square)

// arrow function

const cubedNumber = (num) => {
		return num ** 3 // num*num*num
}
	
const cube = cubedNumber(5)

console.log(cube)

// making arrow function code smaller

const cubedNumber2 = num => num ** 3 // num*num*num
	
const cube2 = cubedNumber2(5)

console.log(cube2)


// scope

let num1 = 3

function incrementer() {
	let num2 = 8
	num1 = num1 + 1 // num1++
	num2 = num2 + 1 // num2++
	return num2
}

const num2 = incrementer()
console.log(`num1: ${num1}`)
console.log(`num2: ${num2}`)

// callback function
// javascript map
		
const nums = [1, 2, 3, 4, 5]
console.log(nums.keys)
const squarednums = nums.map((num) => num ** 2)

console.log(squarednums)
