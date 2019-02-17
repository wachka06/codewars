/***********************************************************************
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters.
The tension between left side letters and right side letters was too high and the war began.
The letters called airstrike to help them in war - dashes and dots are spreaded everywhere on the battlefield.

Task
Write a function that accepts fight string consists of only small letters and * which means a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:
 w - 4
 p - 3
 b - 2
 s - 1

The right side letters and their power:
 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.
The * bombs kills the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/javascript
***********************************************************************/

function alphabetWar(fight) {
  let left = {
     w:4,
     p:3,
     b:2,
     s:1,
  }
  let right = {
     m:4,
     q:3,
     d:2,
     z:1,
  }
  let countL = 0
  let countR = 0

  for (let i = 0; i < fight.length; i++) {
    let char = fight[i]
    if (left[char] !== undefined &&(fight[i - 1] !== '*' && fight[i + 1] !== '*')) {
      countL += left[char]
    } else if (right[char] !== undefined &&(fight[i - 1] !== '*' && fight[i + 1] !== '*')) {
      countR += right[char]
    }
  }

  if (countL > countR) {
    return "Left side wins!"
  } else if (countR > countL) {
    return "Right side wins!"
  } else {
    return "Let's fight again!"

  }
}


console.log(alphabetWar("z")) //=> "Right side wins!"
console.log(alphabetWar("****")) //=> "Let's fight again!"
console.log(alphabetWar("z*dq*mw*pb*s")) //=>"Let's fight again!"
console.log(alphabetWar("zdqmwpbs")) //=>"Let's fight again!"
console.log(alphabetWar("zz*zzs")) //=>"Right side wins!"
console.log(alphabetWar("sz**z**zs")) //=>"Left side wins!"
console.log(alphabetWar("z*z*z*zs")) //=>"Left side wins!"
console.log(alphabetWar("*wwwwww*z*")) //=>"Left side wins!"
