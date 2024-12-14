"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [1, 2, 3, 4];
console.log(arr[0]);
let [a, b, c, d] = [1, 2, 3, 4];
console.log(a);
const obj = {
    name: "umar",
    rollNo: 1,
};
console.log(obj.name, obj.rollNo);
const { name, rollNo } = {
    name: "umar",
    rollNo: 1,
};
console.log(name);
console.log(rollNo);
const names = ["umar", "ahsen", "nabeel", "ifra", "anusha", "rimsha", "jiya", "bisma", "sikandar", "fatima", "sumbul"];
names.map((val) => {
    console.log(val);
});
// names.push("abcd");
// names.splice(4,1,"abcd")
// console.log(names);
let num = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [...num, ...num2];
console.log(num3);
