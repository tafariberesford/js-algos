// function reverseInt(n) {
//   let num = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('')

//   num = parseInt(num)

//   if (n < 0) {
//     return num * -1
//   }

//   return num
// }
// console.log(reverseInt(-12))

function reverseInteger(n) {
  n = n
    .toString()
    .split('')
    .reverse()
    .join('')
  return n
}

// console.log(reverseInteger(32))