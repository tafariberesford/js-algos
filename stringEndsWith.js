// function solution(str, ending) {
//   // Use charAt() method & str.length - 1 to access the character at the end of both arguments
//   // if statement to return true if the ending matches
//   if (str.charAt(str.length - 1) == ending.charAt(ending.length - 1)) {
//     return true
//   } else return false
// }

// console.log(solution("Happy", "Day"))

function solution(str, ending){
  return str.endsWith(ending)
}

console.log(solution("sumo", "tsmo"))