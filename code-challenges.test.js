// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// describe("arrayDeleteShuffle", () => {
//   it("takes in an array, removes the first item from the array and shuffles the remaining items," () => {
//     const colors1 = ["purple", "blue", "green", "yellow", "pink"]
//     // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
//     const colors2 = [
//       "chartreuse",
//       "indigo",
//       "periwinkle",
//       "ochre",
//       "aquamarine",
//       "saffron"
//     ]
//     expect(arrayDeleteShuffle
//   })
// })
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// // b) Create the function that makes the test pass.

// // Pseudo code:


// const shuffledArray = arrayDeleteShuffle(inputArray)

// const arrayDeleteShuffle = (arr) => {
//   if (arr.length ,= 1) {
//     return arr
//   }
//   const [removedItem, ...rest] = arr
//   for (let i = rest.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random()* (i +i))
//     [rest[i], rest[j]] = [rest[j], rest[i]]
//   }
//   return [removedItem, ...rest]
// }

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe('calculateTally', () => {
  it("should calculate the tally correctly when upVotes are greater than downVotes", () => {
    const votes = { upVotes: 13, downVotes: 2 }
    const result = calculateTally(votes)
    expect(result).toBe(11)
  })

  it("should calculate the tally correctly when downVotes are greater than upVotes", () => {
    const votes = { upVotes: 2, downVotes: 33 }
    const result = calculateTally(votes)
    expect(result).toBe(-31)
  })
})

// b) Create the function that makes the test pass.


/*Pseudo code:
name: calculateTally
input: an object called votes
output: a number which is the tally
processs: It takes in an object called votes, it extracts the upVotes and the downVotes from it, it calculates the tally by subtracting downVotes from upVotes, and returns the tally.
*/


const calculateTally = (votes) => {
  const { upVotes, downVotes } = votes
  return upVotes - downVotes
}
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe('mergeArrays', () => {
  it('should merge arrays and remove duplicates', () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    const expectedOutput = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(mergeArrays(dataTypesArray1, dataTypesArray2)).toEqual(expectedOutput);
  });
});

// b) Create the function that makes the test pass.
// 
//Pseusdo code:
//name: mergeArrays
//input: two arrays
//output: one array with no duplicate values
//process: It takes in two arrays, it merges the arrays, it removes the duplicates, and returns the array with no duplicate values.

const mergeArrays = (...arrays) => {
  const mergedArray = [].concat(...arrays);
  return [...new Set(mergedArray)];
};
