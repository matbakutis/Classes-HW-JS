
class Pet {
	constructor(name){
		this.name = name;
		this.owner = "";
	}
	setOwner(owner){
		this.owner = owner;
	}
}

class Dog extends Pet {
	constructor(price, name){
		super(name);
		this.price = price;
	}
	bark(){
		console.log("Bark");
	}
	chaseTail(){
		console.log("oh boy oh boy");
	}
	getPrice(){
		return this.price;
	}
};

const sparky = new Dog(9, "Sparky");
sparky.bark();
sparky.chaseTail();
console.log(sparky.getPrice());


class Cat extends Pet {
	constructor(price, name){
		super(name);
		this.price = price;
	}
	purr(){
		console.log("Purrrr");
	}
	clean(){
		console.log("Cleaning");
	}
	getPrice(){
		return this.price;
	}	
};


const sprinkles = new Cat(8, "Sprinkles");
sprinkles.purr();
sprinkles.clean();
console.log(sprinkles.getPrice());


class Person {
	constructor(name){
		this.name = name;
		this.age = 0;
		this.weight = 0;
		this.mood = 0;
		this.pets = [];
		this.bankAccount = 0;
	}
	getName(){
		return this.name;
	}
	getAge(){
		return this.age;
	}
	getWeight(){
		return this.weight;
	}
	greet(other_person){
		console.log("Hey there, " + other_person);
	}
	eat(){
		this.weight++;
		this.mood++;
	}
	exercise(){
		this.weight--;
	}
	cage(){
		this.age++;
		this.weight++;
		this.mood--;
		this.bankAccount += 10;
	}
	buyPet(pet){
		this.pets.push(pet);
		this.mood += 10;
		this.bankAccount -= pet.getPrice();
	}
};

const jill = new Person("Jill");
console.log(jill.getName());
console.log(jill.getAge());
console.log(jill.getWeight());
jill.greet("Billy");
jill.eat();
jill.exercise();
jill.cage();
jill.buyPet(sprinkles);
console.log(jill);









































