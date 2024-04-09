function removeFalsyProperties(obj: any): any {
    for (const key in obj) {
        if (!obj[key]) {
            delete obj[key];
        }
    }
    return obj;
}

// Sử dụng hàm để loại bỏ các thuộc tính có giá trị falsy từ đối tượng
let inputObject = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    }
    ;

let resultObject = removeFalsyProperties(inputObject);
console.log(resultObject);
