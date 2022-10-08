/*
-------- Ex5.6 - Mask -------- 
Usually when you buy something, you're asked whether your credit card number, phone number
or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. 
Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples:
maskify("4556364607935616") == "############5616"
maskify( "64607935616") == "#######5616"
maskify( "1") == "1"
maskify( "") == ""
// "What was the name of your first pet?"
maskify("Skippy") == "##ippy"
maskify("Nananananananananananananananana Batman!") ==
"####################################man!"
*/

const maskify = (cardNumber) => {
    if (cardNumber.length <= 4) {
        return cardNumber.slice(-4);
    } else {
        let last4 = cardNumber.slice(-4);
        let maskNum = cardNumber.slice(1, cardNumber.length - 4);
        let res = "#".repeat(maskNum.length + 1) + last4;
        return res;
    }
};

// Test Ex5.6
maskify("4556364607935616"); // Output: '############5616'
maskify("64607935616"); // Output: '#######5616'
maskify("1"); // Output: '1'
maskify(""); // Output: ''
maskify("Skippy"); // Output: '##ippy'
maskify("Nananananananananananananananana Batman!"); // Output: '####################################man!'
