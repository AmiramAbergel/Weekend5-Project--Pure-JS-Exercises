/*
-------- Ex1.1 - Yes or No -------- 
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
string for false.
*/

const isStr = (bool) => {
    return bool === true ? "Yes" : "No";
};

//Test Ex1.1
isStr(true); // "Yes"
isStr(false); // "No"
