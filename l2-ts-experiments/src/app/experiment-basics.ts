import { MinLengthValidator } from "@angular/forms"

console.log('try TS code out')

// Part 2: Variable Types
//------------------------
let arg =5;

var age: number = 20
//var age: number = "Too Old"
console.log('Age is', age)



// let arg =5;
// var age: number = 20
// var age: string = '55'

// Part 4: Function Arguments
//----------------------------
function printPerson(name:string, age:number)  {
    console.log(`Name: ${name}  Age: ${age}`)
}

printPerson("Billy", 8)
//printPerson(8, "Billy")


// Part 5: Function Return Types
//------------------------------
function isMinimumAge(age: number) : boolean {
    return age >= 21
}

console.log('Is minimum age: ', isMinimumAge(22))