"use strict";
function removeFalsyProperties(obj) {
    for (const key in obj) {
        if (!obj[key]) {
            delete obj[key];
        }
    }
    return obj;
}
let inputObject = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
};
let resultObject = removeFalsyProperties(inputObject);
console.log(resultObject);
