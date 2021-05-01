// let group = {
//     ATF6: "TGACGT",
//     CREB: "TGACGCA",
//     cMyc: "CACGTG",
//     Gata1: "GATT",
//     AhR: "TGCGTG", 
// }
let group = {
    ATF6: /TGACGT/g,
    CREB: /TGACGCA/g,
    cMyc: /CACGTG/g,
    Gata1: /GATT/g,
    AhR: /TGCGTG/g, 
}  
function transFactors(seq) {
    let res = {}
    // let strn = group.ATF6
    // console.log(seq.match(group.ATF6))
    for (const key in group) {
        res[key] = []
        while (result = group[key].exec(seq)) {
            res[key].push(result.index) 
            console.log( `Найдено ${result[0]} на позиции ${result.index}` );
            console.log( `lastIndex ${result[0]} на позиции ${group[key].lastIndex}` );
            group[key].lastIndex = result.index + result[0].length
        // Найдено JavaScript на позиции 9, затем
        // Найдено javascript на позиции 31
      }
    // return res;
    }
    console.log(res)    
}
transFactors("TGACGFGACGT");
// { ATF6: [ 1, 6 ] }