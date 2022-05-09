let nhapNam = +prompt('Xin hãy nhập năm cần xét')
document.getElementById('content1').innerHTML =
    (`Năm đã nhập: ${nhapNam}`)
if (nhapNam % 4 == 0 && nhapNam % 100 != 0) {
    document.getElementById('result').innerHTML = (`Không`);
    else if (nhapNam % 100 == 0 && nhapNam






    document.getElementById('result').innerHTML = (`Có`)
} else {document.getElementById('result').innerHTML = (`Không`)


}