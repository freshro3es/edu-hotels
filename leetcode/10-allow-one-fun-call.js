/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let calledOnce = false;
    return  function(...args){
        return calledOnce++ ? undefined : fn(...args);
    };
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn
