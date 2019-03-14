/***********************************************************************
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

https://www.codewars.com/kata/reverse-words/train/javascript
***********************************************************************/



function reverseWords(str) {
  let wordArr = str.split(' ')
  let result = []

  for (let i = 0; i < wordArr.length; i++) {
    result.push(reverseWord(wordArr[i]))
  }
  return result.join(' ')
}

function reverseWord(word) {
  let result = ''

  for (let i = word.length -1; i >= 0; i--) {
    result += word[i]
  }
  return result
}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.')) //=> 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple')) //=> 'elppa'
console.log(reverseWords('a b c d')) //=> 'a b c d'
console.log(reverseWords('double  spaced  words')) //=> 'elbuod  decaps  sdrow'
