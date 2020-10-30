var nameVar = "Steven";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Joe";
nameLet = "Tony";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block scoping

const fullName = "Steven Martins";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
