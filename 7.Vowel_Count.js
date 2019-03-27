/***********************************************************************
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

https://www.codewars.com/kata/vowel-count/train/javascript
***********************************************************************/

function getCount(str) {
  let vowelsCount = 0
  let vowels = 'aeiou'.split('')

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (vowels.includes(char)) {
      vowelsCount += 1
    }
  }

  return vowelsCount
}

console.log(getCount("abracadabra")) //=> 5
