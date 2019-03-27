/***********************************************************************
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

https://www.codewars.com/kata/simple-pig-latin/train/javascript
***********************************************************************/

function changeWord(word) {
  var newWord = '';

  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    if (i === 0) {
      continue;
    } else {
      newWord += char;
    }
  }
  return newWord + word[0] + 'ay';
}

function pigIt(str){
  var newStr = [];
  var words = str.split(' ');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var newWord = changeWord(word);
    newStr.push(newWord);
  }
  return newStr.join(' ');
}
