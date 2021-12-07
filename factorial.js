function extraLongFactorials(n) {
  if (n == 0) {
    return 1
  }
  return n * extraLongFactorials(n - 1)

}

// console.log(extraLongFactorials(25))