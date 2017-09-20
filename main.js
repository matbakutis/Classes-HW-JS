
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

const sparky = new Dog("$250", "Sparky");
sparky.bark();
sparky.chaseTail();
console.log(sparky.getPrice());











































