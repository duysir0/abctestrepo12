function funcTest() {
    let thangTest = +document.getElementById('thangNhap').value
    switch (thangTest) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('result').innerHTML = (`${thangTest} là tháng có 31 ngày`)
            break;
        case 2:
            document.getElementById('result').innerHTML = (`${thangTest} là tháng có 28 hoặc 29 ngày`)
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('result').innerHTML = (`${thangTest} là tháng có 30 ngày`)
            break;
        default:
            document.getElementById("result").innerHTML = "Vui lòng chỉ nhập từ 1-12";
    }
}