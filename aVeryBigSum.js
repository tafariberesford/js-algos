function aVeryBigSum(ar) {
  // Write your code here
  const sum = ar.reduce((prevSum, currentSum) => prevSum + currentSum, 0)
  return sum
}

console.log(aVeryBigSum([1, 2, 3, 4, 5]))