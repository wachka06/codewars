/***********************************************************************
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.

https://www.codewars.com/kata/regex-password-validation/train/javascript
***********************************************************************/

function validate(password) {
  if (password.length < 6) {
    return false
  }
  let alphabetU = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let numbers = '0123456789'.split('')
  let countU = 0
  let countL = 0
  let countNum = 0
  for (let i = 0; i < password.length; i++) {
    let char = password[i]
    if (alphabetU.includes(char)) {
      countU += 1
    }
    if (alphabet.includes(char)) {
      countL += 1
    }
    if (numbers.includes(char)) {
      countNum += 1
    }
  }
  if (countU === 0) {
    return false
  }
  if (countL === 0) {
    return false
  }
  if (countNum === 0) {
    return false
  }

  return true
}



console.log(validate('djI38D55')) //=> 'djI38D55 - Expected true'
console.log(!validate('a2.d412')) //=> 'a2.d412 - Expected false'
console.log(!validate('JHD5FJ53')) //=> 'JHD5FJ53 - Expected false'
console.log(!validate('!fdjn345')) //=> '!fdjn345 - Expected false'
console.log(!validate('jfkdfj3j')) //=> 'jfkdfj3j - Expected false'
console.log(!validate('123')) //=> '123 - Expected false'
console.log(!validate('abc')) //=> 'abc - Expected false'
console.log(validate('Password123')) //=> 'Password123 - Expected true'
