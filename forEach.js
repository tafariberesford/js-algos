function evenOddsAfterSquare(arr) {
  let evenNums = []
  let oddNums = []
  const evens = arr.filter(num => num % 2 == 0)
  evenNums.push(evens)
  console.log(evenNums)
}

evenOddsAfterSquare([1, 2, 3, 4, 5, 6])