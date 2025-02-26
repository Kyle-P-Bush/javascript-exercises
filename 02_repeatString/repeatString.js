const repeatString = function(string, num) {
    if (num < 0) return 'ERROR'
    let word = "";
    for (let index = 1; index <= num; index++) {
        word = word + string;
    } 
    return word;
};

// Do not edit below this line
module.exports = repeatString;
