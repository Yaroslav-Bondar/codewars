function polybius (text) {
    let matrix = [
                    ['A', 'B', 'C', 'D', 'E'],
                    ['F', 'G', 'H',	'I/J','K'],
                    ['L', 'M', 'N', 'O', 'P'],
                    ['Q', 'R', 'S',	'T', 'U'],
                    ['V', 'W', 'X',	'Y', 'Z']
                ];
    console.log(text.split('').reduce((code, val) => {
        if (val === 'J' || val === 'I') {
            code += '2' + '4';
        }
        if (val === ' ') {
            code += ' ';
        } 
        else {
            matrix.forEach((item, i) => {
                if (item.includes(val)) {
                    code += (1 + i).toString() + (1 + item.indexOf(val)).toString();
                }
            });
        }
        return code;
    },''));
}
polybius('JC');
// polybius('CODEWARS');

/* Description:
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
ALGORITHMSCRYPTOGRAPHYSECURITYCIPHERSENCODING */