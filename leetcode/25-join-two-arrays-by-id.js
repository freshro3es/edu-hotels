/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let map = new Map();

    for (let el of arr1) {
        map.set(el.id, el);
    }
    for (let el of arr2) {
        if (map.has(el.id)) {
            for (key in el) {
                map.get(el.id)[key] = el[key];
            }
        } else {
            map.set(el.id, el);
        }
    }
    let result = [];
    map.forEach((value, key, map) => {
        result.push(value);
    });
    return result.sort((a, b) => a.id - b.id);
};


// Example1
console.log(join(arr1 = [
    { "id": 1, "x": 1 },
    { "id": 2, "x": 9 }
],
    arr2 = [
        { "id": 3, "x": 5 }
    ]))

// Example2
console.log(join(
    arr1 = [{ "id": 1, "b": { "b": 94 }, "v": [4, 3], "y": 48 }],
    arr2 = [{ "id": 1, "b": { "c": 84 }, "v": [1, 3] }]
));

// Example26
console.log(join(
    arr1 = [{ "id": 1, "x": 36, "d": 26, "f": 35 }, { "id": 3, "c": 20, "z": 75 }],
    arr2 = [{ "id": 2, "o": 48, "z": 84, "y": 61 }]
));