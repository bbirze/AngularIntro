import { MinLengthValidator } from "@angular/forms"

console.log('try TS code out')

var age: number = 20
//var age: number = "Too Old"
console.log('Age is', age)

function isMinimumAge(age: number) : boolean {
    return age >= 21
}

console.log('Is minimum age: ', isMinimumAge(22))

