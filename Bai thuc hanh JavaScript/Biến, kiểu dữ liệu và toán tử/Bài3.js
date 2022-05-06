let radius = +prompt("Xin nhập bán kính của hình tròn:");

let A = Math.PI*(radius**2);
console.log(A);
let ketQua = document.getElementById('result').innerHTML =
            (`Bán kính đã nhập: ${radius} <br>
            Diện tích hình tròn là: ${A.toFixed(2)}`);


// let x = Math.PI;
// console.log(x);