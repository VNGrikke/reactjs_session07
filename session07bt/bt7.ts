// Khai báo interface cho đối tượng sinh viên
interface Student {
    id: number;
    name: string;
    class: string;
}

// Khởi tạo mảng chứa các đối tượng sinh viên
let students1: Student[] = [
    { id: 1, name: "vu", class: "A" },
    { id: 2, name: "nam", class: "B" },
    { id: 3, name: "hung", class: "A" },
    { id: 4, name: "vuong", class: "C" }
];

function filterStudentsByClass(studentArray: Student[], className: string): Student[] {
    return studentArray.filter(student => student.class === className);
}

// Sử dụng hàm để lấy ra các sinh viên cùng lớp
let studentsInClass: Student[] = filterStudentsByClass(students1, "A");
console.log('học sinh lớp A:', studentsInClass);
