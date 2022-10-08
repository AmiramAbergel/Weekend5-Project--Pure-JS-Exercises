/*
-------- Ex6.4 - isogram -------- 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. 
Ignore letter case.
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

const isIsogram = (str) => {
    let arr = str.toLowerCase().split("").sort();
    let dupArr = arr.filter((element, index) => {
        return arr.indexOf(element) !== index;
    });
    if (dupArr.length > 0) {
        return false;
    } else {
        return true;
    }
};

// Test: Ex6.4
isIsogram("Dermatoglyphics"); // Output: true
isIsogram("aba"); // Output: false
isIsogram("moOse"); // Output: false
isIsogram(""); // Output: true
