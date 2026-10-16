"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//primitive
let a = 20;
// reference
let arr = [];
let tuple = ["23", 23];
//enumerations
var USER_ROLES;
(function (USER_ROLES) {
    USER_ROLES["ADMIN"] = "admin";
    USER_ROLES["GUEST"] = "guest";
})(USER_ROLES || (USER_ROLES = {}));
// any, unknown, void, undefined, null, never
//assign type to datatype
let b = "23";
function getData(obj) {
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
function getAdmin(obj) {
    obj.name;
    obj.password;
    obj.admin;
}
let x;
let obj = {
    name: "nix",
    email: "@gmail",
    getUserData: (username) => {
        console.log(username);
    }
};
function abcd(obj) {
    obj.getUserData("nix");
}
abcd(obj);
//# sourceMappingURL=basic.js.map