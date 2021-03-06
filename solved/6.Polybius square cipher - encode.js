/***********************************************************************
Implement the Polybius square cipher.

Replace every letter with a two digit number. The first digit is the row number, and the second digit is the column number of following square. Letters 'I' and 'J' are both 24 in this cipher:

  1	2	3	4	5
1	A	B	C	D	E
2	F	G	H	I/J	K
3	L	M	N	O	P
4	Q	R	S	T	U
5	V	W	X	Y	Z

Input will be valid (only spaces and uppercase letters from A to Z), so no need to validate them.

Examples
polybius('A')  // "11"
polybius('IJ') // "2424"
polybius('CODEWARS') // "1334141552114243"
polybius('POLYBIUS SQUARE CIPHER') // "3534315412244543 434145114215 132435231542"
***********************************************************************/

function polybius (text) {
 let result = '';
 let row1 = 'ABCDE'.split('');
 let row2 = 'FGHIJK'.split('');
 let row3 = 'LMNOP'.split('');
 let row4 = 'QRSTU'.split('');
 let row5 = 'VWXYZ'.split('');

 let column1 = 'AFLQV'.split('');
 let column2 = 'BGMRW'.split('');
 let column3 = 'CHNSX'.split('');
 let column4 = 'DIJOTY'.split('');
 let column5 = 'EKPUZ'.split('');

 for (let i = 0; i < text.length; i++) {
   if (row1.includes(text[i])) {
     result += '1'
   } else if (row2.includes(text[i])) {
     result += '2'
   } else if (row3.includes(text[i])) {
     result += '3'
   } else if (row4.includes(text[i])) {
     result += '4'
   } else if (row5.includes(text[i])) {
     result += '5'
   } if (column1.includes(text[i])) {
     result += '1'
   } else if (column2.includes(text[i])) {
     result += '2'
   } else if (column3.includes(text[i])) {
     result += '3'
   } else if (column4.includes(text[i])) {
     result += '4'
   } else if (column5.includes(text[i])) {
     result += '5'
   } else {
     result += ' '
   }
 }
 return result;
}

console.log(polybius('A'))  // "11"
console.log(polybius('IJ')) // "2424"
console.log(polybius('CODEWARS')) // "1334141552114243"
console.log(polybius('POLYBIUS SQUARE CIPHER')) // "3534315412244543 434145114215 132435231542"
