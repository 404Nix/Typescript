"use strict";
// Classes And Object
Object.defineProperty(exports, "__esModule", { value: true });
// classe wit constructor
class BottleMaker {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const b1 = new BottleMaker("milton", 1200);
// This Keyword
class abcd {
    name = "nix";
    getName() {
        this.name;
    }
}
class ghij {
    name;
    constructor(name) {
        this.name = name;
        // this do 2 things first 1-> create a variable in the class and 2-> add a parameter to the constructor
        this.name = name;
    }
}
// can also written as
class ghij2 {
    name;
    constructor(name) {
        // this do 2 things first 1-> create a variable in the class and 2-> add a parameter to the constructor
        this.name = name;
    }
}
/**
 * Access Modifiers
 * -> public
 * -> private
 * -> protected
 */
// example for public and private
class ex1 {
    name;
    constructor(name) {
        this.name = name;
        this.name = name; // can access public variable
    }
    anyMethod() {
        this.name; // can access within class anywhere
    }
}
const a1 = new ex1("nix");
a1.name = "xin"; // can access outside the class as well
class ex2 {
    name;
    constructor(name) {
        this.name = name;
        this.name = name; // can access public variable
    }
    anyMethod() {
        this.name; // can access within class anywhere
    }
}
class ex2H extends ex2 {
    constructor(name) {
        super(name);
    }
    getName() {
        this.name; // also cannot access private variable in sub classes
    }
}
const a2 = new ex2H("nix");
a2.name = "xin"; // cannot access it outside the class
class ex3 {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    anyMethod() {
        this.name;
    }
}
class ex3H extends ex3 {
    constructor(name) {
        super(name);
    }
    getName() {
        this.name; // main diff in private and protected that we can access protected vairable in sub Classes
    }
}
const a3 = new ex3H("nix");
a3.name = "xin"; // cannot access it outside the class
// Optional properties
class ex4 {
    name;
    constructor(name) {
        this.name = name;
        // property is read-Only
    }
    changeName() {
        this.name = "nix";
    }
}
const a4 = new ex4("name");
a4.changeName();
// Getter And Setters
class getSet {
    _name;
    age;
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
const a5 = new getSet("nix", 22);
a5.name;
a5.name = "nikhil";
// Static - it makes the properties & method accessible without creating an instance
class abc {
    static version;
    static getRandomNumber() {
        return Math.PI;
    }
}
/**
 * Abstract Classes
 *
 * it is a base requirement for its sub classes and it never be instantiated
 */
class Payment {
    amout;
    account;
    constructor(amout, account) {
        this.amout = amout;
        this.account = account;
    }
    isPaymentValid() {
        return this.amout > 0;
    }
}
class Paytm extends Payment {
    type;
    constructor(type, amount, account) {
        super(amount, account);
        this.type = type;
        this.type = type;
    }
}
//# sourceMappingURL=Classes.js.map