var age: number=20;
console.log(age);

function printPerson(name:string, age:number)  {
    console.log(`Name: ${name} age: ${age}`);   // template string
}
 
printPerson('Billy', 8);
//printPerson(8, 'Billy');

//var age: string = "Too Old!";            // can't assign string to a num var
console.log(age);

var varVar = 'some value'
var varVar = 'another value'            // redef no prob with var
let letVar = 'some value'
//let letVar = 'another value'          // cannot redeclare let vars
