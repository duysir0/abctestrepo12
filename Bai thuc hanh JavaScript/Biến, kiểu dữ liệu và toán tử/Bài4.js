let radius = +prompt("Xin nhập bán kính của hình tròn:");

let C = Math.PI*2*radius;

let chuvi = document.getElementById('giday').innerHTML=
        (`Bán kính đã nhập: ${radius} <br>
         Chu vi hình tròn là: ${C.toFixed(2)}`);
