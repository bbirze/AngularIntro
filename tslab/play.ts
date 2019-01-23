var age: number = 20
// Compile error in TypeScript, though tra//naspiled JavaScript is legal
//var errAge: number = "Too old"
console.log("age : " + age)

function printPerson(name:string, age:number) {
    console.log(`Name: ${name} age: ${age}`)
}

printPerson("Billy", 8)
//printPerson(8, "Billy")