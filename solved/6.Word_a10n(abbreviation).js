/***********************************************************************
The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"

https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript
***********************************************************************/

function abbre(word) {
  let wordArr = word.split('-')
  let result = []

  for (let i = 0; i < wordArr.length; i++) {
    let w = wordArr[i]
    if (w.length <= 3) {
      result.push(w)
    } else {
      result.push(w[0] + (w.length -2) + w[w.length - 1])
    }
  }
  return result.join('-')
}

function abbreviate(string) {
  let words = string.split(' ')
  let newStr = []

  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    if (word.length <= 3) {
      newStr.push(word)
    } else if (word.includes('-')) {
      newStr.push(abbre(word))
    } else if (word.includes(',')) {
      newStr.push(word[0] + (word.length - 3)  + word[word.length - 2] + ',')
    } else {
      newStr.push(word[0] + (word.length - 2)  + word[word.length - 1])
    }
  }
  return newStr.join(' ')
}

console.log(abbreviate("internationalization")) //=>  "i18n"
console.log(abbreviate("accessibility")) //=>  "a11y"
console.log(abbreviate("Accessibility")) //=>  "A11y"
console.log(abbreviate("elephant-ride")) //=>  "e6t-r2e"
