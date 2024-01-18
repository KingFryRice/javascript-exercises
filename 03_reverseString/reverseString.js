const reverseString = function(str) {
    let splitString = str.split("");
    let reverseSplit = splitString.reverse();
    let joinSplit = reverseSplit.join(""); 
    
    return joinSplit;
};

// Do not edit below this line
module.exports = reverseString;
