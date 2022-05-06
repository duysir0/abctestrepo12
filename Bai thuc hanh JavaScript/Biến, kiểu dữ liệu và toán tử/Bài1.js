let diemLy= +prompt("Nhập điểm Lý");
let diemHoa= +prompt("Nhập điểm Hóa");
let diemSinh= +prompt("Nhập điểm Sinh");
let tongDiem= diemSinh+diemHoa+diemLy;
let diemTB= tongDiem/3;
document.write("Điểm trung bình là: " + diemTB.toFixed(2)) //Làm tròn còn 2 số tp
document.write("<br>Tổng điểm là: " + tongDiem.toFixed(4)) //Làm tròn còn 4 số tp
