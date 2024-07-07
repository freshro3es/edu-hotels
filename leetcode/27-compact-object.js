/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function compact(obj) {
    if (Boolean(obj)) {
        if (Array.isArray(obj)) {
            let result = [];
            for (let value of obj) {
                if (Boolean(value)) {
                    if (typeof value == 'object') {
                        result.push(compact(value));
                    } else if (value) {
                        result.push(value);
                    }
                }
            }
            return result;
        } else if (typeof obj == 'object') {
            let result = {};
            for (let key in obj) {
                if (Boolean(obj[key])) {
                    if (typeof obj[key] == 'object') {
                        let compacted = compact(obj[key]);
                        if (compacted) {
                            result[key] = compacted;
                        }
                    } else if (obj[key]) {
                        result[key] = obj[key];
                    }
                }
            }
            return result;
        }
        return obj;
    } else {
        return;
    }
};


// Example1
// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
console.log(compactObject(obj = { "a": null, "b": [false, 1] }));


// Example2
// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5,[],[16]]
console.log(compactObject(obj = [null, 0, 5, [0], [false, 16]]));
