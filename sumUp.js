// Print the sum of the numbers from 1-9.
// output should be 45.

function count(n) {
  let sum = 0
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  return sum
}

// console.log(count(11))

// function sum(n) {
//   let total = n.map(val => total += val)
//   }
// }

function sumUp(arr) {
  let total = 0
  for (let i = 0; i < arr; i++) {
    total += i
  }
  return total
}

// console.log(sumUp(1, 2))

function sumUp(n) {
  let sum = 0
  sum = n.map(val => val += sum)
  return sum
}

console.log(sumUp(9))