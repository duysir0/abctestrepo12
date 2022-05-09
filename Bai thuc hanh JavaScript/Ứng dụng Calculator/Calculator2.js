function functionTinh(TTselector) {
    let So1 = +document.getElementById('num1').value;
    let So2 = +document.getElementById('num2').value;
    let ketqua1 = 0
    switch (TTselector) {
        case '+': {
            ketqua1 = So1 + So2;
            break;
        }
        case '-': {
            ketqua1 = So1 - So2
            break;
        }
        case 'X': {
            ketqua1 = So1 * So2
            break;
        }
        case '/': {
            ketqua1 = So1 / So2
        }
    }
    document.getElementById('result').innerHTML = ketqua1
}


