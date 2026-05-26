let math = Number(prompt("Nhập điểm Toán:"));
let physics = Number(prompt("Nhập điểm Vật lý:"));
let chemistry = Number(prompt("Nhập điểm Hóa học:"));

let average = (math + physics + chemistry) / 3;

document.write("Điểm trung bình là: " + average);