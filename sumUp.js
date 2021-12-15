// Print the sum of the numbers from 1-9.
// output should be 45.

function count(n) {
  let sum = 0
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  return sum
}

console.log(count(9))