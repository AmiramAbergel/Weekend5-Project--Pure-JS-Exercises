/*
-------- Ex6.3 - organize strings -------- 
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

const longest = (s1, s2) => {
    let arr1 = s1.toLowerCase().split("");
    let arr2 = s2.toLowerCase().split("");
    let arr3 = arr1.concat(arr2);
    let res = [...new Set(arr3)].sort();
    return res.join("");
};

//Test: Ex6.3
longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"); // Output: 'abcdefklmopqwxy'
longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"); // Output: 'abcdefghijklmnopqrstuvwxyz'
