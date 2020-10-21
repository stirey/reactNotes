//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

class User {
    constructor(username, password) {
        this.name = username;
        this.password = password;
        this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log('Welcome back,' + this.name);
    }
    //Method 2
    status() {
        console.log('Current status:' + this.type);
    }
}

//Instance of the class/new object
var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

//super
class BronzeLevelUser extends User {
    //We add the ccinfo property to the user here.
    constructor(username, password, ccinfo){
        //super points to the parent constructor, see code at top
        super(username, password);
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }

    getInfo(){
        console.group(this.username, this.password, this.type, this.ccinfo);
    }
}

var bronzeGuy = new BronzeLevelUser("Bronze Dude", "bronze7589", "4242424242424242");
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);
