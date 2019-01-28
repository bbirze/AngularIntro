class Cat {
  name:string;
  type:string;

  constructor(name:string, type:string) {
    this.name = name
    this.type = type
  } 

  meow() : void {
    console.log (`${this.name} says meow!`)
  }
}

// does not compile even with no constructor
// var cat1:Cat = { name:'fluffy', type:'tabby' }
// var cat2:Cat = { name:'ginger', type:'simamese' }
//var cat3:Cat = new Cat
var cat1:Cat = new Cat('fluffy', 'tabby')
var cat2:Cat = new Cat('ginger', 'simamese')
var cat3:Cat = new Cat('', '')


var cats: Cat[] = [ cat1, cat2, cat3 ]
cats.forEach(cat => cat.meow())