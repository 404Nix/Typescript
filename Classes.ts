// Classes And Object

// classe wit constructor

class BottleMaker {
    constructor(
        public name: string,
        public price: number,
    ) {}
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
    constructor(public name: string) {
        // this do 2 things first 1-> create a variable in the class and 2-> add a parameter to the constructor
        this.name = name;
    }
}

// can also written as
class ghij2 {
    public name;
    constructor(name: string) {
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
    constructor(public name: string) {
        this.name = name; // can access public variable
    }

    anyMethod() {
        this.name; // can access within class anywhere
    }
}

const a1 = new ex1("nix");
a1.name = "xin"; // can access outside the class as well

class ex2 {
    constructor(private name: string) {
        this.name = name; // can access public variable
    }

    anyMethod() {
        this.name; // can access within class anywhere
    }
}

class ex2H extends ex2 {
    constructor(name: string) {
        super(name);
    }

    getName() {
        this.name; // also cannot access private variable in sub classes
    }
}

const a2 = new ex2H("nix");
a2.name = "xin"; // cannot access it outside the class

class ex3 {
    constructor(protected name: string) {
        this.name = name;
    }

    anyMethod() {
        this.name;
    }
}

class ex3H extends ex3 {
    constructor(name: string) {
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
    constructor(public readonly name: string) {
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
    constructor(
        public _name: string,
        public age: number,
    ) {}

    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
}

const a5 = new getSet("nix", 22);
a5.name;
a5.name = "nikhil";

// Static - it makes the properties & method accessible without creating an instance

class abc {
    static version: string;
    static getRandomNumber() { 
        return Math.PI;
    }

    // both are accessible without instance(new) but if we created an instance static members will not be there
}


/**
 * Abstract Classes
 * 
 * it is a base requirement for its sub classes and it never be instantiated
 */

class Payment {
    constructor(protected amout:number, protected account:number) {}

    isPaymentValid() {
        return this.amout > 0;
    }
}

class Paytm extends Payment {
    constructor (public type:string, amount:number, account:number) {
        super(amount, account);
        this.type = type;
    }
}