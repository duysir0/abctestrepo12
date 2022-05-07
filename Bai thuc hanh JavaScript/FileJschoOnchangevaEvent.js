const selectedElement = document.getElementById("mySelect");
selectedElement.addEventListener("change",changeFunction)

function changeFunction() {
        const selectValue = document.getElementById("mySelect").value;
        alert(selectValue);
        }
