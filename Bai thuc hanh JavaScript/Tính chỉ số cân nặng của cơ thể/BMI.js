
function abc()
{   let Weight = document.getElementById('inWeight').value;
    let Height = document.getElementById('inHeight').value;
    let bmi = Weight / ( Height ** 2 );

    document.getElementById('BMIhientai').innerHTML = (`BMI hiện tại: ${bmi.toFixed(2)}`)
    if (bmi < 18)
        document.getElementById("result").innerHTML = (`Bộ Xương`);
    else if (bmi < 25.0)
        document.getElementById("result").innerHTML = (`Bình Thường`);
    else if (bmi < 30.0)
        document.getElementById("result").innerHTML =  (`Hơi béo`);
    else if (bmi >= 30.0)
        document.getElementById("result").innerHTML =  (`Khủng long`)
    else `null`;
}