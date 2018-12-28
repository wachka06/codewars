/***********************************************************************
Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number

https://www.codewars.com/kata/5318f00b31b30925fd0001f8/train/javascript
***********************************************************************/

var numberToPrice = function(number) {
  if (Number(number) === NaN) {
    return 'NaN'
  }

  let numArr = String(number)
  numArr = numArr.split('.')

  let result = ''
  let str = numArr[0].split('').reverse().join('')
  for (let i = 0; i < str.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      result += ',' + str[i]
    } else {
      result += str[i]
    }
  }
  result = result.split('').reverse().join('')

  return result + '.' + numArr[1]
}

console.log(numberToPrice(1500.129)) //=>  '1,500.12'
console.log(numberToPrice(-5)) //=>         '-5.00'
console.log(numberToPrice(1000000.5)) //=>  '1,000,000.50'
console.log(numberToPrice('@')) //=>        'NaN'
