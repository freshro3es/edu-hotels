/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let count = 0;
    let result = [];
    let subresult = [];
    for (let el of arr) {
        count++;
        if (count < size+1) {
            subresult.push(el);
        } else {
            result.push(subresult);
            subresult = [el];
            count = 1;
        }
    }
    if (subresult.length > 0) {
        result.push(subresult);
    }
    return result;
};