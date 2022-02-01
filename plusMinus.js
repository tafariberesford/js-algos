function plusMinus(arr) {
  let positives = 0
  let negatives = 0
  let zeros = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives++
    } else if (arr[i] == 0) {
      zeros++
    } else if (arr[i] < 0) {
      negatives++
    }
  }

  const positiveRatio = positives % arr.length
  const negativeRatio = negatives % arr.length
  const zeroRatio = zeros % arr.length

  return positives, zeros, negatives

}

console.log(plusMinus([1, 2, -1, -4, 12, 0]))