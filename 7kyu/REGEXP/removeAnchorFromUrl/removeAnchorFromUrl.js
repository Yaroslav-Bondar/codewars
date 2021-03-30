function removeUrlAnchor(url) {
    let res = url.match(/.+(?=#)|\w{3}\.\w+\.\w{3}[^#].*/);
    console.log(res[0]);
}
// returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')
// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1') 

/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1') 
FUNDAMENTALSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESSTRINGS */
