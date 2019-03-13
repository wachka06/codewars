/***********************************************************************
You are given a message (text) that you choose to read in a mirror (weirdo).
Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:
*********
* olleH *
* dlroW *
*********

Words in your solution should be left-aligned.

https://www.codewars.com/kata/framed-reflection/train/javascript
***********************************************************************/

function mirror(text){
  let arr = text.split(' ')
  let longest = null


  for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
    if (longest === null || countLetter(word) > longest) {
      longest = countLetter(word)
    }
  }

  longest = longest + 2
  // console.log(longest)

}

function countLetter(word) {
  let count = 0

  for (let i = 0; i < word.length; i++) {
    count += 1
  }
  return count
}

console.log(mirror('Hello World')) //=>  '*********\n* olleH *\n* dlroW *\n*********'
console.log(mirror('Codewars')) //=>  '************\n* srawedoC *\n************'
