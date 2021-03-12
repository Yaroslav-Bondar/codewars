function restaurant(a,b,t) {
    let double = [], res;
    for (let i = 0; i < b; i++) {    // form double seats
        double.push(2);
    }
    res = t.reduce((count, val) => {      // counting the number of refusals
        if (val == 1 && a > 0) {
            a = a - 1;
        } 
        else if ((a == 0 && val == 1) && (double.includes(2) || double.includes(1))) {
            if (double.includes(1)) {
                double[double.indexOf(1)]--;  
            } 
            else if (double.includes(2)) {
                double[double.indexOf(2)]--;  
            }
        }
        else if ((a == 0 && val == 1)) {
            count++;
        }
        if (val == 2) {
            if (double.includes(2)) {
                double[double.indexOf(2)] = double[double.indexOf(2)] - 2;  
            }
            else {
                count += 2;
            }
        }
        return count;
    }, 0);
    console.log(res);
}
restaurant(0, 2, [1,1,2]);
// restaurant(2, 1, [2, 1, 2, 2, 2, 2, 1, 2, 1, 2]);
// restaurant(1, 1, [1, 1, 2, 1]);
// restaurant(1, 2, [1, 2, 1, 1]);

/* https://www.codewars.com/kata/598c1bc6a04cd3b8dd000012/javascript

Description:
 In a small restaurant there are A tables for one person and B tables for two persons.
 It it known that N groups of people come today, each consisting of one or two people.

 If a group consist of one person, it is seated at a vacant one-seater table. If there are none of them, it is seated at a vacant two-seater table. If there are none of them, it is seated at a two-seater table occupied by single person. If there are still none of them, the restaurant denies service to this group.
 If a group consist of two people, it is seated at a vacant two-seater table. If there are none of them, the restaurant denies service to this group.

 You are given a chronological order of groups coming. You are to determine the total number of people the restaurant denies service to.

Input:
 Input contains two integers A and B — the number of one-seater and the number of two-seater tables, and a array of integers t1, t2, ..., tN (1 ≤ ti ≤ 2) — the description of clients in chronological order. If ti is equal to one, then the i-th group consists of one person, otherwise the i-th group consists of two people.

Output:
 Return the total number of people the restaurant denies service to.

Examples:

(1, 2, [1, 2, 1, 1])  =>  0
(1, 1, [1, 1, 2, 1])  =>  2
Note:
 In the first example the first group consists of one person, it is seated at a vacant one-seater table. The next group occupies a whole two-seater table. The third group consists of one person, it occupies one place at the remaining two-seater table. The fourth group consists of one person, he is seated at the remaining seat at the two-seater table. Thus, all clients are served.
 In the second example the first group consists of one person, it is seated at the vacant one-seater table. The next group consists of one person, it occupies one place at the two-seater table. It's impossible to seat the next group of two people, so the restaurant denies service to them. The fourth group consists of one person, he is seated at the remaining seat at the two-seater table. Thus, the restaurant denies service to 2 clients.

(c)KAN

ALGORITHMS */
