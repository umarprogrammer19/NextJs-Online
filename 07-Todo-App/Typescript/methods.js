"use strict";
const names = ["name1", "name2", "name3", "name4"];
names.splice(2, 1, "new name3");
// console.log(names);
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Ahsen");
greet("Anusha");
