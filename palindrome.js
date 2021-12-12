// Solution(s) for checking if a word is a palindrome.

function palindrome(str) {
  const reversed = str.split('').reverse().join('')
  
  if (str == reversed) {
    return "word is a palindrome"
  } else {
    return "word is NOT a palindrome"
  }
}

console.log(palindrome("madam"))