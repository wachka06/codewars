/***********************************************************************
Simple transposition is a basic and simple cryptography technique.
We make 2 rows and put first a letter in the Row 1, the second in the Row 2,
third in Row 1 and so on until the end. Then we put the text from Row 2 next to the Row 1 text and thats it.

Complete the function that recieves a string and encrypt it with this simple transposition.

Example
For example if the text to encrypt is: "Simple text", the 2 rows will be:

Row 1	S	m	l		e	t
Row 2	i	p	e	t	x

So the result string will be: `"Sml etipetx"`

https://www.codewars.com/kata/simple-transposition/train/javascript
***********************************************************************/

function simpleTransposition(text) {
  let result1 = [];
  let result2 = [];

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (i % 2 === 0) {
      result1.push(char);
    } else {
      result2.push(char)
    }
  }
  return result1.join('') + result2.join('');
}

console.log(simpleTransposition("Sample text")) //=>  "Sml etapetx"
console.log(simpleTransposition("Simple transposition")) //=>  "Sml rnpstoipetasoiin"
console.log(simpleTransposition("All that glitters is not gold")) //=>  "Alta ltesi o odl htgitr sntgl"
console.log(simpleTransposition("The better part of valor is discretion")) //=>  "Tebte ato ao sdsrtoh etrpr fvlri icein"
console.log(simpleTransposition("Conscience does make cowards of us all")) //=>  "Cncec osmk oad fu losinede aecwrso sal"
console.log(simpleTransposition("Imagination is more important than knowledge")) //=>  "Iaiaini oeipratta nwegmgnto smr motn hnkolde"
