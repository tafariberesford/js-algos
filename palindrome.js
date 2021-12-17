// Solution(s) for checking if a word is a palindrome.

function palindrome(str) {
  // Setting the str to lowercase makes it case insenstive
  str = str.toLowerCase()
  const reversed = str.split('').reverse().join('')
  
  if (str == reversed) {
    return "word is a palindrome"
  } else {
    return "word is NOT a palindrome"
  }
}

// console.log(palindrome("Madam"))

function checkPalindrome(word) {
  word = word.toLowerCase()
  const reverse = word.split('').reverse().join('')

  if (word == reverse) {
    return true
  } else {
    return false
  }
}

// console.log(checkPalindrome("Madam"))