/*
-------- Ex5.5 - Abbreviate two words -------- 
Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F
*/

const abbreviateName = (name) => {
    let arr = name.split(" ");
    arr[0] = arr[0].slice(0, 1);
    arr[1] = arr[1].slice(0, 1);
    return arr.join(".");
};

//Test: Ex5.5
abbreviateName("Sam Harris"); // Output: 'S.H'
abbreviateName("Patrick Feeney"); // Output: 'P.F'
