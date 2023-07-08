var aaa = 5;

// let aaaaa = 10;
// function print() {
//     let num = 4;
//     console.log(num);
// }
// print();

let john = {
    name: "John"
}

let james = {
    name: "James"
}
let age = 45;
function sayHello() {
    console.log("Hello", this.age);
}

sayHello();

const print = () => {
   console.log(this.age)
}
print();