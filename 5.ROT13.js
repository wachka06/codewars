/*******************************************************************************
How can you tell an extrovert from an introvert at NSA? Va gur ryringbef,
gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

Examples:

rot13("EBG13 rknzcyr.") == "ROT13 example.";
rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"

https://www.codewars.com/kata/rot13/train/javascript
*******************************************************************************/

// function rot13(str) {
//   let result = ''
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
//   let alphabetCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
//
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i]
//     if (alphabet.includes(char)) {
//       result += alphabet[(alphabet.indexOf(char) + 13) % alphabet.length]
//     } else if (alphabetCap.includes(char)) {
//       result += alphabetCap[(alphabetCap.indexOf(char) + 13) % alphabetCap.length]
//     } else {
//       result += char
//     }
//   }
//   return result
// }

// solution 2

function rot13(str) {
  let result = ''
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    let lowerChar = str[i].toLowerCase()
    if ((alphabet.includes(lowerChar)) && !(alphabet.includes(char))) {
      result += alphabet[(alphabet.indexOf(lowerChar) + 13) % alphabet.length].toUpperCase()
    } else if (alphabet.includes(char)) {
      result += alphabet[(alphabet.indexOf(char) + 13) % alphabet.length]
    } else {
      result += char
    }
  }

  return result
}

console.log(rot13("EBG13 rknzcyr.")) // == "ROT13 example.";
console.log(rot13("This is my first ROT13 excercise!")) // == "Guvf vf zl svefg EBG13 rkprepvfr!"
