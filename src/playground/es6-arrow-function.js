// function square(x) {
//   return x * x;
// }

// console.log(square(3));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};

console.log(getFirstName("Steven Martins"));

const getFirstNameArrow = (fullName) => fullName.split(" ")[0];

console.log(getFirstNameArrow("Steven Martins"));
