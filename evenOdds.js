// Upon entering a number value, the function should return whether the input (n) is even or odd.

function evenOdds(n) {
  if (n % 2 == 0) {
    return "even"
  } else {
    return "odd"
  }
}

console.log(evenOdds(1))