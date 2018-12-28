/***********************************************************************
We want to generate all the numbers of three digits that:

the value of adding their corresponding ones(digits) is equal to 10.

their digits are in increasing order (the numbers may have two or more equal contiguous digits)

The numbers that fulfill the two above constraints are: 118, 127, 136, 145, 226, 235, 244, 334

Make a function that receives two arguments:

the sum of digits value

the amount of desired digits for the numbers

The function should output an array with three values: [1,2,3]

1 - the total amount of all these possible numbers

2 - the minimum number

3 - the maximum numberwith

The example given above should be:

findAll(10, 3) ---> [8, "118", "334"]
If we have only one possible number as a solution, it should output a result like the one below:

findAll(27, 3) ---> [1, "999", "999"]
If there are no possible numbers, the function should output the empty array.

findAll(84, 4) ---> []
The number of solutions climbs up when the number of digits increases.

findAll(35, 6) ---> [123, '116999', '566666']
Features of the random tests:

Numbers of tests: 111
Sum of digits value between 20 and 65
Amount of digits between 2 and 15

https://www.codewars.com/kata/5877e7d568909e5ff90017e6/train/javascript
***********************************************************************/

function findAll(n, k) {
    // your code here
    return [];
}

console.log(findAll(10, 3)) //=> [8, '118', '334']
console.log(findAll(27, 3)) //=> [1, '999', '999']
console.log(findAll(84, 4)) //=> []
console.log(findAll(35, 6)) //=> [123, '116999', '566666']
