/*
-------- Ex6.2 - Counting Duplicates -------- 
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and
numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example:
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// const countDuplicates = (str) => {
//     let arr = str.toLowerCase().split("");
//     let res = [...new Set(arr)];
//     console.log(res);
// };

const countDuplicates2 = (str) => {
    let arr = str.toLowerCase().split("");
    let dupArr = arr.filter((element, index, self) => {
        return self.indexOf(element) !== index;
    });
    let res = dupArr.filter((element, index, self) => {
        return self.indexOf(element) === index;
    });

    return res.length;
};

// Test Ex6.2
countDuplicates2("abcde"); // Output: 0
countDuplicates2("aabbcde"); // Output: 2
countDuplicates2("aabBcde"); // Output: 2
countDuplicates2("indivisibility"); // Output: 1
countDuplicates2("Indivisibilities"); // Output: 2
countDuplicates2("aA11"); // Output: 2
countDuplicates2("ABBA"); // Output: 2
