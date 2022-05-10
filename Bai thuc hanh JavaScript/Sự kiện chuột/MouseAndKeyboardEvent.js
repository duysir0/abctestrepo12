//Function di chuyển bằng phím chuột ấn button
function moveRight() {
    imgObj = document.getElementById('myImage');
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

function moveLeft() {
    imgObj = document.getElementById('myImage');
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
}

function moveUp() {
    imgObj = document.getElementById('myImage');
    imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
}

function moveDown() {
    imgObj = document.getElementById('myImage');
    imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
}

//Function di chuyển bằng phím WASD
function dichuyenPhim() {
    imgObj = document.getElementById('myImage')
    switch (event.keyCode) {
        case 65:   //phimA sang trái 10 pixel
            imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px'
            break;
        case 68:    //phimD sang phải 10 pixel
            imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px'
            break;
        case 87:    //phimW lên trên 10 pixel
            imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px'
            break;
        case 83:    //phimS xuống dưới 10 pixel
            imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px'
            break;
    }
}
