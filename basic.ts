//primitive
let a = 20;
// reference
let arr = [];
let tuple: [string, number] = ["23", 23];

//enumerations
enum USER_ROLES {
    ADMIN = "admin",
    GUEST = "guest",
}

// any, unknown, void, undefined, null, never

//assign type to datatype
let b: string = "23";

/**
 * Any - let a
 * didnt tell the type and not initialized
 */

/**
 * Unknown
 * let a:unknown;
 * a = 12;
 * a = "Nix"
 *
 * a.toUpperCase(); --> this is wrong
 * in unknown we can assing values of any type but we have to explicitly tell in what case we should run this method etc
 * example : if(typeOf a === "String") a.toUpperCase();
 */

/**
 * Void - When a funtion does not return anything that functions return type is void
 * function fn ():void {}
 */

/**
 * Never - a tye of funtion that never return anything and dont let code run after it.
 * function fn ():never {
 *  while(true) {
 *      }
 * }
 */

// Type inference
/**
 * when variable assign the datatype on their own without explicitly assigned by pragrammer
 */

// Type Annotation
/**
 * Assigning a type to variable is Annotation
 * example: let a:number;
 *          let b:number | string; (later in the course)
 */

// Interface

//example

interface User {
    name: string;
    email: string;
    password: string;
    gender?: string; // This is optional
}

function getData(obj: User) {
    //obj. we get nothing cuz we dont know what obj will have in that case interface comes in the role to structure.
    obj.name;
}

getData({ name: "Nix", email: "nix@gmail", password: "122344" });
getData({
    name: "Nix",
    email: "nix@gmail",
    password: "122344",
    gender: "Male",
});

// Extend interface

interface User {
    name: string;
    email: string;
    password: string;
}

interface Admin extends User {
    admin: boolean;
}

function getAdmin(obj: Admin) {
    obj.name;
    obj.password;
    obj.admin;
}

// Types Aliases
/**
 * It used to create user defined type for variables
 */

//example

type value = string | number | null;

let x: value;

// Union And Intersection

// Union - let a: string | number;    "|" is union

// intersection - jitna samaj aya utna lelo baki badmne dekhna

//example

type IUser = {
    name: string;
    email: string;
};

type IAdmin = IUser & {
    getUserData: (username: string) => void;
};

let obj = {
    name: "nix",
    email: "@gmail",
    getUserData: (username: string) => {
        console.log(username);
        
    }
}



function abcd (obj: IAdmin) {
    obj.getUserData("nix")
}


abcd(obj)

