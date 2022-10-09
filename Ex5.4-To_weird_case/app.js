/*
-------- Ex5.4 - To Weird Case -------- 
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
string with all even indexed characters in each word upper cased, and all odd indexed
characters in each word lower cased. 
The indexing just explained is zero based, so the zero-ith index is even, 
therefore that character should be upper cased.
The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. 
Words will be separated by a single space(' ').
Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

const toWeirdCase = (str) => {
    let res = str.toLowerCase().split(" ");
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i].split("");
        for (let j = 0; j < res[i].length; j++) {
            if (j % 2 === 0) {
                res[i][j] = res[i][j].toUpperCase();
            }
        }
        res[i] = res[i].join("");
    }
    return res.join(" ");
};

//Test: Ex5.4
toWeirdCase("String"); // Output: 'StRiNg'
toWeirdCase("Weird string case"); // Output: 'WeIrD StRiNg CaSe'
