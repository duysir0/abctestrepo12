function conCurrency() {
    let Amount = document.getElementById('valueAmount').value;
    let fromCurr = document.getElementById('valueFromCurr').value;
    let toCurr = document.getElementById('valueToCurr').value;
    let Result;
    if (fromCurr == "VND" && toCurr == "USD") {
        Result = Amount / 23000;
    } else if (fromCurr == "USD" && toCurr == "VND") {
        Result = Amount * 23000;
    } else {
        Result = Amount;
    }
    document.getElementById('Result').innerHTML = `${Result}`;
};

function conCurrency2() {
    let Amount = document.getElementById('valueAmount').selectedIndex;
    let fromCurr = document.getElementById('valueFromCurr').selectedIndex;
    let toCurr = document.getElementById('valueToCurr').selectedIndex;
    let Result;
    if (fromCurr == 0 && toCurr == "0") {
        Result = Amount / 23000;
    } else if (fromCurr == 1 && toCurr == 1) {
        Result = Amount * 23000;
    } else {
        Result = Amount;
    }
    document.getElementById('Result2').innerHTML = `${Result}`;
}