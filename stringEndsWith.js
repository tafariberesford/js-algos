function solution(str, ending) {
  if (str.charAt(str.length - 1) == ending.charAt(ending.length - 1)) {
    return true
  } else return false
}

console.log(solution("Happy", "Day"))