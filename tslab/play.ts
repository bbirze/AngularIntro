//var age: number = "Too Old!";            // can't assign string to a num var
var age: number=20;
console.log(age);

function printPerson(name:string, age:number)  {
    console.log(`Name: ${name} age: ${age}`);
}


printPerson('Billy', 8);
//printPerson(8, 'Billy');

console.log(age);

let letVar = 'some value'
//let letVar = 'another value'          // cannot redeclare let vars
var varVar = 'some value'
var varVar = 'another value'            // redef no prob with var