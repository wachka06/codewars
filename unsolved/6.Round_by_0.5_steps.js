/***********************************************************************
Round any given number to the closest 0.5 step
I.E.
solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5
Round up if number is as close to previous and next 0.5 steps.

solution(4.75) == 5

https://www.codewars.com/kata/51f1342c76b586046800002a/train/javascript
***********************************************************************/

function solution(n){
  let num = String(n)
  num = num.split('.')

}

console.log(solution(4.2)) //=> 4
console.log(solution(4.4)) //=> 4.5
console.log(solution(4.6)) //=> 4.5
console.log(solution(4.8)) //=> 5
