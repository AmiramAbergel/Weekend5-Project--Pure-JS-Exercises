/*
-------- Ex2.4 - Unique -------- 
There is an array with some numbers. 
All numbers are equal except for one. 
Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
*/

const findUniq = (arr) => {
    const res = arr.sort((a, b) => {
        return a - b;
    });
    let resLastElement = res[res.length - 1];
    if (res[0] === res[1]) {
        return resLastElement;
    } else {
        return res[0];
    }
};

//Test: Ex2.4
findUniq([1, 1, 1, 2, 1, 1]); // Output: 2
findUniq([0, 0, 0.55, 0, 0]); // Output: 0.55
findUniq([0, 0, 1]); // Output: 1
findUniq([0.1, 0.1, 3]); // Output: 3
findUniq([0.2, 0.2, 0.1]); // Output: 0.1
