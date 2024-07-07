/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (Object.keys(obj).length == 0) {
        return true;
    } else {
        return false;
    }
};


// Example1
fullObj = {"x": 5, "y": 42};
console.log(isEmpty(fullObj)); // false

// Example2
emptyObj = {};
console.log(isEmpty(emptyObj)); // true