/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    for (let num of nums) {
        init = fn(init, num);
    }
    return init;
};


// Example1
arr1 = [1,2,3,4];
const sum = function sumVar(accum, curr) { return accum + curr; };
init1 = 0;
console.log(reduce(arr1, sum, init1)); // Output: 10

// Example2
arr2 = [1,2,3,4];
const sumPow = function sumVarPow(accum, curr) { return accum + curr * curr; };
init2 = 100;
console.log(reduce(arr2, sumPow, init2)); // Output: 130

// Example3
arr3 = []
const sumZero = function sumVarZero(accum, curr) { return 0; };
init3 = 25;
console.log(reduce(arr3, sumZero, init3)); // Output: 25