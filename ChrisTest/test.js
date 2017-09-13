function Person(name, age){
	var privateVariable = 'This variable is private';
	var privateMethod = function(){
		console.log(this);
	}
	this.name = name;
	this.age = age;
	this.greet = function(){
		console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old!');
		console.log('Also my privateVariable says: ' + privateVariable)
		privateMethod(this);
	}
}
var joe = new Person('Joe', 23);
joe.greet();