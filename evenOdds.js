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

// console.log(findOdds([1, 4, 5, 8, 9]))

const even = (nums) => {
  let evens = []
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      evens.push(i)
    }
  }
  return evens
}

// console.log(even([1, 2, 3, 4, 5]))

function filterEvens(arr) {
  const evens = arr.filter(num => num % 2 == 0)
  return evens
}

// console.log(filterEvens([11, 12, 13, 15, 144]))

//Random Filter Method

// function numsLargerThan25(arr) {
//   const nums = arr.filter(num => num > 25 && num < 50)
//   return nums
// }

// console.log(numsLargerThan25([11, 3, 54, 26, 11, 15, 12, 24, 52]))