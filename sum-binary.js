/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const intA = parseInt(a, 2)
    const intB = parseInt(b,2);
    const total = intA + intB 
    return total.toString(2)
};
// whip failing test 195/296
// edge cases not addressing when adding large binary together 
