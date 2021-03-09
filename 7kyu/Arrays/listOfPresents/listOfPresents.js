function howManyGifts(max, g) {
    let count = 0;
    if (max == 0) {
        return 0;
    }
    else if (max >= g.reduce((sum, item) => sum + item)) {
        return g.length;
    }  
    else {
        g.sort((a, b) => a - b);
        for (let i = 0; i <= g.length; i++) {
            if (count > max) {
                console.log(i - 1);
                break;
            } else {
                count += g[i]; 
            }
        }
    }
}
howManyGifts(20, [13, 2, 4, 6, 1]);
/* Description:
Task:
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write the following function to help Leo out:

function howManyGifts(maxBudget, gifts)
The first parameter is Leo's budget; he second one is an array (a list in Groovy) containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

FUNDAMENTALSARRAYSLISTSDATA STRUCTURESLOOPSCONTROL FLOWBASIC LANGUAGE FEATURESALGORITHMS */