function sortCsvColumns(csvFileContent) {
    let tmpArr, resStr = '', arr =[];
    tmpArr = csvFileContent.split('\n');            // разбиваем строку на массив строк 
    for (let i = 0; i < tmpArr.length; i++) {       // разбиваем массивы строк на елементы состоящие из слов разделенных знаком ";" 
        tmpArr[i] = tmpArr[i].split(';');
    }
    for (let i = 0; i < tmpArr[0].length; i++) {    // формируем исходный формат массива для сортировки и заполняем названия столбцов
        arr.push([tmpArr[0][i],[]]);
    }
    for (let i = 1; i < tmpArr.length; i++) {          // заполняем значения строк для соответствующих столбцов
        for (let j = 0; j < tmpArr[i].length; j++) {
            arr[j][1].push(tmpArr[i][j]);
        }
    }
    // сортируем
    arr.sort(function(a, b) {       
        if (a[0].toLowerCase() > b[0].toLowerCase())
            return 1;
        if (a[0].toLowerCase() == b[0].toLowerCase())
            return 0;
        if (a[0].toLowerCase() < b[0].toLowerCase())
            return -1;
    });
    // формируем строку ответа
    arr.forEach((item, i) => {
        resStr += item[0];
        if (i < arr.length - 1) {
            resStr += ';';
        } else {
            resStr += '\n';
        } 
    });
    for (let i = 0; i < arr[0][1].length; i++) {
        for (let j = 0; j < arr.length; j++) {
            resStr += arr[j][1][i];
            if (j == arr.length - 1  && i != arr[0][1].length - 1) {
                resStr += '\n';
            }
            else if (j != arr.length - 1) {
                resStr += ';';
            }
        }
    }
    console.log(resStr);
}
let csvFileContent = "myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n"
                   + "17945;10091;10088;3907;10132\n"
                   + "2;12;13;48;11";
// let csvFileContent = "IronMan;Thor;Captain America;Hulk\n"
//                     + "arrogant;divine;honorably;angry\n"
//                     + "armor;hammer;shield;greenhorn\n"
//                     + "Tony;Thor;Steven;Bruce";
sortCsvColumns(csvFileContent);
/* #Sort the columns of a csv-file

You get a string with the content of a csv-file. The columns are separated by semicolons.
The first line contains the names of the columns.
Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.

An example:

Before sorting:
As table (only visualization):
|myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
|17945       |10091    |10088  |3907   |10132          |
|2           |12       |13     |48     |11             |

The csv-file:
myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
17945;10091;10088;3907;10132\n
2;12;13;48;11

----------------------------------

After sorting:
As table (only visualization):
|Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
|3907   |17945       |10091    |10088  |10132          |
|48     |2           |12       |13     |11             |

The csv-file:
Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
3907;17945;10091;10088;10132\n
48;2;12;13;11
There is no need for prechecks. You will always get a correct string with more than 1 line und more than 1 row. All columns will have different names.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

ALGORITHMSBASIC LANGUAGE FEATURESFUNDAMENTALSMATHEMATICSNUMBERSSTRINGSARRAYS */