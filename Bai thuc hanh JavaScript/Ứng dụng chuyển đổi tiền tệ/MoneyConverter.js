function conCurrency() {
    Amount = document.getElementById('valueAmount').value;
    fromCurrency = document.getElementById('valueFromCurr').value;
    toCurrency = document.getElementById('valueToCurr').value;
    ketQua = Amount * toCurrency / fromCurrency;
    document.getElementById('Result').innerHTML =
        ketQua;

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