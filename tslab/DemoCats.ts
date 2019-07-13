class Cat {
  name:string;
  type:string;
}


function meow(cat:Cat) {
  console.log (`${cat.name} says meow!`)
}
//does not compile even with no constructor
// var cat1:Cat = { name:'fluffy', type:'tabby' }
// var cat2:Cat = { name:'ginger', type:'simamese' }
// var cat3:Cat = new Cat
var cat1:Cat = { 'name':'fluffy', 'type':'tabby'}
var cat2:Cat =  { 'name':'ginger', 'type':'simamese'}
var cat3:Cat = new Cat()


var cats: Cat[] = [ cat1, cat2, cat3 ]
cats.forEach(cat => meow(cat))