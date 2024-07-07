/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let result = {};
    for (let el of this) {
        let res = fn(el);
        if (res in result) {
            result[res].push(el);
        } else {
            result[res] = [el];
        }
    }
    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */