/*
-------- Ex5.1 - trimming string -------- 
It's pretty straightforward. 
Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.
*/

const trimmingString = (str) => {
    const trimmed = str.slice(1, str.length - 1);
    return trimmed;
};

//Test: Ex5.1
trimmingString("Amazing"); // Output: 'mazin'
trimmingString("Window"); // Output: 'indo'
trimmingString("Assignments"); // Output: 'ssignment'
trimmingString("Hey"); // Output: 'e'
