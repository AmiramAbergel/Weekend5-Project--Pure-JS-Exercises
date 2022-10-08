/*
-------- Ex5.7 - shortest words -------- 
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

const shortestWordsLength = (str) => {
    let wordsArr = str.split(" ");
    let shortest = wordsArr[0].length;
    for (let i = 1; i < wordsArr.length; i++) {
        let currentWLength = wordsArr[i].length;
        if (currentWLength <= shortest) {
            shortest = currentWLength;
        }
    }
    return shortest;
};

// Test: Ex5.7
shortestWordsLength("The quick brown fox jumps over the lazy dog."); // Output: 3
shortestWordsLength("Oh brave new world that has such people in it ."); // Output: 1
shortestWordsLength("Fred Barney"); // Output: 4
