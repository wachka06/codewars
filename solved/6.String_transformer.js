/***********************************************************************
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
For example:
stringTransformer('Example Input')/string_transformer("Example Input") (depending on the language you are completing the Kata in) should return 'iNPUT eXAMPLE'

You may assume the input only contain English alphabet and spaces.

https://www.codewars.com/kata/string-transformer/train/javascript
***********************************************************************/

function wordTrans(word) {
  let result = ''

  for (let i = 0; i < word.length; i++) {
    let char = word[i]
    if (char === char.toUpperCase()) {
      result += char.toLowerCase()
    } else if (char === char.toLowerCase()) {
      result += char.toUpperCase()
    }
  }
  return result
}

function stringTransformer(str) {
  let words = str.split(' ')
  let result = []

  for (let i = words.length - 1; i >= 0; i--) {
    let word = words[i]
    result.push(wordTrans(word))
  }
  return result.join(' ')
}

console.log(stringTransformer('Example string')) //=> 'STRING eXAMPLE'
