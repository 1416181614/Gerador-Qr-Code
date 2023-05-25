const container = document.querySelector('.container'),
    qrInput = container.querySelector('.form input'),
    qrImg = document.getElementById('img_id');


function geraqrcode() {

    let qrValue = qrInput.value;
    if (!qrValue) {
        return;
    }

    x = document.getElementById("input_id").value
    qrImg.src = '';

    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=' + x;

    console.log("certo")

}


