//Function Types
// example

function abc(name: string, age: number, cb: (value: string) => void): void {}

abc("nix", 30, (value: string) => {
    console.log(value);
});

//Optional and default paramenter

function def(
    name: string,
    age: number = 0 /*default*/,
    gender?: string /*Optional*/,
) {
    console.log(name, age, gender);
}

//rest Parameter ...

function ancd(...args: number[]) {
    console.log(args);
}

ancd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//OverLoading

function ccc(a: string): void;
function ccc(a: string, b?: number): number;

function ccc(a: any, b?: any): any {
    if (typeof a === "string" && b === undefined) {
        console.log("hey");
        return;
    }

    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    throw new Error("something wrong");
}

// Generics

// generics function

/**  function gen(a: any) {
 *     return;
 *    }
 *
 * here we can give any type of value in function but it will not suggest any methods of that type
 *
 * That is why we can pass the type while using it
 */

//example
function gen<T>(a: T) {}

gen<string>("hey"); //we can also remove the <string> generic gen("hey");

function fff<T> (a:T, b:T): T {
    return "hey" //not possible cuz we can return T type only
}

//generics interface

interface halua<T> {
    name: string;
    age: number;
    key: T;
}

function bcd(obj: halua<string>) {}

bcd({ name: "nix", age: 20, key: "1212qdadd2" });


// Class Generics

class Bottle<T> {
    constructor(public key: T) {}
}

let b = new Bottle<string>("hey");



// Type assertion - its is used to assign the type of a value that you know better than TS

let nix:any = 12;

(nix as number)

let a = Number("12") // this is typep casting

// Non null assertion operation !

let c:null | string | undefined;

c = "12"

c! // I gaurantee its not null or undefined


//Typep Gaurds - also type narrowing

/*  if(typeof variable === "string") {
*       here now can access all the methods of that type
*   }
*/

// instanceof

class TVRemote {
    switchTVOff() {
        console.log("off"); 
    }
}

class CarRemote {
    switchCAROff() {
        console.log("off"); 
    }
}

let tv = new TVRemote();
let car = new CarRemote();

function switchOff (device: TVRemote | CarRemote) {
    if(device instanceof TVRemote) {
        console.log(tv.switchTVOff());
        
    } else if (device instanceof CarRemote) {
        console.log(car.switchCAROff());
        
    }
}