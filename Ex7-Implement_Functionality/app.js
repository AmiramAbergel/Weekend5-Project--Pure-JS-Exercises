/*
-------- Ex7 - Implement The Following JS Methods -------- 
Implement the following methods -
- Filter
- ForEach
- Map
Using only for(), array and objects (without other js methods)
Find Bugs \ Debug Code
Bug !!!!!
*/

// Filter
const myFilter = (callback) => {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// ForEach
const myForEach = (callback) => {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

// Map
const myMap = (callback) => {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};
