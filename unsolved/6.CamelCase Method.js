/***********************************************************************
Write simple .camelCase method (camel_case function in PHP,
CamelCase in C# or camelCase in Java) for strings.
All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

https://www.codewars.com/kata/camelcase-method/train/javascript
***********************************************************************/

String.prototype.camelCase = function() {
  var words = String.split(' ');
  var newStr = '';

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    newStr += newWord;
  }
  return newStr;
}

console.log("test case".camelCase()) //=> "TestCase";
console.log("camel case method".camelCase()) //=> "CamelCaseMethod";
console.log("say hello ".camelCase()) //=> "SayHello";
console.log(" camel case word".camelCase()) //=> "CamelCaseWord";
console.log("".camelCase()) //=> "";
