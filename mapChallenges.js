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
