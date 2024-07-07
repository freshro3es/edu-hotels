/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    while (n) {
        let result = [];
        let objCount = 0;
        for (let el of arr) {
            if (typeof el == 'object') {
                result.push(...el);
                objCount++;
            } else {
                result.push(el);
            }
        }
        arr = result;
        n = objCount ? n-1 : 0;
    }
    return arr;
};


// Example1
let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 1;
console.log(flat(arr, n));