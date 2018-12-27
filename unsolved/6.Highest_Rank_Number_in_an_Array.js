/***********************************************************************
Write a method highestRank(arr) (or highest-rank in clojure) which returns the number which is most frequent in the given input array (or ISeq). If there is a tie for most frequent number, return the largest number of which is most frequent.

Example:

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
highestRank(arr) //=> returns 3

https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
***********************************************************************/

function highestRank(arr){
  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (obj[num] === undefined) {
      obj[num] = 1
    } else {
      obj[num] += 1
    }
  }

  // console.log(obj)
  let max = null
  let maxNum = null

  for (let num in obj) {
    let val = obj[num]
    if (max === null || max <= val) {
      max = val
      maxNum = num
    }
  }
  return Number(maxNum)
}

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log(highestRank(arr)) //=> returns 12

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
console.log(highestRank(arr)) //=> returns 12

arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
console.log(highestRank(arr)) //=> returns 3
