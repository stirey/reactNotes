//We name the class
class User {
    //we call the consstructor function and create paramaters
    //The will be values that we want to be passed in and stored in the object
    constructor(first, last, e) {
    //On the right side of these expression, the word first, last and e, we have the value that is getting passed into the params when the object is created
        this.f = first;
        this.l = last;
        this.email = e;
    //The left side stores the incoming value form the right side as the property for 'this' specific object being created.
    }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Connor
console.log(userOne); //User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"}




class Player {
    constructor(name, number, avPoints){
        this.n = name;
        this.num = number;
        this.a = avPoints;
    }
}

var playerOne = new Player("Lisa", "twenty", "15");
console.log(playerOne);
console.log(playerOne.n);