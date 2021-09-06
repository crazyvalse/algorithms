// function Person() {}
//
// var person = new Person()
// person.name = 'name'
// console.info(person.name)

// prototype 是函数才会有的属性

function Person() {

}

Person.prototype.name = 'name';

var person = new Person();

person.name = 'name of this person';
console.log(person.name) // name of this person

delete person.name;
console.log(person.name) // name
