/***********************************************************************
This is the first part. You can solve the second part here
when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!

https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript
***********************************************************************/
 
function multiply(a, b) {
  let num1 = Number(a)
  let num2 = Number(b)

  let product = String(num1 * num2)
  if (product.includes('.')) {
    let idx = product.indexOf('.')
    return product.slice(0, idx) + product.slice(idx + 1)
  }
  return product
}

console.log(multiply("2", "3"))   //=> "6"
console.log(multiply("30", "69"))   //=> "2070"
console.log(multiply("11", "85"))   //=> "935"

console.log(multiply("2" ,"0"))   //=> "0"
console.log(multiply("0", "30"))   //=> "0"
console.log(multiply("0000001", "3"))   //=> "3"
console.log(multiply("1009", "03"))   //=> "3027"
