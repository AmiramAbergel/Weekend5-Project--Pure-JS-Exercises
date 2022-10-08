/*
-------- Ex6.1 - Mumbling -------- 
This time no story, no theory. The examples below show you how to write function accum :
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z .
*/

const accum = (str) => {
    let upper = str.toUpperCase();
    let strArray = upper.split("");
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] += strArray[i].toLowerCase().repeat(i);
    }
    return strArray.join("-");
};

// Test Ex6.1
accum("abcd"); // Output: 'A-Bb-Ccc-Dddd'
accum("RqaEzty"); // Output: 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
accum("cwAt"); // Output: 'C-Ww-Aaa-Tttt'
