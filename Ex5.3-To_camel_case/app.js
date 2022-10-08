/*
-------- Ex5.3 - To Camel Case -------- 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was
capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples:
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

const toCamelCase = (str) => {
    const regexp = /-./gi;
    let res = str.replace(regexp, (letter, index) => {
        letter.charAt(index).toUpperCase();
    });
    return res;
};

//Test: Ex5.3
toCamelCase("the-stealth-warrior"); // Output:
//toCamelCase("The_Stealth_Warrior"); // Output:
