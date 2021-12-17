const nums = [1, 3, 6, 9, 12]

const squaring = nums.map(val => val ** 2)

// function square(val) {
//     let squared = nums.map(val => val ** 2)
//     return squared
// }

// const squared = function(val) {
//     let square = nums.map(val => val ** 2)
//     return square
// }

const squared = nums.map(function(val) {
  return val ** 2
})


/*Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

const uppercase = names.map(function(name) {
    return name[0].toUpperCase() + name.slice(1)
})

// console.log(uppercase)

const capital = names.map((name) => name[0].toUpperCase() + name.slice(1))

const firstNames = ["Julie", "Sam"]

function lowercase() {
  const lower = firstNames.map(name => name[0].toLowerCase() + name.slice(1))
  return lower
}

console.log(lowercase())