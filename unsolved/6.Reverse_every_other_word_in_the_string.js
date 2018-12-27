/***********************************************************************
Reverse every other word in a given string, then return the string.
Throw away any leading or trailing whitespace,
while ensuring there is exactly one space between each word.
Punctuation marks should be treated as if they are apart of the word in this kata.

https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
***********************************************************************/

function revWord(word) {
  let result = ''

  for (let i = word.length - 1; i >= 0; i--) {
    let char = word[i]
    result += char
  }
  return result
}

function reverse(str){
  let words = str.split(' ')
  let result = []

  for (let i = 0; i < words.length; i++) {
    if (i % 2 !== 0) {
      result.push(revWord(words[i]))
    } else {
      result.push(words[i])
    }
  }
  if (result === '   ') {
    return ''
  }

  return result.join(' ')
}

console.log(reverse("Reverse this string, please!")) //=>  "Reverse siht string, !esaelp")
console.log(reverse("I really don't like reversing strings!")) //=> "I yllaer don't ekil reversing !sgnirts")
