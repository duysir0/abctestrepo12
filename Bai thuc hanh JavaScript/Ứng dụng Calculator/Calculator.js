// let So1 = +document.getElementById('num1').value;
// let So2 = Number(document.getElementById('num2').value);
//
// //Thiet lap function cho button
function functionAdd() {
    let So1 = +document.getElementById('num1').value;
    let So2 = +document.getElementById('num2').value;
    KetQua = So1 + So2
    document.getElementById('result').innerHTML = KetQua
}
function functionSubtract() {
    let So1 = +document.getElementById('num1').value;
    let So2 = +document.getElementById('num2').value;
    KetQua = So1 - So2
    document.getElementById('result').innerHTML = KetQua
}
function functionMulti() {
    let So1 = +document.getElementById('num1').value;
    let So2 = +document.getElementById('num2').value;
    KetQua = So1 * So2
    document.getElementById('result').innerHTML = KetQua
}
function functionDivide() {
    let So1 = +document.getElementById('num1').value;
    let So2 = +document.getElementById('num2').value;
    KetQua = So1 / So2
    document.getElementById('result').innerHTML = KetQua
}
