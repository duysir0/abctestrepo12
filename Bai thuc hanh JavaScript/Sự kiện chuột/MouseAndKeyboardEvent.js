//Function di chuyển -  gán event 'onclick' cho button tương ứng
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

//Function di chuyển bằng bàn phím phím
function dichuyenPhim() {
    imgObj = document.getElementById('myImage')
    switch (event.keyCode) {
        case 65:   //phím A
        case 37:    //phím mũi tên Trái
            moveLeft()     //gọi function moveLeft() - di chuyên hình sang trái 10 pixel
            break;
        case 68:    //phím D
        case 39:    //phim mũi tên Phải
            moveRight()   //gọi function moveRight() - di chuyên hình sang phải 10 pixel
            break;
        case 87:    //phím W
        case 38:    //phím mũi tên Up
            moveUp() //gọi function moveUp() - di chuyên hình lên trên 10 pixel
            break;
        case 83:    //phím S
        case 40:    //phím mũi tên Down
            moveDown()     //gọi function moveDown() - di chuyên hình xuống 10 pixel
            break;
    }
}
