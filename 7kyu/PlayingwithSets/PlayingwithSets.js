let A1 = new Set([1,2,3]), A2 = new Set([3,2,1]), B = new Set([1,2,3,4,5]), X = new Set([1,2,4,5,6,7]);
function isSubsetOf(s1, s2) {
    var count=0;
    for (var elem of s1) {
        if (s2.has(elem)) {
            count++
        }
    }
    if (count==s1.size) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
function isSupersetOf(s1, s2){
    var count=0;
    for (var elem of s2) {
        if (s1.has(elem)) {
            count++
        }
    }
    if (count==s2.size) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
isSubsetOf(A1,A1);
isSupersetOf(A1,B);
!isSupersetOf(A1,X);

/* Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . . 
If every member of set A is also a member of set B, then A is said to be a subset of B, written A ⊆ B (also pronounced "A is contained in B"). Equivalently, we can write B ⊇ A, read as "B is a superset of A", "B includes A", or "B contains A".

Example:
  {1, 3} ⊆ {1, 2, 3, 4}.
  {1, 2, 3, 4} ⊆ {1, 2, 3, 4}.

  {1, 2, 3, 4} ⊇ {1, 3}.
  {1, 2, 3, 4} ⊇ {1, 2, 3, 4}.
Task
Create 2 functions:

isSubsetOf getting 2 sets as arguments and returning true if 2d set contains all elements of 1st one.

isSupersetOf getting 2 sets as arguments and returning true if 1st set contains all elements of 2d one.

Examples:
A = new Set([1,2]);
B = new Set([1,2,3]);

isSubsetOf(A,B) // -> true
isSubsetOf(B,A) // -> false

isSupersetOf(A,B) // -> false
isSupersetOf(B,A) // -> true
 

" May the Code be with you ! "There's more than ONE Set!

FUNDAMENTALSSETSARRAYS
*/