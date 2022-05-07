let Amount = document.getElementById('giatriAmount').value;
let fromCurrency = document.getElementById('giatriFromCurr').value;
let toCurrency = document.getElementById('giatriToCurr').value;

fromCurrency.addEventListener("change",smartCurrencySelect)

function smartCurrencySelect() {
    if (fromCurrency.value === "VND") {toCurrency.value = "USD";}
    else {toCurrency.value = "VND";}

// Ý tưởng: function (khi chọn 1 bên là VND > Bên còn lại tự set thành giá trị còn lại)



}

function InnConvert() {
    console.log(Amount)
    console.log(fromCurrency)
    console.log(toCurrency)
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