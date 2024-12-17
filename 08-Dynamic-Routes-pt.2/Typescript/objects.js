var a = [1, 2, 3, 4, 5, 6];
// let user = {
//     name: "Umar",
//     age: 17,
//     email: "umar@gmail.com"
// }
// console.log(user.age);
var users = [{
        name: "Umar",
        age: 17,
        email: "umar@gmail.com"
    }, {
        name: "Ahsen",
        age: 18,
        email: "ahsen@gmail.com"
    }, {
        name: "sikandar",
        age: 21,
        email: "sk@gmail.com"
    }];
users.map(function (user) {
    console.log(user.email);
});
