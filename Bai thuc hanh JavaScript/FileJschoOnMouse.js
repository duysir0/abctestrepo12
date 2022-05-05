const onmouseOver = document.getElementById("chudethu")
    onmouseOver.addEventListener("mouseover",mouseOver)
const onmoueOut = document.getElementById("chudethu")
    onmoueOut.addEventListener("mouseout",mouseOut)

function mouseOver() {
    document.getElementById("chudethu").style.color="red";

}
function mouseOut() {
    document.getElementById("chudethu").style.color="green"
}