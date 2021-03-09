function abbrevName(strStart){
    let strEnd = strStart[0] + "." + strStart[strStart.indexOf(" ") + 1];
    console.log(strEnd.toUpperCase());        
}
abbrevName("Sam harris");