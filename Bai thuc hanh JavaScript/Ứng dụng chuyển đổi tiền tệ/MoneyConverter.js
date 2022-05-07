let Amount = document.getElementById('giatriAmount').value;
let fromCurrency = document.getElementById('giatriFromCurr').value;
let toCurrency = document.getElementById('giatriToCurr').value;
let currencyRate = {
    "VND": 1,
    "USD": 23
};

function convertCurrency() {
    let rateHientai = currencyRate * fromCurrency;
    let rateChuyentoi = currencyRate * toCurrency;
    let tienHientai = Amount * rateHientai;
    let tiendaQuyDoi = tienHientai / rateChuyentoi;

    return tiendaQuyDoi;
    }

    let tongtiendaQuydoi = convertCurrency();
    let ketQua = document.getElementById('Result').innerHTML =
    (` ${tongtiendaQuydoi}`)
// Ý tưởng: function (khi chọn 1 bên là VND > Bên còn lại tự set thành giá trị còn lại

// fromCurrency.addEventListener('change',smartCurrencySelect())

// if(fromCurrency=="USD") {toCurrency="VND"};
// else {toCurrency="USD"};
    // if (fromCurrency.value === "VND") {toCurrency.value.set = "USD";}
    // else {toCurrency.value = "VND";}





}
//{
//
// Let C
// }*/


// let InnConvert =
// addEventListener()

// function ChangeMoney() {
//     let Amount = document.getElementById("Amount").value;
//     let FromC = document.getElementById("From").value;
//     let To = document.getElementById("To").value;
//     let Result;
//
//
//     if (FromC == "USD" && To == "VND") {
//         Result = "Result: " + (Amount * 23000) + " Đ";
//     }
//     else if (FromC == "VND"&& To =="USD"){
//         Result = "Result: "+ (Amount / 23000) + " $";
//     }
//     else if (FromC == "VND") {
//         Result = "Result: " + Amount + " Đ"
//     } else {
//         Result = "Result: " + Amount + " $"
//     }
//
//     document.getElementById("Result").innerHTML = Result;
// }