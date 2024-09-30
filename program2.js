/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Map of Roman numeral values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0; // To store the resulting integer
    let n = s.length; // Length of the Roman numeral string

    for (let i = 0; i < n; i++) {
        let currentVal = romanMap[s[i]];
        let nextVal = i + 1 < n ? romanMap[s[i + 1]] : 0;

        // If current value is less than the next value, subtract it
        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;
};

module.exports = { romanToInt };