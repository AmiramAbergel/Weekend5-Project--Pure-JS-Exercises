/*
-------- Ex2.2 - One and Zero - Binary -------- 
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

const oneAndZero = (arr) => {
    let resCount = 0;
    let counter = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        resCount += Math.pow(2, counter) * arr[i];
        counter++;
    }
    return resCount;
};

//Test: Ex2.2
oneAndZero([0, 0, 0, 1]); // Output: 1
oneAndZero([0, 0, 1, 0]); // Output: 2
oneAndZero([0, 1, 0, 1]); // Output: 5
oneAndZero([1, 0, 0, 1]); // Output: 9
oneAndZero([0, 0, 1, 0]); // Output: 2
oneAndZero([1, 1, 1, 1]); // Output: 15
oneAndZero([0, 1, 1, 0]); // Output: 6
oneAndZero([1, 0, 1, 1]); // Output: 11
