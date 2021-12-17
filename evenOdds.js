// Upon entering a number value, the function should return whether the input (n) is even or odd.

function evenOdds(n) {
  if (n % 2 == 0) {
    return "even"
  } else {
    return "odd"
  }
}

// console.log(evenOdds(1))

function findOdds(arr) {
  let odds = []
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      odds.push(i)
    }
  }
  return odds
}

console.log(findOdds([1, 4, 5, 8, 9]))

