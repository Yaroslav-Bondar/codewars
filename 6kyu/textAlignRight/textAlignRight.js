function alignRight(text, width){
    let arr = text.split(' '), res, res2 = [], sum = 0; 
    var j = 0;
    arr = arr.map((item, i, ar) => {
        if (i != ar.length - 1) {
           return item + ' ';
        }
        else {
            return item;
        }
    });
    function getSum(arr) {       // get the length of the strings of array elements
        return arr.reduce((len, item) => {return len += item.length}, 0);   
    } 
    res = arr.reduce((prev, val, i, array) => {
        sum = getSum(prev[j]);
        if (sum + val.length == width || width - (sum + val.length) == -1 && i != array.length - 1) {
            prev[j].push(val.trim());
        }
        else if (sum + val.length < width) {
            prev[j].push(val);
        }
        else {
            prev[j][prev[j].length - 1] = prev[j][prev[j].length - 1].trim();
            prev.push([]);
            j++;
            prev[j].push(val);
            sum = 0;
        }
        return prev;
    }, [[]]);
    sum = 0;
    res2 = res.reduce((str, val, i) => {             // add the required number of spaces on the left to each line + end-of-line character "\n"         
        sum = getSum(val);
        if (sum < width) {
            for (let i = width - sum; i > 0; i--) {
                str += ' ';
            }
            str += val.join('');
        } 
        else {
            str += val.join('');
        }
        if (i != res.length -1)
            str += '\n';
        sum = 0;
        return str;
    },'');
    console.log(res2);
}
// alignRight("Two lines, I am", 10);
alignRight("I take up the whole line", 24);
// alignRight("abc def", 8);

/* Description:
Your task in this Kata is to emulate text justify right in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

Here are the rules:

Use spaces to fill in the gaps on the left side of the words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Gap between words can't differ by more than one space.
Lines should end with a word not a space.
'\n' is not included in the length of a line.
Last line should not contain '\n'
Example with width=30:

        Bacon ipsum dolor amet
excepteur ut kevin burgdoggen,
   shankle cupim dolor officia
       ground round id ullamco
   deserunt nisi. Commodo tail
    qui salami, brisket boudin 
tri-tip. Labore flank laboris,
  cow enim proident aliqua sed
      hamburger consequat. Sed
     consequat ut non bresaola
   capicola shoulder excepteur
 veniam, bacon kevin. Pastrami
   shank laborum est excepteur
 non eiusmod bresaola flank in
nostrud. Corned beef ex pig do
   kevin filet mignon in irure
 deserunt ipsum qui duis short
        loin. Beef ribs dolore
  meatball officia rump fugiat
  in enim corned beef non est.
If you enjoyed this one and want more of a challenge try https://www.codewars.com/kata/text-align-justify/python

If you like bacon ipsum https://baconipsum.com

ALGORITHMSSTRINGSFORMATTING */