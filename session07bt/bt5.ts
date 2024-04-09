let variable1: any;
let variable2: unknown;

variable1 = "Hello World";
console.log(variable1.toUpperCase()); // Không có lỗi biên dịch, vì kiểu any cho phép truy cập mọi phương thức và thuộc tính

variable2 = "Hello World";
// console.log(variable2.toUpperCase()); // Lỗi biên dịch: Property 'toUpperCase' does not exist on type 'unknown'. 
// Vì kiểu unknown không cho phép truy cập trực tiếp vào các phương thức hoặc thuộc tính của giá trị của nó

// Kiểm tra kiểu và thực hiện các phép gán an toàn với kiểu unknown
if (typeof variable2 === "string") {
    console.log(variable2.toUpperCase()); // Không có lỗi biên dịch, vì đã kiểm tra kiểu trước khi gọi phương thức toUpperCase()
}
