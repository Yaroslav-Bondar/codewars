var A = new Set([1,2]), B = new Set([2,3]), C = new Set([2]),AB = inter(A,B);
function inter(s1, s2){
    var s3 = new Set();
    for (var item of s1) {
        console.log(item);
        if (s2.has(item)) {
            s3.add(item);
        }
    }
    return s3;    
}
inter(A,A);

/* Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .
A new set can be constructed by determining which members two sets have "in common". The intersection of A and B, denoted by A ∩ B, is the set of all things that are members of both A and B. If A ∩ B = ∅, then A and B are said to be disjoint.

Examples:
  {1, 2} ∩ {1, 2} = {1, 2}.
  {1, 2} ∩ {2, 3} = {2}.
Task
Create function inter getting 2 sets as arguments and returning a new Set as result of intersection of these 2 sets.

Examples:
A = new Set([1,2]);
B = new Set([2,3]);

C = inter(A,B) // -> {2}
 

" May the Code be with you ! "There's more than ONE Set!

FUNDAMENTALSSETSARRAYS */