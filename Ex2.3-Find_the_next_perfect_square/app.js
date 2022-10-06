/*
-------- Ex2.3 - Find the Next Perfect Square -------- 
You might know some pretty large perfect squares. 
But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square after the one
passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is
also an integer.
If the parameter is itself not a perfect square then -1 should be returned. 
You may assume the parameter is positive.
Examples:
findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect
*/

const findNextSquare = (num) => {
    let sqrt = Math.sqrt(num);
    let next = sqrt + 1;
    let res = Math.pow(next, 2);
    if (Number.isInteger(sqrt) === false) {
        return -1;
    } else {
        return res;
    }
};

// Test Ex2.3
findNextSquare(121); // Output: 144
findNextSquare(625); // Output: 676
findNextSquare(114); // Output: -1
