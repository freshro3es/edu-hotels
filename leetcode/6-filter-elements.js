/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Example 1
const arr1 = [0,10,20,30];
const greater10 = function greaterThan10(n) { return n > 10; };
console.log(filter(arr1, greater10)); // Output: [20,30]

// Example 2
const arr2 = [1,2,3];
const idxEqual0 = function indexEqual0(n, i) { return i === 0; };
console.log(filter(arr2, idxEqual0)); // Output: [1]

// Example 3
const arr3 = [-2,-1,0,1,2];
const plus1 = function plusOne(n) { return n + 1 };
console.log(filter(arr3, plus1)); // Output: [-2,0,1,2]