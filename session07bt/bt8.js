"use strict";
// Khởi tạo đối tượng Book
let book = {
    title: "cách làm giàu",
    author: "vương",
    price: 99.99,
    printBook() {
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Price:", this.price);
    },
    updateBook(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
};
// In thông tin ban đầu của sách
console.log("Thông tin sách ban đầu:");
book.printBook();
// Cập nhật thông tin sách
book.updateBook("cách làm giàu 2", "Vương", 199.99);
// In thông tin sau khi cập nhật
console.log("Thông tin sách sau khi cập nhật:");
book.printBook();
