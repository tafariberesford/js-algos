function factor(arr) {
  const map = arr.map(num => num ** 2)

  const maxNum = Math.max(...map)

  return maxNum
}

console.log(factor([1, 2, 3, 4, 5]))

// for (let i = 0; i <= arr.length; i++) {
//   console.log(i)
// }