/***********************************************************************
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
Go challenge Build Tower Advanced once you have finished this :)

https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
***********************************************************************/

function towerBuilder(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {

    }
  }
}

console.log(towerBuilder(1)) //=> ["*"]
console.log(towerBuilder(2)) //=> [" * ","***"]
console.log(towerBuilder(3)) //=> ["  *  "," *** ","*****"]
