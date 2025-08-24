//👉 Use reduce to find the largest number in the array.
let arr = [3, 9, 2, 7]  // → 9

const max = arr.reduce((acc, curr) => curr > acc ? curr : acc);

console.log(max);

//👉 Turn an array of arrays into a single flat array.

// const arrayOfArrays = [[1, 2], [3, 4], [5]]  // → [1, 2, 3, 4, 5]

// const result = arrayOfArrays.reduce((acc, curr) => {
//     return acc.concat(curr);
// },[]);

// console.log(result);

//👉 Count how many times each item appears.

// const groceryList = ['apple', 'banana', 'apple', 'orange', 'banana']  
// // → { apple: 2, banana: 2, orange: 1 }

// const fruitObj = groceryList.reduce((acc, curr) => {
//     if (acc[curr]) {
//         acc[curr] += 1;
//     } else {
//         acc[curr] = 1;
//     } return acc;
// }, {});

// console.log(fruitObj);