function factor(arr) {
  const map = arr.map(num => num ** 2)

  const maxNum = Math.max(...map)

  return maxNum
}

// console.log(factor([1, 2, 3, 4, 5]))

// for (let i = 0; i <= arr.length; i++) {
//   console.log(i)
// }

// -- Create a function which takes an argument - array of integers. The new array should putput the largest element from each array.

function largestNums(arr) {
  const largest = Math.max(...arr)
  return largest
}

console.log(largestNums([1, 2, 3, 4]))