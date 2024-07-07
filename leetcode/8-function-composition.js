/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {  
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            let fn = functions.pop();
            x = fn(x);
        }
        return x;
    }
};

// Example 1:
const fn1 = compose([x => x + 1, x => x * x, x => 2 * x]);
const x1 = 4;
console.log(fn1(x1)); // Output: 65

// Example 2:
const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
const x2 = 1;
console.log(fn2(x2)); // Output: 1000

// Example 3:
const fn3 = compose([]);
const x3 = 42;
console.log(fn3(x3)); // Output: 42