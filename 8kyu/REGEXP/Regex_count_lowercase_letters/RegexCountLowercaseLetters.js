function lowercaseCount(str){
    //How many?
    let pat = /[a-z]/g;
    let result = str.match(pat);
    if(str.match(pat) == null){
    	console.log("0");
    	}
    	else {
    		console.log(result);
    		console.log(result.length);
    	}
}
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");

/* Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
FUNDAMENTALSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESSTRINGSALGORITHMS */