function removeFalsyProperties2(obj: any): any {
    for (const key in obj) {
        if (!obj[key]) {
            delete obj[key];
        } else if (typeof obj[key] === 'object') {
            if (Array.isArray(obj[key])) {
                for (const index in obj[key]) {
                    if (!obj[key][index]) {
                        delete obj[key][index];
                    }
                }
            } else {
                obj[key] = removeFalsyProperties2(obj[key]);
                if (Object.keys(obj[key]).length === 0) {
                    delete obj[key];
                }
            }
        }
    }
    return obj;
}

let inputObject2 = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' }
  };

let resultObject2 = removeFalsyProperties2(inputObject2);
console.log(resultObject2);
