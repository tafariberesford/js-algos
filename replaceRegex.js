function correct(string) {
  return string.replace(/0/g, "O").replace(/5/g, "S").replace(/1/g, "I");
}

// console.log(correct("1 want 0ne of the skittle5."))

function correction(string) {
  return string.replace(/1/g, "one").replace(/3/g, "four")
}

// console.log(correction("I have 1. Do you have 3 or more?"))

let nameArr = ["Janice", "Slly", "Jacob"]

const updated = nameArr.map(letter => letter.replace(/a/g, "@"))

console.log(updated.toString())