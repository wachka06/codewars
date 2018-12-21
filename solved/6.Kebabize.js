/***********************************************************************
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters

https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
***********************************************************************/

function kebabize(str) {
  let result = ''
  let numbers = '1234567890'.split('')
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (!numbers.includes(char)) {
    if (char === char.toUpperCase() && i !== 0) {
      result += '-' + char.toLowerCase()
    } else {
      result += char.toLowerCase()
    }
    }
  }
  return result
}

console.log(kebabize('myCamelCasedString')) //=> 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps')) //=> 'my-camel-has-humps');
