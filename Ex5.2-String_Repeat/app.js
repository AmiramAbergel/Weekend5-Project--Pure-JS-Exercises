/*
-------- Ex5.2 - String Repeat -------- 
Write a function called repeat_str which repeats the given string src exactly count times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

const repeat_str1 = (counter, str) => {
    let resStr = str;
    for (let i = 1; i < counter; i++) {
        resStr = resStr.concat(str);
    }
    return resStr;
};

//Test: Ex5.2 (1)
repeat_str1(6, "I"); // Output: 'IIIIII'
repeat_str1(5, "Hello"); // Output: 'HelloHelloHelloHelloHello'

const repeat_str2 = (counter, str) => {
    return str.repeat(counter);
};

//Test: Ex5.2 (2)
repeat_str2(6, "I"); // Output: 'IIIIII'
repeat_str2(5, "Hello"); // Output: HelloHelloHelloHelloHello'
